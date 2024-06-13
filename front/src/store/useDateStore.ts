import {MonthYear} from '@/utils';
import {create} from 'zustand';

interface DateState {
  monthYear: MonthYear | null;
  selectedDate: number | null;
  setMonthYear: (monthYear: MonthYear) => void;
  setSelectedDate: (selectedDate: number) => void;
}

const useDateStore = create<DateState>(set => ({
  monthYear: null,
  selectedDate: null,
  setMonthYear: (monthYear: MonthYear) => {
    set({monthYear});
  },
  setSelectedDate: (selectedDate: number) => {
    set({selectedDate});
  },
}));

export default useDateStore;
