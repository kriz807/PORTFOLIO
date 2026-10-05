export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const blogs: BlogPost[] = [
  {
    slug: "optimizing-cnn-models-for-edge-deployment",
    title: "Optimizing CNN Models for Efficient Edge Deployment",
    excerpt:
      "A practical look at how Neural Architecture Search, quantization, and model optimization can make deep learning models smaller and more deployment-friendly.",
    category: "AI & Machine Learning",
    date: "Coming Soon",
    readTime: "6 min read",
    featured: true,
  },
  {
    slug: "building-modern-full-stack-applications",
    title: "How I Approach Building Modern Full-Stack Applications",
    excerpt:
      "From designing the frontend experience to APIs, databases and deployment — a look at the engineering decisions behind building maintainable full-stack products.",
    category: "Software Engineering",
    date: "Coming Soon",
    readTime: "5 min read",
  },
];