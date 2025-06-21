import { Pool } from "@/types/pool";
import { create } from "zustand";

type CardStoreType = {
  cards: Pool[];
  setCards: (cards: Pool[]) => void; // Fixed typo: settCards → setCards
};

export const cardStore = create<CardStoreType>((set) => ({
  cards: [],
  setCards: (cards) => set({ cards }), // Fixed: Added parentheses around set argument
}));