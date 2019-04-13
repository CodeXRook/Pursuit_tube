import React from 'react';



const Products =( props) =>{
    return(

        <>

        <div className= 'col-4 text-center'>
        <img src={props.image} alt='' />
        <h4>{props.name}</h4>
        <h5>{props.price}</h5>
       </div> 
   
       </>
      )
 }
  export default Products;
    