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
    <div className="flex items-center space-x-2 sm:space-x-4">
      {/* Download Button */}
      <button
        onClick={() => downloadFile(markdown, 'md')}
        className="p-2 sm:p-3 flex items-center space-x-1 rounded-md border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-200"
        title="Download Markdown"
        aria-label="Download Markdown"
      >
        <Download size={18} className="sm:mr-1" />
        <span className="hidden sm:inline text-sm">Download</span>
      </button>

      {/* Copy Button */}
      <button
        onClick={() => copyToClipboard(markdown)}
        className="p-2 sm:p-3 flex items-center space-x-1 rounded-md border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-200"
        title="Copy Markdown"
        aria-label="Copy Markdown"
      >
        <Copy size={18} className="sm:mr-1" />
        <span className="hidden sm:inline text-sm">Copy</span>
      </button>
    </div>
  );
};
