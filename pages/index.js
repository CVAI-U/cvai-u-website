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
          CVAI-U is a student-led research unit under ReDA Lab, focused on promoting artificial intelligence
          and computer vision applications through research, collaboration, and open-source innovation.
        </p>
      </section>

      {/* Team */}
      <section id="team" className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'President', role: 'Team Lead' },
            { name: 'Vice-President', role: 'Support Lead' },
            { name: 'Technical Lead', role: 'AI Developer' },
            { name: 'Mentor', role: 'Project Mentor' },
            { name: 'Lab Manager', role: 'Infrastructure' },
            { name: 'Advisor', role: 'Research Direction' },
          ].map((member, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-2" />
              <h4 className="font-bold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-center">Our Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold">Bus Passenger Counter</h4>
            <p className="text-sm text-gray-600 mt-2">
              AI-powered system for counting passengers using front and back cameras in real-time.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold">Vision-Based Attendance</h4>
            <p className="text-sm text-gray-600 mt-2">
              Facial recognition-based student attendance management platform.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Contact Us</h3>
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <input type="text" placeholder="Name" className="w-full border rounded p-2" />
          <input type="email" placeholder="Email" className="w-full border rounded p-2" />
          <textarea placeholder="Message" className="w-full border rounded p-2 h-32"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-20">
        &copy; {new Date().getFullYear()} CVAI-U • ReDA Lab • AMS Department • ITC
      </footer>
    </div>
  )
}