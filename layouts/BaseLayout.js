import WebNav from '@/components/shared/WebNav';
import Banner from '@/components/shared/Banner';
import { ToastContainer } from "react-toastify";


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