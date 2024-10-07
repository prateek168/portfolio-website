import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-main flex items-center justify-center min-h-screen font-mono text-white">
        <div className="relative w-full max-w-4xl">
          {/* Line numbers */}
          <div className="absolute left-0 top-0 w-10 pl-2 text-right text-gray-500">
            {Array.from({ length: 7 }).map((_, index) => (
              <p key={index}>{index + 1}</p> // Generating line numbers
            ))}
          </div>

          {/* Hero section content */}
          <div className="pl-16">
            {/* Create space between line numbers and content */}
            <p className="text-base text-gray-500">
              {/* Indentation effect */}
              <span className="whitespace-pre">{"    "}</span>About, I&apos;m
            </p>
            <h1 className="text-5xl font-bold text-center my-4">Your Name</h1>
            <p className="text-lg text-gray-500 text-center">
              I&apos;m a web developer.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
