import React, { useState } from "react";
import { UserPlus, CircleDollarSign, NotebookPen, Save, X } from "lucide-react";
import type { IGuest } from "./ContributionList";
import { useDispatch } from "react-redux";
import { addGuest, editGuest } from "./contributionSlice";

interface Props {
  onClose: () => void;
  guestSelected: IGuest | null; // null means "add new"
  isEdit: boolean;
}

const emptyGuest: IGuest = {
  id: "",
  name: "",
  amount: 0,
  type: "new",
  note: "",
  date: "",
  currencyType: "",
};

const ContributionForm: React.FC<Props> = ({
  onClose,
  guestSelected,
  isEdit,
}) => {
  const dispatch = useDispatch();
  const initialGuest = isEdit && guestSelected ? guestSelected : emptyGuest;

  const [formData, setFormData] = useState<IGuest>(initialGuest);
  const [currency, setCurrency] = useState<"USD" | "KHR">(
    (initialGuest.currencyType as "USD" | "KHR") || "KHR"
  );

  const toggleCurrency = () => {
    const nextCurrency = currency === "KHR" ? "USD" : "KHR";
    setCurrency(nextCurrency);
    setFormData((prev) => ({ ...prev, currencyType: nextCurrency }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const parsedValue = name === "amount" ? Number(value) || 0 : value;

    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  const handleSave = () => {
    if (isEdit && guestSelected) {
      dispatch(editGuest({ ...formData, id: guestSelected.id }));
    } else {
      // Add new guest
      const newGuest: IGuest = {
        ...formData,
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        // currencyType: currency,
      };
      dispatch(addGuest(newGuest));
    }
    onClose();
  };

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Guest Name */}
        <div className="col-span-2 md:col-span-1 space-y-1.5">
          <label className="text-[13px] font-medium flex items-center gap-2">
            <UserPlus size={14} /> ឈ្មោះភ្ញៀវ
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="បញ្ចូលឈ្មោះ"
          />
        </div>

        {/* Amount */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-medium flex items-center gap-2">
            <CircleDollarSign size={14} /> ទឹកប្រាក់
          </label>
          <div className="relative">
            <input
              type="number"
              name="amount"
              value={formData.amount || ""}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="button"
              onClick={toggleCurrency}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-500 text-white px-3 py-1 rounded-xl text-sm cursor-pointer hover:bg-amber-600">
              {currency}
            </button>
          </div>
        </div>

        {/* Type */}
        <div className="space-y-1.5">
          <label className="text-[13px] font-medium">ប្រភេទ</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option value="new">ចងដៃថ្មី</option>
            <option value="payback">សងដៃ</option>
            <option value="debt">ជំពាក់</option>
          </select>
        </div>

        {/* Note */}
        <div className="col-span-2 space-y-1.5">
          <label className="text-[13px] font-medium flex items-center gap-2">
            <NotebookPen size={14} /> ចំណាំ
          </label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="ចំណាំបន្ថែម (ស្រេចចិត្ត)"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 px-5 py-2.5 border rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition">
          <X size={18} /> បោះបង់
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition">
          <Save size={18} /> {isEdit ? "កែប្រែ" : "រក្សាទុក"}
        </button>
      </div>
    </form>
  );
};

export default ContributionForm;
