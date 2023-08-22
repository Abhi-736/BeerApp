import React from "react";


const Main = (props) => {
const {BeerArray}= props;

 console.log(BeerArray)
  return <div className="container d-flex flex-row  flex-wrap">{BeerArray.map((value)=>
    
    <div className="card align-items-center justify-content-evenly ">
  <img src={value.image_url} class="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 class="card-title">{value.name}</h5>
  <h6 className="card-text">{value.tagline}</h6>
  
  <p className="card-text">{value.description}</p></div>
  
</div>
  
  )
  }</div>;
};

export default Main;
