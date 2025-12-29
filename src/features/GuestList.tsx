import { useState } from "react";
import ContributionList from "./ContributionList";
import ModalDialog from "./ModalDialog";

const GuestList = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div className="p-6 space-y-6 min-h-[calc(100vh-64px)]">
      <button
        onClick={() => {
          setOpen(true);
          setIsEdit(false);
          console.log("add");
        }}
        className="rounded-md bg-amber-500 px-4 py-3 text-sm font-semibold text-white">
        បញ្ចូលទិន្នន័យថ្មី
      </button>

      <ModalDialog
        openModal={open}
        onClose={() => setOpen(false)}
        formAction={isEdit}
        guestSelected={{
          id: "",
          name: "",
          amount: 0,
          type: "new",
          note: "",
          date: "",
          currencyType: "KHR",
        }}
      />

      <ContributionList filterType="all" />
    </div>
  );
};

export default GuestList;
