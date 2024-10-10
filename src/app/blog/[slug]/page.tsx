import { posts } from "../data"; // Adjust the import path as necessary
import Link from "next/link"
import { comments } from "../data";
type PostProps = {
  params: {
    slug: string;
  };
};



 
// Fetch static paths for the dynamic blog posts
export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug1,
  }));
}

// Fetch the data for the specific post based on the slug
const Post = async ({ params }: PostProps) => {
  const post = posts.find(post => post.slug1 === params.slug);

  if (!post) {
    // Handle 404 if post not found
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p>The post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${post.image})`, // Use the post's image as the background
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
        <p className="text-lg leading-relaxed whitespace-pre-wrap">{post.fullContent}</p>
      </div>




       {/* Static Comments Section */}
       <div className="mt-10 text-black flex justify-start mr-[400px]">
        <h2 className="text-2xl font-semibold mb-4 justify-start items-start">Comments</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="border-t pt-4 mt-4">
              <Link href={`/blog/${post.slug1}/comment/${encodeURIComponent(comment.content)}`}>

               <p className="font-bold">{comment.name}</p>
               
               </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

 export default Post;
