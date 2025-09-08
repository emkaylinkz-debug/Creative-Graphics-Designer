export default function AboutUs() {
  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">
        <h3>01.</h3>
        <h4>About Me</h4>
      </div>
      <div className="row justify-content-center align-items-center text-light">
        <div className="col-lg-8 mt-4">
          <p>
            I am a passionate Creative Graphics Designer with a keen eye for details and drive to transform ideas into visually compelling designs. 
            With experience in branding, digital art and visual communication, i specialize in crafting designs that not only look stunning but also tell a meaningful story. 
           
          </p>
          <p>
            As a designer, am committed to continuous growth-explore new trends, tools and techniques to deliver modern, impactful and timeless designs. My goal is to help individuals and brands stand out with designs that connect deeply with their audience.  
        
          </p>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Canva</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> CorelDraw</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Photoshop</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Greetings Island </h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Glitch Video Effect</h5>
          </div>
          <div className="d-flex flex-row gap-4">
            <i className="bi bi-window"></i>
            <h5> Youcut Video Editor</h5>
          </div>
        </div>
        <div className="col-lg-4">
          <img src="/about.jpg" className="img-fluid rounded"/>
        </div>
      </div>
    </>
  );
}
