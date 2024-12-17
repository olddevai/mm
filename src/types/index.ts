export interface Theme {
  isDark: boolean;
}

export interface EditorState {
  markdown: string;
  html: string;
  plainText: string;
  wordCount: number;
  charCount: number;
  customCss: string;
}

export interface EditorStore extends EditorState {
  setMarkdown: (markdown: string) => void;
  setCustomCss: (css: string) => void;
  toggleTheme: () => void;
  isDark: boolean;
}