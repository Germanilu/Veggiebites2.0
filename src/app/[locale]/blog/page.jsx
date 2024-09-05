import { articles } from '@/static/articles';
import {Link}       from '@/navigation';
import './page.scss';

export const metadata = {
  title:"Blog",
  description:"Blog Description"
}

/**
 * @component Blog
 * 
 * @returns Map the articles and return each one with title, description and link 
 */
const Blog = () => {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <Link href={`/blog/${article.slug}`}key={article.id}>
            <div  className="article-container">
              <h3>{article.title}</h3>
              <p>{article.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
