import React from "react";
import { Users, Banknote, Landmark, TrendingUp } from "lucide-react";

interface StatsProps {
  totalUSD: number;
  totalKHR: number;
  guestCount: number;
}

const ContributionStats: React.FC<StatsProps> = ({
  totalUSD,
  totalKHR,
  guestCount,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* 1. Total USD Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl text-green-600">
            <Banknote size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-slate-400 font-khmer">
              សរុបជាដុល្លារ
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              ${totalUSD}
            </h3>
          </div>
        </div>
        <TrendingUp className="absolute -right-2 -bottom-2 text-gray-50 dark:text-slate-800/50 w-24 h-24 -rotate-12 transition-transform group-hover:scale-110" />
      </div>

      {/* 2. Total KHR Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
            <Landmark size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-slate-400 font-khmer">
              សរុបជារៀល
            </p>
            <h3 className="text-2xl flex items-center font-bold text-gray-900 dark:text-white mt-1">
              {totalKHR.toLocaleString()}{" "}
              <span className="text-[32px] mt-0.75 font-normal">៛</span>
            </h3>
          </div>
        </div>
        <TrendingUp className="absolute -right-2 -bottom-2 text-gray-50 dark:text-slate-800/50 w-24 h-24 -rotate-12 transition-transform group-hover:scale-110" />
      </div>

      {/* 3. Total Guests Card */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-slate-400 font-khmer">
              ចំនួនភ្ញៀវសរុប
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {guestCount}{" "}
              <span className="text-sm font-normal font-khmer text-gray-400">
                នាក់
              </span>
            </h3>
          </div>
        </div>
        <Users className="absolute -right-2 -bottom-2 text-gray-50 dark:text-slate-800/50 w-24 h-24 -rotate-12 transition-transform group-hover:scale-110" />
      </div>
    </div>
  );
};

export default ContributionStats;
