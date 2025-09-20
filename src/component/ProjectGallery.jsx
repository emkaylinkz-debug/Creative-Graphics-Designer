// app/component/ProjectGallery.jsx
export default function ProjectGallery() {
  const projects = [
    { img: "/design1.jpg", title: "Logo Design", desc: "Modern logo for a tech brand." },
    { img: "/design2.jpg", title: "Social Media", desc: "Instagram post design." },
    { img: "/design3.jpg", title: "Poster", desc: "Event poster with bold style." },
    { img: "/design4.jpg", title: "Logo Design", desc: "Modern logo for a tech brand." },
    { img: "/design5.jpg", title: "Social Media", desc: "Instagram post design." },
    { img: "/design6.jpg", title: "Poster", desc: "Event poster with bold style." },
    { img: "/design7.jpg", title: "Logo Design", desc: "Modern logo for a tech brand." },
    { img: "/design8.jpg", title: "Social Media", desc: "Instagram post design." },
    { img: "/design9.jpg", title: "Poster", desc: "Event poster with bold style." },
    { img: "/design10.jpg", title: "Logo Design", desc: "Modern logo for a tech brand." },
    { img: "/design11.jpg", title: "Social Media", desc: "Instagram post design." },
    { img: "/design12.jpg", title: "Poster", desc: "Event poster with bold style." }
  ];

  return (
    <div className="row">
      {projects.map((project, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={project.img} className="card-img-top" alt={project.title} />
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.desc}</p>


              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}