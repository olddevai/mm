import React from 'react';
import { Search, Replace } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';

export const SearchReplace: React.FC = () => {
  const { 
    isSearchOpen, 
    searchQuery, 
    replaceQuery,
    setSearchQuery,
    setReplaceQuery,
    markdown,
    setMarkdown
  } = useEditorStore();

  const handleReplace = () => {
    if (!searchQuery) return;
    const newContent = markdown.replaceAll(searchQuery, replaceQuery);
    setMarkdown(newContent);
  };

  if (!isSearchOpen) return null;

  return (
    <div className="absolute top-0 right-0 p-2 bg-white dark:bg-gray-800 
                    shadow-lg rounded-bl-lg border dark:border-gray-700">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Search size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="px-2 py-1 text-sm border rounded dark:bg-gray-700 
                     dark:border-gray-600"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Replace size={16} />
          <input
            type="text"
            value={replaceQuery}
            onChange={(e) => setReplaceQuery(e.target.value)}
            placeholder="Replace..."
            className="px-2 py-1 text-sm border rounded dark:bg-gray-700 
                     dark:border-gray-600"
          />
          <button
            onClick={handleReplace}
            className="px-2 py-1 text-sm bg-blue-500 text-white rounded 
                     hover:bg-blue-600"
          >
            Replace All
          </button>
        </div>
      </div>
    </div>
  );
};