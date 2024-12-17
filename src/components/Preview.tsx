import React from 'react';
import { useEditorStore } from '../store/editorStore';
import { Eye } from 'lucide-react';

export const Preview: React.FC = () => {
  const { html, customCss } = useEditorStore();

  return (
    <div className="h-full relative">
      <div className="absolute top-2 left-2 text-gray-500 dark:text-gray-400">
        <Eye size={20} />
      </div>
      <style>{customCss}</style>
      <div
        className="w-full h-full p-4 pl-10 bg-white dark:bg-gray-800 overflow-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};