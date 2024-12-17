import React, { useEffect } from 'react';
import { useEditorStore } from '../store/editorStore';
import { FileEdit } from 'lucide-react';

export const Editor: React.FC = () => {
  const { markdown, setMarkdown } = useEditorStore();

  useEffect(() => {
    const saved = localStorage.getItem('markdown-content');
    if (saved) setMarkdown(saved);
  }, [setMarkdown]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMarkdown(value);
    localStorage.setItem('markdown-content', value);
  };

  return (
    <div className="h-full relative">
      <div className="absolute top-2 left-2 text-gray-500 dark:text-gray-400">
        <FileEdit size={20} />
      </div>
      <textarea
        className="w-full h-full p-4 pl-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                   font-mono resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={markdown}
        onChange={handleChange}
        placeholder="Type your markdown here..."
      />
    </div>
  );
};