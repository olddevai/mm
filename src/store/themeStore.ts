import { create } from 'zustand';
import { ThemeState } from '../types/theme';
import { storage } from '../utils/storage';

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: storage.loadThemePreference(),
  toggleTheme: () => set((state) => {
    const newTheme = !state.isDark;
    storage.saveThemePreference(newTheme);
    return { isDark: newTheme };
  }),
}));