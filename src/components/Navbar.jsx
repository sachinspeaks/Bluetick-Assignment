import logo from "../assets/b-logo.png";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <a href="https://www.bluetickconsultants.com/">
            <img
              src={logo}
              alt="BlueTick COnsultants Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <li className="text-white cursor-pointer">Home</li>
          <li className="text-white cursor-pointer">About</li>
          <li className="text-white cursor-pointer">Services</li>
          <li className="text-white cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
