import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import type { IGuest } from "./ContributionList";
import { useAppDispatch } from "../store/store";
import { deleteGuest } from "./contributionSlice";

interface IProp {
  openModal: boolean;
  onClose: () => void;
  guestSelected: IGuest;
}

export default function DeleteModal({
  openModal,
  onClose,
  guestSelected,
}: IProp) {
  const dispatch = useAppDispatch();
  const [confirmName, setConfirmName] = useState("");

  const isMatch = confirmName === guestSelected?.name;

  return (
    <Dialog open={openModal} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-2xl bg-white dark:bg-slate-900 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-md">
            <div className="px-6 py-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>

              <div className="text-center">
                <DialogTitle
                  as="h3"
                  className="text-lg font-bold text-gray-900 dark:text-white font-khmer">
                  លុបទិន្នន័យ
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    តើអ្នកប្រាកដជាចង់លុបទិន្នន័យរបស់{" "}
                    <strong>{guestSelected?.name}</strong> មែនទេ?
                    សកម្មភាពនេះមិនអាចត្រឡប់ក្រោយវិញបានឡើយ។
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  សូមវាយឈ្មោះ{" "}
                  <span className="font-bold text-red-500 underline">
                    {guestSelected?.name}
                  </span>{" "}
                  ដើម្បីបញ្ជាក់
                </label>
                <input
                  type="text"
                  value={confirmName}
                  onChange={(e) => {
                    setConfirmName(e.target.value);
                    console.log(confirmName);
                  }}
                  placeholder="វាយឈ្មោះទីនេះ..."
                  className="block w-full rounded-md border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm p-2.5 border"
                />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row-reverse gap-3">
                <button
                  type="button"
                  disabled={!isMatch}
                  onClick={() => {
                    if (isMatch) {
                      dispatch(deleteGuest(guestSelected.id));
                      onClose();
                      return;
                    }
                  }}
                  className={`inline-flex w-full justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-sm sm:w-auto 
                    ${
                      isMatch
                        ? "bg-red-600 hover:bg-red-500"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}>
                  លុបចេញ
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex w-full justify-center rounded-xl bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-700 hover:bg-gray-50 sm:w-auto">
                  បោះបង់
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
