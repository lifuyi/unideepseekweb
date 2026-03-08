import React from 'react';
import { useParams } from 'react-router-dom';
import PostPageComponent from '../components/PostPage';
import type { Post } from '../components/types';

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = React.useState<Post | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (slug: string) => {
    try {
      setLoading(true);
      const response = await fetch(`/data/${slug}.json`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        setPost(null);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <PostPageComponent post={post} loading={loading} />
    </div>
  );
}