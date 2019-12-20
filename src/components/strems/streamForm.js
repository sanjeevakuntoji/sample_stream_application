import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';
  
class StreamForm extends Component {

    renderError({error, touched}) {
        if(touched && error){
            return(
                <div className="ui error message">
                <div className="header">{error}</div>
                </div>
            )
        }
    }
   renderInput = ({input, label ,meta}) => {
    //    console.log(meta)
    const className = `field ${meta.error && meta.touched ? 'error': ''}` 
    return (
        // <input  onChange={formProps.input.onChange}
        //     value={formProps.input.value}/>
        <div className={className}>
        <label>{label}</label>
        <input {...input}/>
        {/* <div>{meta.error}</div> */}
        {this.renderError(meta)}
        </div>
    )
   }

   onSubmit =(formValues) =>{
    this.props.onSubmit(formValues)
   }
    render() {
         return (
             <div className= "ui form error">
             <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                 <Field name="title" component = {this.renderInput}  label="Enter Title" />
                 <Field name="description" component = {this.renderInput} label ="Enter desciption "/>
                 <button className="ui primary button">Submit</button>
             </form>
             </div>
         )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
         errors.title=' You must enter A titile'
    }
    if(!formValues.description) {
        errors.description=' You must enter A description'
   }
   return errors;
}
export default (reduxForm({form:'streamForm',validate})(StreamForm));