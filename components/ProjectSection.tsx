"use client";
function ProjectSection() {
  return (
    <section className="w-full h-screen bg-almost_black flex flex-col items-center justify-center text-4xl text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Project Section</h1>

        <div className="flex space-x-4">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
          Action Button
        </button>

                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
          Action Button
        </button>

                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
          Action Button
        </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection