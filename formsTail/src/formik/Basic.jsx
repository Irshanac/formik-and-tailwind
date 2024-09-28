import React from "react";
import { useFormik  } from "formik";
const Basic=()=>{
    const formik =useFormik({initialValues:{name:"",email:"",channel:""},
    onSubmit:values=>{
        console.log(`form data`,values )
    },validate:values=>{
        let errors={}
        if(!values.name)
        {
            errors.name="name is required  "
        }
        if(!values.email)
        {
            errors.email="required"
        }
        return errors
    }
  })
   // console.log('formik value',formik.values);
    
    return(
        <div>
            <form onSubmit={formik.handleSubmit} >
                <label htmlFor="name">Name</label>
                <input type="text"  name="name" id="name" value={formik.values.name} onChange={formik.handleChange } onBlur={formik.handleBlur}/>
                {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div>:null}
                <br/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange } onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}
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