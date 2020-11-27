import Link from 'next/link';

const Banner=()=>{
    return(<div>
<section className="fj-hero">
        <div className="fj-hero-wrapper row">
          <div className="hero-left col-md-6">
            <h1 className="white hero-title">
              Daniel Hagos
            </h1>
            <div className="hero-image-container">
              <a className="grow hero-link">
              <div className="fj-hero-avatar"></div>
              </a>
            </div>
            <h2 className="white hero-subtitle">
             Fullstack Engineer!
            </h2>
           
          </div>
          
          <div className="hero-right col-md-6">
          <div className="external">
          <h4>Useful Links!</h4>
             
   <Link href="https://www.youtube.com/channel/UCRfNZk60icSpIsgG8Pwtqlg?view_as=subscriber">


<a><img src="https://www.flaticon.com/svg/static/icons/svg/174/174883.svg" alt="icon"/></a> 
 </Link>
 
 <Link href="https://github.com/javaIsland">
 <a><img src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg" alt="icon"/></a>
 </Link>

             

            </div>
          
          </div>
        </div>
      </section>
      
    </div>)
}
export default Banner;