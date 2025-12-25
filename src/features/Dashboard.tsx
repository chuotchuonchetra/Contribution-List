import ContributionList, { type IGuest } from "./ContributionList";
import ContributionStats from "./ContributionStats";
import { useAppSelector } from "../store/store";
export const Dashboard = () => {
  const contributions = useAppSelector((state) => state.contribution.items);
  console.log(contributions);
  const totals = contributions.reduce(
    (acc: { usd: number; khr: number }, item: IGuest) => {
      if (item.currencyType === "USD") {
        acc.usd += item.amount;
      } else if (item.currencyType === "KHR") {
        acc.khr += item.amount;
      }
      return acc;
    },
    { usd: 0, khr: 0 }
  );

  return (
    <main className="p-6 space-y-6  min-h-[calc(100vh-64px)] ">
      {/* 1. Summary Cards */}
      <ContributionStats
        guestCount={contributions.length}
        totalKHR={totals.khr}
        totalUSD={totals.usd}
      />

      {/* 3. The Main Table */}
      <div className="">
        <ContributionList />
      </div>
    </main>
  );
};
