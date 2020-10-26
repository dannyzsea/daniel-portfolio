const Banner=()=>{
    return(<div>
<section className="fj-hero">
        <div className="fj-hero-wrapper row">
          <div className="hero-left col-md-6">
            <h1 className="white hero-title">
              Hey I'm Daniel. Experienced full stack developer
            </h1>
            <h2 className="white hero-subtitle">
              Check my portfolio and Youtube videos
            </h2>
            <div className="button-container">
              <a href="" className="btn btn-main bg-blue ttu">
                See my work
              </a>
            </div>
          </div>
          <div className="hero-right col-md-6">
            <div className="hero-image-container">
              <a className="grow hero-link">
                <img
                  className="hero-image"
                  src="https://www.syspoly.co.in/wp-content/uploads/2015/06/mobile-app-development.png"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>)
}
export default Banner;