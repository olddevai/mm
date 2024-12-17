import React from 'react';
import { useEditorStore } from '../store/editorStore';
import { AlignJustify, Type } from 'lucide-react';

export const StatusBar: React.FC = () => {
  const { wordCount, charCount } = useEditorStore();

  return (
    <div className="flex items-center justify-end space-x-4 px-4 py-2 
                    bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300">
      <div className="flex items-center">
        <Type size={14} className="mr-1" />
        <span>{charCount} characters</span>
      </div>
      <div className="flex items-center">
        <AlignJustify size={14} className="mr-1" />
        <span>{wordCount} words</span>
      </div>
    </div>
  );
};