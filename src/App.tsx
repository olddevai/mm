import React from 'react';
import { EditorPane } from './components/editor/EditorPane';
import { PreviewPane } from './components/preview/PreviewPane';
import { Toolbar } from './components/toolbar/Toolbar';
import { StatusBar } from './components/StatusBar';
import { Moon, Sun, CheckCircle, FileText, Star } from 'lucide-react';
import { useThemeStore } from './store/themeStore';
import {Helmet} from "react-helmet";

function App() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <>
      {/* SEO META Tags */}
      <Helmet>
        <title>Markdown Converter</title>
        <meta
          name="description"
          content="A Markdown converter tool with real-time preview and beautiful UI."
        />
        <meta name="keywords" content="Markdown, Converter, Editor, Preview" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Main App */}
      <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
        <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
          {/* Header */}
          <header
            className="flex justify-between items-center px-6 py-4 
                         bg-white dark:bg-gray-800 shadow-md dark:shadow-lg"
          >
            <h1 className="text-2xl font-extrabold text-gray-800 dark:text-white">
              Markdown Converter
            </h1>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-105 transition-transform"
            >
              {isDark ? (
                <Sun className="text-yellow-300" />
              ) : (
                <Moon className="text-gray-800" />
              )}
            </button>
          </header>

          {/* Toolbar */}
          <Toolbar />

          {/* Main Editor and Preview */}
          <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="h-full border dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
              <EditorPane />
            </div>
            <div className="h-full border dark:border-gray-700 rounded-lg shadow-md overflow-hidden">
              <PreviewPane />
            </div>
          </main>

          {/* Features Section */}
          <section className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureItem
                icon={<FileText size={48} />}
                title="Real-Time Editing"
                description="Edit markdown text and preview changes in real time."
              />
              <FeatureItem
                icon={<CheckCircle size={48} />}
                title="Clean Design"
                description="Beautiful, responsive, and clean user interface."
              />
              <FeatureItem
                icon={<Star size={48} />}
                title="Fully Responsive"
                description="Optimized for all screen sizes, from mobile to desktop."
              />
            </div>
          </section>

          {/* About Section */}
          <section className="p-6 bg-gray-100 dark:bg-gray-700">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
              About
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-4xl mx-auto">
              Markdown Converter is a powerful, responsive web application that allows you
              to write and preview markdown effortlessly. Whether you're a writer, a
              developer, or someone looking for a simple markdown tool, this app provides
              everything you need.
            </p>
          </section>

          {/* Status Bar */}
          <StatusBar />
        </div>
      </div>
    </>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div
      className="flex flex-col items-center p-6 border dark:border-gray-600 rounded-lg 
                 shadow hover:shadow-lg dark:shadow-gray-700 transition-shadow"
    >
      <div className="mb-4 text-indigo-500 dark:text-indigo-400">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
}

export default App;
