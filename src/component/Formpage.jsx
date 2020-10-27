import React from "react";
import { useForm } from "react-hook-form";
import moment from 'moment';
import Error from './Error';
import addressValidator from './AddressValidation';
import './Radio.jsx';
import FormData from "./FormData";
import CustomizedRadios from './Radio'







export default function Form() {
 const { register, errors, handleSubmit } = useForm();

 return (
   <form onSubmit={handleSubmit(data => FormData(data))}>
     <h1>New Order</h1>
     <label>Name</label>
     <input name="name" ref={register({ required: 'Required' })} />
     <Error errors={errors.name} />

     <label>Title</label>
      <select name="cars" id="cars" ref={register({ required: 'Required' })}>
          <option value=""></option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Master">Master</option>
      </select>
     

     <CustomizedRadios/>

     <label>Address</label>
     <input
       name="address"
       ref={register({
         required: 'Required',
         validate: value => addressValidator(value) || 'Invalid address',
       })}
     />
     <Error errors={errors.address} />
     <label>Date</label>
     <input
       name="date"
       type="date"
       max={moment().format("YYYY-MM-DD")}
       ref={register({ required: 'Required' })}
     />
     <Error errors={errors.date} />
     <label>Order Number</label>
     <input
       name="order"
       ref={register({
         required: 'Required',
         minLength: {
           value: 14,
           message: 'Order number too short',
         },
         maxLength: {
           value: 14,
           message: 'Order number too long',
         },
         pattern: {
           value: /\d{14}/,
           message: "Invalid order number",
         },
     })} />
     <Error errors={errors.order} />
     <input type="submit" className="submitButton" />
   </form>
 );
}

