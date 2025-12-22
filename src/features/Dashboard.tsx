import ContributionList from "./ContributionList";

export const Dashboard = () => {
  return (
    <main className="p-6 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
      {/* 1. Summary Cards */}
      {/* <ContributionStats /> */}

      <div className="grid grid-cols-1 gap-6">
        {/* 2. Fast Entry Form */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800">
          <h2 className="text-sm font-bold mb-4 dark:text-white">
            បញ្ចូលទិន្នន័យថ្មី (New Entry)
          </h2>
          {/* <ContributionForm /> */}
        </div>

        {/* 3. The Main Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800">
          <ContributionList />
        </div>
      </div>
    </main>
  );
};
