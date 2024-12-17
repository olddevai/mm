import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js';

// Configure marked with highlighting
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
  gfm: true,
});

export const convertToHtml = (markdown: string): string => {
  try {
    return DOMPurify.sanitize(marked(markdown));
  } catch (error) {
    console.error('Markdown conversion error:', error);
    return 'Error converting markdown to HTML';
  }
};

export const convertToPlainText = (markdown: string): string => {
  return markdown.replace(/[#*`_]/g, '').trim();
};

export const getWordCount = (text: string): number => {
  return text.trim().split(/\s+/).filter(Boolean).length;
};

export const getCharCount = (text: string): number => {
  return text.length;
};