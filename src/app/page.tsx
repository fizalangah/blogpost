
import Link from "next/link";

//pages/index.js or pages/index.tsx
const Home = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-white text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('mainpic.jpeg')", // Change to your image path
          opacity: 0.5, // Set the opacity to a lower value (0.3 for lighter image)
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Optional: Darker overlay for text visibility */}
      <div className="relative z-10"> {/* Ensures text is above the overlay */}
        <h1 className="text-4xl font-bold">Welcome to Our Healthy Food Journey!</h1>
        <h2 className="text-2xl mt-4">Explore Delicious Recipes and Embrace a Healthier Lifestyle!</h2>
        <p className="mt-6 px-4">
           we believe that healthy eating should be enjoyable and accessible.
          Join us as we share our favorite nutritious recipes, practical tips, and inspiring ideas
          to make your journey to wellness delicious and fulfilling!
        </p>
       <Link href={"/blog"}> <button className="mt-8 px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition">
          read blogs!
        </button></Link>
      </div>
    </div>
  );
};

export default Home;
