import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import type { Post } from './types';

interface PostPageProps {
  post: Post | null;
  loading?: boolean;
}

export default function PostPage({ post, loading }: PostPageProps) {
  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-slate-200 rounded w-3/4" />
          <div className="h-4 bg-slate-200 rounded w-1/4" />
          <div className="aspect-video bg-slate-200 rounded-2xl" />
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded" />
            <div className="h-4 bg-slate-200 rounded w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Post not found</h1>
        <Link to="/blog" className="text-red-600 hover:text-red-700">
          ← Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      {/* Back button */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-red-600 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all posts
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
          <span className="bg-red-600/10 text-red-600 px-3 py-1 rounded-full font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-slate-600">{post.description}</p>
      </header>

      {/* Featured Image */}
      <div className="aspect-video rounded-2xl overflow-hidden mb-8">
        <img
          src={post.image || `https://picsum.photos/seed/${post.slug}/1200/675`}
          alt={post.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-blockquote:border-l-red-600 prose-blockquote:bg-red-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-img:rounded-xl prose-table:overflow-hidden prose-table:rounded-lg prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-slate-200">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content || ''}
        </ReactMarkdown>
      </div>
    </motion.article>
  );
}