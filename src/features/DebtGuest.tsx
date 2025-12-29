import ContributionList from "./ContributionList";

export default function DebtGuest() {
  return (
    <div className="debt-component  p-4 min-h-[calc(100vh-64px)]">
      <ContributionList filterType={"debt"} />
    </div>
  );
}
