import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import webDevImage from "../assets/hero.png"; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow flex bg-main font-mono text-white">
        {/* Line numbers */}
        <div className="relative w-10 pl-8 mt-11 text-right text-gray-500">
          {Array.from({ length: 30 }).map((_, index) => (
            <p key={index} className={`opacity-${30 - index}`}>
              {index + 1}
            </p>
          ))}
        </div>

        {/* Content Area with Increasing Boxes */}
        <div className="flex-grow flex items-center justify-center">
          <div className="relative w-full max-w-4xl flex items-center">
            {/* First Left Box */}
            <div className="flex-grow">
              <div
                className="h-full border-l border-gray-500"
                style={{ height: "400px", marginTop: "-20px" }}
              ></div>
            </div>

            {/* Hero section content */}
            <div className="flex flex-col items-start mx-8">
              <p className="text-xl text-gray-500 mb-4">
                {" "}
                {/* Increased gap */}
                <span className="whitespace-pre">{"    "}</span>Hello, I&apos;m
              </p>
              <h1 className="text-6xl font-bold text-left my-4">
                Prateek Verma
              </h1>
              <p className="text-lg text-blue-500 text-center mb-6">
                {" "}
                {/* Increased gap */}
                I&apos;m a web developer.
              </p>
            </div>

            {/* Second Left Box */}
            <div className="flex-grow">
              <div
                className="h-full border-l border-gray-500"
                style={{ height: "500px", marginTop: "-20px" }}
              ></div>
            </div>

            {/* Image Section */}
            <div className="ml-8 pl-20 pb-12">
              <img
                src={webDevImage}
                alt="Web Developer"
                className="w-60 h-60" // Adjust margin to space out from text
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
