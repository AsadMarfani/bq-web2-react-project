const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "project1.jpg",
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "project2.jpg",
  },
];

const Projects = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-bold mt-2">{project.title}</h3>
            <p className="text-gray-600 mt-1">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
