import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Post } from './types';

interface PostListProps {
  posts: Post[];
  loading?: boolean;
}

export default function PostList({ posts, loading }: PostListProps) {
  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 animate-pulse">
            <div className="aspect-[4/3] bg-slate-200" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-slate-200 rounded w-1/4" />
              <div className="h-6 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500 text-lg">No posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
        >
          <Link to={`/blog/${post.slug}`}>
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={post.image || `https://picsum.photos/seed/${post.slug}/800/600`}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
                {post.category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-4 line-clamp-2">
                {post.description || post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700">
                Read more <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
