import axios from "axios";
import { useState, useEffect } from 'react';
import PortfolioCard from "../../components/shared/portfolios/PortfolioCard";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PORTFOLIOS, CREATE_PORTFOLIO, UPDATE_PORTFOLIO  } from '../../apollo/queries';
import withApollo from "../../hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';
import Link from 'next/link';



const graphDeletePortfolio = (id) => {
  const query = `
    mutation DeletePortfolio {
      deletePortfolio(id: "${id}")
    }
  `

  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.deletePortfolio)
}




const Portfolios = () => {
  const { data } = useQuery(GET_PORTFOLIOS);
  const [updatePortfolio] = useMutation(UPDATE_PORTFOLIO)


  const [createPortfolio] = useMutation(CREATE_PORTFOLIO, {
    update(cache, {data: {createPortfolio}}) {
      const {portfolios} = cache.readQuery({query: GET_PORTFOLIOS})
      cache.writeQuery({
        query: GET_PORTFOLIOS,
        data: { portfolios: [...portfolios, createPortfolio]}
      })
    }
  });
  
  const deletePortfolio= async (id)=>{
    await graphDeletePortfolio(id);
  }

const portfolios = data && data.portfolios||[];
      return(
        <>
  
  <section className="section-title">
            <div className="px-2">
              <div className="pt-5 pb-4">
                <h1>Portfolios</h1>
              </div>
            </div>
            <button onClick={createPortfolio}
            className="btn btn-primary">
              Create Portfolio
            </button>
          </section>
          
          <section className="pb-5">
            <div className="row">
            { 
               portfolios && portfolios.map(portfolio =>
            <div key ={portfolio._id} className ="col-md-4">


            <Link 
             href='/portfolios/[id]'
                as={`/portfolios/${portfolio._id}`}>
            <a className="card-link">
              <PortfolioCard portfolio={portfolio} />
              </a>
              </Link>
              <button
                className="btn btn-warning"
                onClick={() => updatePortfolio({variables: {id: portfolio._id}})}>
                Update Portfolio</button>

                
                <button
                className="btn btn-danger"
                onClick={() => deletePortfolio(portfolio._id)}>Delete Portfolio</button>
            </div>

             ) }
            
            </div>
          </section>
         
      </>
      )
    
     
  }
  export default withApollo(Portfolios, { getDataFromTree });