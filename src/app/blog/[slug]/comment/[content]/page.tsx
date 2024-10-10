import { comments } from "../../../data";
import { posts } from "../../../data";

type CommentProps = {
  params: {
    slug: string;
    content: string;
  };
};
export async function generateStaticParams() {
  return comments.map(comment => ({
    content: comment.content,
  }));
}
  
const CommentPage = async ({ params }: CommentProps) => {
  const post = posts.find(post => post.slug1 === params.slug);
  const comment = comments.find(c => encodeURIComponent(c.content) === params.content);

    
  
    if (!comment) {
      return (
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Comment Not Found</h1>
          <p>The comment you are looking for does not exist.</p>
        </div>
      );
    }

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Comment by {comment.name}</h1>
        <p>{comment.content}</p>
      </div>
    );
  };
  
  export default CommentPage;

