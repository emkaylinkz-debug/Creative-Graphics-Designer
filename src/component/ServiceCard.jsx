export default function ServiceCard (){

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
  <img src="/service.jpg" className="img-contain" />
  <div className="card-body">
    <h5 className="card-title">3D Logos</h5>
    <p className="card-text">Bring your brand to life with stunning 3D logos that pop off the screen. 
        Whether you're launching a startup or refreshing your identity, our designs add depth, realism
        and a modern edge to your digital presence. 
        Perfect for websites, apps, and social media—because flat is out, and bold is in.


</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        <div className="row"></div>
        <div className="col-lg-4">
          <div className="card">
  <img src="/service2.jpg" className="card-img-top" alt="Brand Design" />
  <div className="card-body">
    <h5 className="card-title">Brand Design</h5>
    <p className="card-text">Craft a unique identity that resonates with your audience...
        Bring your brand to life with stunning 3D logos that pop off the screen. 
        Whether you're launching a startup or refreshing your identity, our designs add depth, realism
        and a modern edge to your digital presence. 
        Perfect for websites, apps, and social media—because flat is out, and bold is in.
             
             
              </p>
              <a href="#" className="btn btn-primary">Explore More</a>
            </div>
          </div>
        </div>
        {/* Third Card */}
        <div className="col-lg-4">
          <div className="card">
            <img src="/service3.jpg" className="card-img-top" alt="Web Design" />
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">Modern, responsive websites that convert visitors into customers...</p>
              <a href="#" className="btn btn-primary">Explore More</a>
            </div>
          </div>
        </div>
                </div>
            </div>
        </div>
    )
}