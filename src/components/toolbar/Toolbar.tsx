import React, { useState } from 'react';
import { Bold, Italic, Link, List, ListOrdered, Image, Code, Search, Menu } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { ExportButtons } from './ExportButtons';

export const Toolbar: React.FC = () => {
  const { markdown, setMarkdown, toggleSearch } = useEditorStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* Responsive Toolbar */}
      <div className="flex items-center space-x-2">
        {/* Hamburger Menu for Small Screens */}
        <button
          className="p-2 rounded md:hidden hover:bg-gray-200 dark:hover:bg-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Toolbar"
        >
          <Menu size={18} />
        </button>

        {/* Toolbar Icons - Hidden on Small Screens */}
        <div className="hidden md:flex items-center space-x-2">
          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={tool.action}
              className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600 
                     text-gray-700 dark:text-gray-300"
              title={tool.tooltip}
              aria-label={tool.tooltip}
            >
              <tool.icon size={18} />
            </button>
          ))}
        </div>
      </div>

      {/* Export Buttons */}
      <div className="hidden md:block">
        <ExportButtons />
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-700 shadow-md md:hidden">
          {tools.map((tool, index) => (
            <button
              key={index}
              onClick={() => {
                tool.action();
                setIsMenuOpen(false); // Close the menu after action
              }}
              className="flex items-center space-x-2 p-2 w-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              aria-label={tool.tooltip}
            >
              <tool.icon size={18} />
              <span>{tool.tooltip}</span>
            </button>
          ))}
          {/* Export Buttons in Dropdown */}
          <div className="border-t border-gray-300 dark:border-gray-600 p-2">
            <ExportButtons />
          </div>
        </div>
      )}
    </div>
  );
};
