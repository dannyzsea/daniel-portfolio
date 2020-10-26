import Link from "next/link";


const WebLink=({children,className,href})=>{
  return(
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
  )
}

const WebNav =()=>{
    return(
<div className="navbar-wrapper">
<nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
          <WebLink className="navbar-brand mr-3 font-weight-bold" href="/">
            DanielHagos
          </WebLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item mr-3">
              <WebLink href="/portfolios" className="nav-link">
                  Portfolio
                </WebLink>
              </li>
              
              <li className="nav-item mr-3">
                <WebLink className="nav-link" href="forum/catagories">
                  Forum
                </WebLink>
              </li>


              <li className="nav-item mr-3">
                <WebLink className="nav-link" href="/cv">
                  Cv
                </WebLink>
              </li>
            </ul>


            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <WebLink className="nav-link" href="/register">
                  Sign Up
                </WebLink>
              </li>

              <li className="nav-item mr-3">
                <WebLink
                  className="nav-link btn btn-success bg-green-2 bright"
                  href="/Login"
                >
                  Sign In
                </WebLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )
}
export default WebNav;