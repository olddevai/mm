import React from 'react';
import { Bold, Italic, Link, List, ListOrdered, Image, Code, Search } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { ExportButtons } from './ExportButtons';

export const Toolbar: React.FC = () => {
  const { markdown, setMarkdown, toggleSearch } = useEditorStore();

  const insertMarkdown = (prefix: string, suffix: string = '') => {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const newText = markdown.substring(0, start) + 
                   prefix + selectedText + suffix +
                   markdown.substring(end);
    
    setMarkdown(newText);
  };

  const tools = [
    { icon: Bold, action: () => insertMarkdown('**', '**'), tooltip: 'Bold' },
    { icon: Italic, action: () => insertMarkdown('*', '*'), tooltip: 'Italic' },
    { icon: Link, action: () => insertMarkdown('[', '](url)'), tooltip: 'Link' },
    { icon: List, action: () => insertMarkdown('- '), tooltip: 'Bullet List' },
    { icon: ListOrdered, action: () => insertMarkdown('1. '), tooltip: 'Numbered List' },
    { icon: Image, action: () => insertMarkdown('![alt](', ')'), tooltip: 'Image' },
    { icon: Code, action: () => insertMarkdown('```\n', '\n```'), tooltip: 'Code Block' },
    { icon: Search, action: toggleSearch, tooltip: 'Search and Replace' },
  ];

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 
                    dark:bg-gray-700 border-b dark:border-gray-600">
      <div className="flex items-center space-x-2">
        {tools.map((tool, index) => (
          <button
            key={index}
            onClick={tool.action}
            className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 
                     text-gray-700 dark:text-gray-300"
            title={tool.tooltip}
          >
            <tool.icon size={18} />
          </button>
        ))}
      </div>
      <ExportButtons />
    </div>
  );
};