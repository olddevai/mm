export const downloadFile = (content: string, type: 'md' | 'html' | 'txt') => {
  const types = {
    md: 'text/markdown',
    html: 'text/html',
    txt: 'text/plain',
  };

  const blob = new Blob([content], { type: types[type] });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `document.${type}`;
  a.click();
  URL.revokeObjectURL(url);
};

export const readFile = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = reject;
    reader.readAsText(file);
  });
};