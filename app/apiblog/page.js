"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="p-6">
        <h1 className="text-2xl font-extrabold text-center">Api Blogs </h1>
        <div className="grid grid-cols-3 gap-3.5">
            {posts.map((post) => (
                <div key={post._id} className=" rounded-xl overflow-hidden shadow-md">
                    <Image src={post.image} alt={post.title} height={50} width={100}  className="w-full h-[200px] " />

                <h2 className="text-xl font-bold text-center">{post.title}</h2>
                <p className="text-center">{post.description}</p>
                </div>
            ))}
        </div>
    </div>
  );
}