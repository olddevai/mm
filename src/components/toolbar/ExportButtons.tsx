import React from 'react';
import { Download, Copy } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { downloadFile } from '../../utils/file';

export const ExportButtons: React.FC = () => {
  const { markdown, html, plainText } = useEditorStore();

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => downloadFile(markdown, 'md')}
        className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
        title="Download Markdown"
      >
        <Download size={18} />
      </button>
      <button
        onClick={() => copyToClipboard(markdown)}
        className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
        title="Copy Markdown"
      >
        <Copy size={18} />
      </button>
    </div>
  );
};