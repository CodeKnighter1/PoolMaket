import { create } from 'zustand'

type CreateCardStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useCreateCard = create<CreateCardStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));