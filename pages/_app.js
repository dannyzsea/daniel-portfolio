
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";
import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import WebNav from "../components/shared/WebNav";
import Banner from "../components/shared/Banner";
import "isomorphic-unfetch";

const client =new ApolloClient({
  uri:"http://localhost:3000/graphql"
})
function MyApp({ Component, pageProps }) {
 const  isHomePage=()=>Component.name==="Home";
  return (
    <ApolloProvider client={client}>
    <div className="portfolio-app">
    <WebNav/> 
    {isHomePage() && <Banner/>} 
    <div className="container">
  <Component {...pageProps} />
  </div>
   {
    isHomePage() &&
  <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
        <div className="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
      } 
</div>
</ApolloProvider>
    );
}
export default MyApp;
