import {
  LayoutDashboard,
  Users,
  Settings,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import "../../App.css";
const Sidebar = () => {
  return (
    <aside className="w-74 khmer-regular bg-white border-r border-gray-200 h-[calc(100vh-64px)] sticky top-16 hidden lg:flex flex-col">
      <div className="p-6 flex flex-col h-full">
        {/* Navigation Section */}
        <div className="space-y-1 mb-8">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
            មេនុយ (Menu)
          </p>

          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 w-full px-3 py-2 bg-amber-50
          text-amber-700 rounded-lg font-medium transition-colors">
            <LayoutDashboard size={18} /> ផ្ទាំងគ្រប់គ្រង (Dashboard)
          </NavLink>
          <NavLink
            to="/guests"
            className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Users size={18} /> បញ្ជីឈ្មោះភ្ញៀវ (Guest List)
          </NavLink>
        </div>

        {/* Quick Filters Section */}
        <div className="space-y-1 mb-8">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 px-3">
            តម្រង (Quick Filters)
          </p>
          <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <AlertCircle size={18} /> អ្នកជំពាក់ (Debt)
          </button>
          <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
            <CheckCircle size={18} /> អ្នកសងដៃរួច (Payback)
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors">
            <Settings size={18} /> ការកំណត់ (Settings)
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
