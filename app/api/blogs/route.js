import { connectDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Blog";

export async function GET() {
  await connectDB();

  const posts = await Post.find();

  return Response.json(posts);
}

export async function POST(req) {
  await connectDB();

  const body = await req.json();

  const newPost = await Post.create(body);

  return Response.json(newPost);
}