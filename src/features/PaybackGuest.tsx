import ContributionList from "./ContributionList";

export default function PaybackGuest() {
  return (
    <div className="debt-component  p-4 min-h-[calc(100vh-64px)]">
      <ContributionList filterType={"payback"} />
    </div>
  );
}
