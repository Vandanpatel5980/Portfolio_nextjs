import { posts } from "../../data/posts.js";
import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
  const data = await params;

  const post = posts.find((p) => p.slug === data.id);

  if (!post) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={post.image} alt={post.title} className="w-full mb-4" />

      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>

      <p className="text-lg">{post.content}</p>
    </div>
  );
}