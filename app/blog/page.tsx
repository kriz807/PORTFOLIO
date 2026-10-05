import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { blogs } from '../../data/blogs';

export default function BlogPage(){
  return <main className="blog-page">
    <section className="blog-hero reveal">
      <span className="eyebrow">NOTES & IDEAS</span>
      <h1>Thoughts from what<br/>I <em>build & learn.</em></h1>
      <p>Exploring software engineering, artificial intelligence, machine learning and the lessons I pick up while building real-world projects.</p>
    </section>

    <section className="blog-grid">
      {blogs.map((blog,index)=>(
        <article className="blog-card reveal" key={blog.slug}>
          <div className="blog-card-top">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-number">0{index+1}</span>
          </div>

          <div className="blog-content">
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
          </div>

          <div className="blog-card-bottom">
            <div className="blog-meta">
              <span>{blog.date}</span>
              <span><Clock size={14}/>{blog.readTime}</span>
            </div>

            <Link href={`/blog/${blog.slug}`}>
              Read article <ArrowUpRight size={16}/>
            </Link>
          </div>
        </article>
      ))}
    </section>
  </main>
}