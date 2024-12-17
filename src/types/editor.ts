export interface EditorState {
  markdown: string;
  html: string;
  plainText: string;
  wordCount: number;
  charCount: number;
  customCss: string;
  isSearchOpen: boolean;
  searchQuery: string;
  replaceQuery: string;
}

export interface Template {
  id: string;
  name: string;
  content: string;
}