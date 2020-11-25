import WebNav from '@/components/shared/WebNav';
import Banner from '@/components/shared/Banner';
import { ToastContainer } from "react-toastify";
import Link from 'next/link';

const BaseLayout = ({children, page = ''}) => {

  const isHomePage = () => page === 'Home'
  const today = new Date();
  return (
    <div className="portfolio-app">
      <WebNav />
      { isHomePage() && <Banner /> }
      <div className="container mb-5">
        {children}
      </div>
      {/* FOOTER STARTS */}

      { 
      
        isHomePage() &&
        <footer className="sticky-footer">
        
<Link href="https://www.youtube.com/channel/UCRfNZk60icSpIsgG8Pwtqlg?view_as=subscriber">


 <a><img src="https://www.flaticon.com/svg/static/icons/svg/174/174883.svg" alt="icon"/></a> 
  </Link>
  
  <Link href="https://github.com/javaIsland">
  <a><img src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg" alt="icon"/></a>
  </Link>
          <div className="container text-center">
            <small>Copyright &copy; <span>
   {today.getFullYear()} Developed by  Daniel Hagos!
</span></small>
          </div>
          


        </footer>
      }
      {/* FOOTER ENDS */}
      <ToastContainer />
    </div>
  )
}

export default BaseLayout;