import React from "react";
import { useSelector } from "react-redux";
import moment from 'moment';

function AboutUs(){
    debugger;
    const formData = useSelector((state) => state.Reducer);
        return(
                <>
                    <h2>Registration Form:</h2>
                    <p>Full Name: {formData?.formVal.firstName} {formData?.formVal.lastName}</p>
                    <p>Email: {formData?.formVal.email}</p>
                    <p>Date of Birth: {moment(formData?.formVal.dob).format("YYYY-DD-MM")}</p>
                    <p>Phone #: {formData?.formVal.phone}</p>
                    <p>CNIC: {formData?.formVal.cnic}</p>
                    <p>Gender: {formData?.formVal.gender}</p>
                    <p>City: {formData?.formVal?.city} </p>
                </>
        ); 
    } 


export default AboutUs;
