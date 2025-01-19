export default function About() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <p className="text-lg mb-6">
        This is a Linux Quiz App built with React, Vite, and Tailwind CSS. It helps you learn and practice Linux commands in a fun and interactive way.
      </p>
      <p className="text-lg mb-6">
        The app is purely static HTML, with no client-side interactivity needed. Try viewing the page's source, or opening the devtools network panel and reloading.
      </p>
      <p className="text-lg mb-6">
        Visit <a href="https://vitejs.dev" className="text-blue-500 hover:underline">Vite</a> to learn more about building fast React apps.
      </p>
    </div>
  );
}
