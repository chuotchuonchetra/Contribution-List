import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IGuest } from "./ContributionList";

// In TypeScript, "interface" should be lowercase
interface ContributionState {
  items: IGuest[];
}

const initialState: ContributionState = {
  items: [
    {
      id: "1",
      name: "សុខា មាស",
      amount: 50,
      type: "payback",
      note: "សងកាលការកូនស្រី",
      date: "2023-10-24",
      currencyType: "USD",
    },
    {
      id: "2",
      name: "វណ្ណាក់ ឡុង",
      amount: 20,
      type: "debt",
      note: "ជំពាក់ដៃ",
      date: "2023-10-25",
      currencyType: "USD",
    },
    {
      id: "3",
      name: "ចាន់ ណារី",
      amount: 100000,
      type: "new",
      note: "ចងដៃថ្មី",
      date: "2023-10-25",
      currencyType: "KHR",
    },
  ],
};

const contributionSlice = createSlice({
  name: "contributions",
  initialState,
  reducers: {
    // Action to add a new guest
    addGuest: (state, action: PayloadAction<IGuest>) => {
      state.items.push(action.payload);
      console.log(action.payload);
    },
    // Action to delete a guest by ID
    deleteGuest: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Action to set the whole list (useful when fetching from json-server)
    setGuests: (state, action: PayloadAction<IGuest[]>) => {
      state.items = action.payload;
    },
    editGuest: (state, action: PayloadAction<IGuest>) => {
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
        console.log(action.payload);
      }
    },
  },
});

export const { addGuest, deleteGuest, setGuests, editGuest } =
  contributionSlice.actions;
export default contributionSlice.reducer;
