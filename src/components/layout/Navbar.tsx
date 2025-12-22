import { Search, Wallet, Bell, Menu, Sun, Moon } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center ">
          {/* 1. Logo & App Name */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-2 rounded-lg">
              <Wallet className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-amber-900 dark:text-amber-400 leading-none font-khmer">
                បញ្ជីចងដៃ
              </span>
              <span className="text-[10px] text-amber-600 dark:text-amber-500 uppercase tracking-widest font-medium">
                Digital Ledger
              </span>
            </div>
          </div>

          {/* 2. Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700
                           rounded-xl bg-gray-50 dark:bg-gray-800
                           text-gray-900 dark:text-gray-100
                           placeholder-gray-500 dark:placeholder-gray-400
                           focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                placeholder="ស្វែងរកឈ្មោះភ្ញៀវ... (Search name)"
              />
            </div>
          </div>

          {/* 3. Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* 🌙 Dark Mode Toggle */}
            <button
              onClick={toggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800
                         text-gray-600 dark:text-gray-300
                         hover:text-amber-600 transition"
              aria-label="Toggle dark mode">
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button className="p-2 text-gray-400 hover:text-amber-600 transition-colors">
              <Bell className="w-6 h-6" />
            </button>

            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300">
              <Menu className="w-6 h-6" />
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-4 ml-2">
              <div
                className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900
                              flex items-center justify-center border border-amber-200 dark:border-amber-800">
                <span className="text-amber-700 dark:text-amber-300 font-bold text-xs">
                  AD
                </span>
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-200">
                  Admin User
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  អ្នកកត់ត្រា
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
