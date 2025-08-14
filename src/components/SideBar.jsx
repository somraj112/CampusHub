import {
  Home,
  Newspaper,
  Calendar,
  CalendarDays,
  FileText,
  ShoppingCart,
  Search,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", icon: <Home size={20} />, path: "/" },
  { name: "News", icon: <Newspaper size={20} />, path: "/news" },
  { name: "Schedule", icon: <Calendar size={20} />, path: "/schedule" },
  { name: "Events", icon: <CalendarDays size={20} />, path: "/events" },
  { name: "Notes", icon: <FileText size={20} />, path: "/notes" },
  { name: "Market", icon: <ShoppingCart size={20} />, path: "/market" },
  { name: "Lost+Found", icon: <Search size={20} />, path: "/lost-found" },
];

export default function SideBar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex flex-col justify-between h-screen bg-[#0f172a] text-white p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-6 text-gray-400 hover:text-white"
        >
          {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <div className="flex items-center justify-center w-8 h-8 bg-white text-black rounded-full font-bold">
            c
          </div>
          {isOpen && (
            <div>
              <h1 className="text-lg font-bold">CampusHub</h1>
              <p className="text-sm text-gray-400">Campus made simple</p>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                active === item.name
                  ? "bg-white text-black font-semibold"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Profile Section */}
      <div
        className={`flex items-center gap-3 p-3 rounded-lg bg-gray-800 transition-all duration-300 ${
          !isOpen ? "justify-center" : ""
        }`}
      >
        <div className="w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full">
          <User size={20} />
        </div>
        {isOpen && (
          <div>
            <p className="font-semibold">somrajnandi112</p>
            <p className="text-xs text-gray-400">Premium Member</p>
          </div>
        )}
      </div>
    </div>
  );
}
