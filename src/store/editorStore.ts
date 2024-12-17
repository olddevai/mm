import { create } from 'zustand';
import { EditorState } from '../types/editor';
import { convertToHtml, convertToPlainText, getWordCount, getCharCount } from '../utils/markdown';
import { storage } from '../utils/storage';

export const useEditorStore = create<EditorState>((set) => ({
  markdown: storage.loadMarkdown(),
  html: '',
  plainText: '',
  wordCount: 0,
  charCount: 0,
  customCss: storage.loadCustomCss(),
  isSearchOpen: false,
  searchQuery: '',
  replaceQuery: '',

  setMarkdown: (markdown: string) => {
    const html = convertToHtml(markdown);
    const plainText = convertToPlainText(markdown);
    storage.saveMarkdown(markdown);

    set({
      markdown,
      html,
      plainText,
      wordCount: getWordCount(plainText),
      charCount: getCharCount(plainText),
    });
  },

  setCustomCss: (css: string) => {
    storage.saveCustomCss(css);
    set({ customCss: css });
  },

  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setReplaceQuery: (query: string) => set({ replaceQuery: query }),
}));