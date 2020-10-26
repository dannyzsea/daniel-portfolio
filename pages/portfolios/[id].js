import React,{Component} from "react";

// class PortfolioDetail extends Component{
//     static getInitialProps({query}){
//         return({query})
//     }
//     render(){
//         const id=this.props.query.id;
//         return(
//             <h1>Id:{id}</h1>
//         )
//     }
// }
const PortfolioDetail=({query})=>{
    const {id}=query;
    return(
        <h1>Id:{id}</h1>
    )
}
PortfolioDetail.getInitialProps=({query})=>{
    return({query})
}
export default PortfolioDetail;