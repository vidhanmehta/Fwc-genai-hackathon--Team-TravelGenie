"use client";
import { useState } from "react";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
};

const posts: BlogPost[] = [
  { slug: "personalisation", title: "Personalisation in Travel using AI" },
  { slug: "Luxury", title: "Luxury vs. Budget Travel: Which One is Right for You?" }, // Add more posts here
];

export default function BlogPage() {
  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`} passHref>
              <button className="w-full text-left bg-gray-800 hover:bg-gray-700 p-4 rounded-lg font-semibold text-xl">
                {post.title}
              </button>
            </Link>
          </div>
        ))}pe
      </div>
    </div>
  );
}
