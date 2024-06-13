import {create} from 'zustand';

interface DateState {
  paletteColor: string | null;
  setPaletteColor: (paletteColor: string) => void;
}

const useCalendarColorStore = create<DateState>(set => ({
  paletteColor: null,
  setPaletteColor: (paletteColor: string) => {
    set({paletteColor});
  },
}));

export default useCalendarColorStore;
