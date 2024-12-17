const STORAGE_KEYS = {
  MARKDOWN: 'markdown-content',
  CUSTOM_CSS: 'custom-css',
  THEME: 'theme-preference',
  TEMPLATES: 'custom-templates',
} as const;

export const storage = {
  saveMarkdown: (content: string) => {
    localStorage.setItem(STORAGE_KEYS.MARKDOWN, content);
  },

  loadMarkdown: (): string => {
    return localStorage.getItem(STORAGE_KEYS.MARKDOWN) || '';
  },

  saveCustomCss: (css: string) => {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_CSS, css);
  },

  loadCustomCss: (): string => {
    return localStorage.getItem(STORAGE_KEYS.CUSTOM_CSS) || '';
  },

  saveThemePreference: (isDark: boolean) => {
    localStorage.setItem(STORAGE_KEYS.THEME, String(isDark));
  },

  loadThemePreference: (): boolean => {
    return localStorage.getItem(STORAGE_KEYS.THEME) === 'true';
  },
};