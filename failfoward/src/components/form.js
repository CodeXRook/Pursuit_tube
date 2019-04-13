import React from 'react';



class Form extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                name: '',
                image: [],
                price: ''
            }

            handleChange = (e) => {
                this.setState({ [e.target.name]: e.target.value});
            }

            handleSubmit = (e) => {
                e.preventDefault();

                const {name, image, price } = this.state;
            }

        // handleInputChange = (e) => {
        //     const input = e.target.value
        //     this.setState ({ input });
        // }

        // handleSubmit = (e) => {
        //     const { name, price, image, }
        // }
        
 }
        render(){
    return (

        <form className="needs-validation" novalidate>
                <div className="col-md-4 mb-3">
                    <label for="validationCustom01"> Enter Product </label>
 <input type="text" className="form-control" id="validationCustom01" placeholder=" " value="" required />
                    
                </div>


            <div className="col-md-4 mb-3">
                <label for="validationCustom02"> Show Image</label>
                <input type="text" className="form-control" id="validationCustom02" placeholder=""  required />
            </div>

  
                <div className="col-md-4 mb-3">
                    <label for="validationCustom03"> Price </label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder=" " required />      
                </div>
            


            <div className="form-group">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>

    )
}

}

export default Form;