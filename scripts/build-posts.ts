import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(__dirname, '../content/posts');
const outputDirectory = path.join(__dirname, '../public/data');

interface PostFrontmatter {
  title: string;
  date: string;
  category?: string;
  author?: string;
  image?: string;
  description?: string;
}

interface Post extends PostFrontmatter {
  slug: string;
  excerpt: string;
  content?: string;
}

function buildPosts() {
  console.log('Building static posts data...');
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
  }
  
  // Read all markdown files
  const files = fs.readdirSync(postsDirectory);
  const posts: Post[] = [];
  
  files
    .filter(file => file.endsWith('.md'))
    .forEach(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      // Generate slug from filename
      const slug = file.replace('.md', '');
      
      // Generate excerpt from content (first 200 chars)
      const excerpt = content
        .replace(/^#.*$/gm, '')
        .replace(/\n/g, ' ')
        .trim()
        .substring(0, 200) + '...';
      
      const frontmatter = data as PostFrontmatter;
      
      posts.push({
        slug,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        category: frontmatter.category || 'General',
        author: frontmatter.author || 'UniSeek Team',
        image: frontmatter.image || '',
        description: frontmatter.description || '',
        excerpt,
      });
    });
  
  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Write posts index
  fs.writeFileSync(
    path.join(outputDirectory, 'posts.json'),
    JSON.stringify(posts, null, 2)
  );
  console.log(`Generated posts.json with ${posts.length} posts`);
  
  // Write individual post files
  files
    .filter(file => file.endsWith('.md'))
    .forEach(file => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      const slug = file.replace('.md', '');
      const frontmatter = data as PostFrontmatter;
      
      const excerpt = content
        .replace(/^#.*$/gm, '')
        .replace(/\n/g, ' ')
        .trim()
        .substring(0, 200) + '...';
      
      const post: Post = {
        slug,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || new Date().toISOString().split('T')[0],
        category: frontmatter.category || 'General',
        author: frontmatter.author || 'UniSeek Team',
        image: frontmatter.image || '',
        description: frontmatter.description || '',
        excerpt,
        content,
      };
      
      fs.writeFileSync(
        path.join(outputDirectory, `${slug}.json`),
        JSON.stringify(post, null, 2)
      );
      console.log(`Generated ${slug}.json`);
    });
  
  console.log('Build complete!');
}

buildPosts();
