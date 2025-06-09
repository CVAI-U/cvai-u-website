// pages/index.js
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">CVAI-U</h1>
        <nav>
          <a href="#about" className="mx-2 hover:underline">About</a>
          <a href="#team" className="mx-2 hover:underline">Team</a>
          <a href="#projects" className="mx-2 hover:underline">Projects</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to CVAI-U</h2>
        <p className="text-lg">Computer Vision and AI Unit - ReDA Lab, AMS Department, ITC</p>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">About Us</h3>
        <p>
          CVAI-U is a research unit under ReDA Lab, focused on building and promoting AI and Computer Vision
          technologies through real-world projects, student collaboration, and open-source development.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-20">
        &copy; {new Date().getFullYear()} CVAI-U • ReDA Lab • AMS Department • ITC
      </footer>
    </div>
  )
}