import { Edit2, Trash2, MoreVertical, ArrowUpDown } from "lucide-react";
import Pagination from "./PaginationTable";
import { useAppSelector } from "../store/store";
import ModalDialog from "./ModalDialog";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

export type ContributionType = "new" | "payback" | "debt";

export interface IGuest {
  id: string;
  name: string;
  amount: number;
  type: ContributionType | "all";
  note: string;
  date: string;
  currencyType: string;
}
interface IFilterType {
  filterType: ContributionType | "all";
}
const ContributionList = ({ filterType }: IFilterType) => {
  const contributions: IGuest[] = useAppSelector(
    (state) => state.contribution.items
  );
  const getStatusStyle = (type: string) => {
    switch (type) {
      case "payback":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "debt":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    }
  };

  const getStatusLabel = (type: string) => {
    switch (type) {
      case "payback":
        return "សងដៃ";
      case "debt":
        return "ជំពាក់";
      default:
        return "ចងដៃថ្មី";
    }
  };

  type ModalType = "edit" | "delete" | null;

  const [modal, setModal] = useState<{
    type: ModalType;
    guest: IGuest | null;
  }>({
    type: null,
    guest: null,
  });

  const [selectedGuest, setSelectedGuest] = useState<IGuest>({
    amount: 0,
    currencyType: "",
    date: "",
    id: "",
    name: "",
    note: "",
    type: "new",
  });

  return (
    <div className="relative p-6 space-y-6 h-[calc(75vh-64px)] bg-white shadow-sm ">
      <table className="w-full text-left border-collapse shadow-sm ">
        {/* Table Header */}
        <thead className="bg-gray-50 dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-800">
          <tr>
            <th className="p-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
              <div className="flex items-center gap-2 cursor-pointer hover:text-amber-600">
                ឈ្មោះភ្ញៀវ (Name) <ArrowUpDown size={14} />
              </div>
            </th>
            <th className="p-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
              ទឹកប្រាក់ (Amount)
            </th>
            <th className="p-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
              ប្រភេទ (Type)
            </th>
            <th className="p-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">
              ចំណាំ (Note)
            </th>
            <th className="p-4 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider text-right">
              សកម្មភាព (Actions)
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
          {contributions
            .filter((item) => {
              if (filterType === "all") return true;
              return item.type === filterType;
            })
            .map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/80 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="p-4">
                  <div className="font-medium text-gray-900 dark:text-slate-200 font-khmer">
                    {item.name}
                  </div>
                </td>
                <td className="p-4 text-gray-700 dark:text-slate-300 font-semibold">
                  {item.amount.toLocaleString()}{" "}
                  {item.currencyType == "USD" ? "ដុល្លា" : "រៀល"}
                </td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium font-khmer ${getStatusStyle(
                      item.type
                    )}`}>
                    {getStatusLabel(item.type)}
                  </span>
                </td>
                <td className="p-4 text-gray-500 dark:text-slate-400 text-sm hidden md:table-cell max-w-xs truncate">
                  {item.note}
                </td>

                {/* ACTION COLUMN - This is where the fix is */}
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    {/* We use 'opacity-0 group-hover:opacity-100' 
             This keeps the buttons there (taking up space) 
             so the table width doesn't change on hover.
          */}
                    <div>
                      <button
                        className="p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                        onClick={() => {
                          setSelectedGuest(item);
                          setModal({
                            guest: item,
                            type: "edit",
                          });
                        }}>
                        <Edit2 size={16} />
                      </button>
                    </div>
                    <button
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                      onClick={() => {
                        setSelectedGuest(item);
                        setModal({
                          guest: item,
                          type: "delete",
                        });
                      }}>
                      <Trash2 size={16} />
                    </button>

                    {/* This icon shows when NOT hovering, to indicate actions are available */}
                    <div className="p-1.5 text-gray-300 group-hover:hidden">
                      <MoreVertical size={16} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination />
      {modal.type === "edit" && modal.guest && (
        <ModalDialog
          openModal={true}
          onClose={() => setModal({ type: null, guest: null })}
          guestSelected={modal.guest}
          formAction={true}
        />
      )}
      {modal.type === "delete" && modal.guest && (
        <DeleteModal
          guestSelected={selectedGuest}
          onClose={() => setModal({ type: null, guest: null })}
          openModal={true}
        />
      )}
    </div>
  );
};

export default ContributionList;
