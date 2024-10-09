import Navbar from '../components/navbar';
import { posts } from './data';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: "url('/mainpic2.jpeg')", // Change to your image path
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content on top of the background */}
        <div className="relative z-10 text-center p-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blogs</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover healthy recipes, tips, and more! Browse our latest posts for delicious meals and healthy lifestyle ideas.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="py-4 bg-gray-400">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 text-center">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-xl text-gray-800">{post.title}</h2>
                <p className="text-gray-700 mt-2">{post.shortDescription}</p>
                <Link href={`/blog/${post.slug}`}
                   className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition ">
                    {post.button}
                  
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
