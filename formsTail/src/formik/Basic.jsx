import React from "react";
import { useFormik  } from "formik";
const Basic=()=>{
    const formik =useFormik({initialValues:{name:"",email:"",channel:""},
    onSubmit:values=>{
        console.log(`form data`,values )
    }})
   // console.log('formik value',formik.values);
    
    return(
        <div>
            <form onSubmit={formik.handleSubmit} >
                <label htmlFor="name">Name</label>
                <input type="text"  name="name" id="name" value={formik.values.name} onChange={formik.handleChange }/>
                <br/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange } />
                <br/>
                <label htmlFor="channel">Channel</label>
                <input type="text" name="channel" id="channel" value={formik.values.channel} onChange={formik.handleChange } />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default  Basic