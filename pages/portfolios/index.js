import axios from "axios";
import { useState } from 'react';
import PortfolioCard from "../../components/shared/portfolios/PortfolioCard";
import Link from 'next/link';




const fetchPortfolios = () => {
  const query = `
    query Portfolios {
      portfolios {
        _id
        title
        company
        companyWebsite
        location
        jobTitle
        description
        endDate
        startDate
      }
    }`;
  return axios.post("http://localhost:3000/graphql", { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfolios)
}
 const Portfolios = ({portfolios}) => {


  const createPortfolio =  () => {

    alert("created Portfolio");
  }


      return(
        <>
  
  <section className="section-title">
            <div className="px-2">
              <div className="pt-5 pb-4">
                <h1>Portfolios</h1>
              </div>
            </div>
            <button className="btn btn-warning" onClick={()=>createPortfolio()}
            className="btn btn-primary">
              Create portfolio
            </button>
          </section>
          
          <section className="pb-5">
            <div className="row">
            { 
               portfolios && portfolios.map(portfolio =>
            <div key={portfolio._id} className="col-md-4">


            <Link 
             href='/portfolios/[id]'
                as={`/portfolios/${portfolio._id}`}>
            <a className="card-link">
              <PortfolioCard portfolio={portfolio} />
              </a>
              </Link>
            
            </div>

             ) }
            
            </div>
          </section>
         
      </>
      )
     
  }
  Portfolios.getInitialProps = async () => {
    const portfolios = await fetchPortfolios();
    return { data: { portfolios }};
  }
  export default Portfolios;