import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src/posts", `${params.slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{data.title || "Untitled Post"}</h1>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
}
