export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  image: string;
  description: string;
  excerpt?: string;
  content?: string;
}

export type PostInput = Omit<Post, 'slug'> & {
  content: string;
};
