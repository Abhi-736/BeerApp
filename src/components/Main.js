import React from "react";


const Main = (props) => {
const {BeerArray}= props;

 console.log(BeerArray)
  return <div className="container d-flex justify-content-center flex-wrap ">{BeerArray.length? BeerArray.map((value)=>
    
    <div className="card align-items-center  justify-content-start text-center p-2 ">
  <img src={value.image_url} class="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 class="card-title">{value.name}</h5>
  <h6 className="card-text">{value.tagline}</h6>
  
  <p className="card-text">{value.description}</p>
  </div>
  
</div>
  
  ):<h2>No match Found</h2>
  }</div>;
};

export default Main;
