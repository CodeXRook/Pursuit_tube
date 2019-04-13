import React from 'react'
import Form from './components/form';
import Products from './components/products';
 
//Making a to do list using search 
class App extends React.Component {

  constructor(props){
    super(props);
//NEED TO KEEP TRACK OF STORED DATA OR NUMBERS
//ON STATE IS SET SET UP ONCHANGE EVENT HANDLER

    this.state = {
      products:[
           {name:'Lv Belt', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M6065S_PM2_Front%20view.jpg?wid=382&hei=100', price: '$1000'},
           {name:'Lv tie', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M71869_PM2_Front%20view.jpg?wid=382&hei=100', price: '$550'} , 
           {name:'Lv Belt', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--LP0109_PM2_Front%20view.jpg?wid=382&hei=100', price: '$185' },
           {name:'Lv ORAGE FOR MEN', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--LP0051_PM2_Front%20view.jpg?wid=382&hei=100', price: '$250'},
           {name:'Lv Belt', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--FGCO37AYZ571_PM2_Front%20view.jpg?wid=382&hei=100', price: '$460'},
           {name:'Lv tie', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M71869_PM2_Front%20view.jpg?wid=382&hei=100', price: '$550'} , 
           {name:'Lv Belt', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M6065S_PM2_Front%20view.jpg?wid=382&hei=100', price: '$1000'},
           {name:'Lv tie', image:'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_AS/louis-vuitton--M71869_PM2_Front%20view.jpg?wid=382&hei=100', price: '$550'}    
          
      ]
    }
  }

  render() {
    const { products } = this.state;

    return(
      <>
      <Form/>
    <div className =' container row mx-auto'>
    {
   products.map((e, i) => {
    return <Products name={e.name} image={e.image} price={e.price} />;
   })
  }
  </div>
  </>
    )
  }
}
export default App;