import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import ContributionForm from "./Form";
import type { IGuest } from "./ContributionList";
interface IProp {
  openModal: boolean;
  onClose: () => void;
  formAction: boolean;
  guestSelected: IGuest;
}

export default function ModalDialog({
  openModal,
  onClose,
  formAction,
  guestSelected,
}: IProp) {
  return (
    <div>
      <Dialog
        open={openModal}
        onClose={onClose}
        className="relative z-10 bg-red-400">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-2xl  dark:bg-slate-900 text-left
               shadow-2xl transition-all sm:my-8 sm:w-full sm:mx-3 sm:max-w-2xl bg-white">
              <div className="px-6 py-6">
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white font-khmer">
                    {guestSelected && formAction
                      ? "កែប្រែទិន្នន័យ"
                      : "បន្ថែមទិន្នន័យថ្មី"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {guestSelected
                      ? "សូមបំពេញព័ត៌មានភ្ញៀវខាងក្រោម"
                      : "សូមកែព័ត៌មានភ្ញៀវខាងក្រោម"}
                  </p>
                </div>

                {/* Pass setOpen as the onClose prop */}
                <ContributionForm
                  onClose={onClose}
                  isEdit={formAction}
                  guestSelected={guestSelected}
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
