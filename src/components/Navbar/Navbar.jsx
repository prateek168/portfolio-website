import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom

const Navbar = () => {
  // Use useLocation to access the current route
  const location = useLocation();

  // Array of file options and corresponding routes
  const files = [
    { name: "index.html", path: "/" },
    { name: "about.css", path: "/about" },
    { name: "projects.js", path: "/projects" },
  ];

  return (
    <div className="bg-navbar  pr-2 shadow-md">
      <div className="flex ">
        {files.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`relative px-4 py-2 text-white cursor-pointer transition duration-200 
              ${
                location.pathname === path // Check if current path matches
                  ? "bg-main shadow-lg"
                  : "bg-navbarNotselected hover:bg-gray-700"
              }`}
          >
            <span className="font-medium">{name}</span>
            {location.pathname === path && ( // Render the yellow line conditionally
              <div className="absolute inset-x-0 top-0 h-1 bg-yellow-500 rounded" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
