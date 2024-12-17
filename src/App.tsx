import React from 'react';
import { EditorPane } from './components/editor/EditorPane';
import { PreviewPane } from './components/preview/PreviewPane';
import { Toolbar } from './components/toolbar/Toolbar';
import { StatusBar } from './components/StatusBar';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from './store/themeStore';

function App() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <header className="flex justify-between items-center px-4 py-2 
                         bg-white dark:bg-gray-800 border-b dark:border-gray-700">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Markdown Converter
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDark ? <Sun className="text-gray-200" /> : <Moon className="text-gray-800" />}
          </button>
        </header>

        <Toolbar />

        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <div className="h-full border dark:border-gray-700 rounded-lg overflow-hidden">
            <EditorPane />
          </div>
          <div className="h-full border dark:border-gray-700 rounded-lg overflow-hidden">
            <PreviewPane />
          </div>
        </main>

        <StatusBar />
      </div>
    </div>
  );
}

export default App;