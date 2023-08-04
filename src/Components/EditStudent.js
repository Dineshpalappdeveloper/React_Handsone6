import React, { useContext } from 'react'
import Store from './Store'
import { useLocation, useNavigate } from 'react-router-dom'
import './AddNewButton.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const EditStudent = () => {
  const ContextData = useContext(Store)
  const Navigate = useNavigate()
 const IndexValue= useLocation().state.data ;
  
  const updateObj = {
    Name : ContextData.Students[IndexValue].Name,
    Age :  ContextData.Students[IndexValue].Age,
    Course:  ContextData.Students[IndexValue].Course,
    Batch : ContextData.Students[IndexValue].Batch
  }

  const handleChange = (e) =>{
    updateObj[e.target.name] = e.target.value;
  }
  const handleClick = () =>{
  ContextData.Students[IndexValue] = updateObj;
  Navigate(-1)
  //  Navigate("/student")
    }
    // Navigate(-1)
    // console.log(ContextData.Students)
  
  return (
    <div className='add-parent'>
      <form action='/Student'>

 
      <label >Name</label>
        <input type='text' id='name' name='Name' placeholder={ContextData.Students[IndexValue].Name} onChange={handleChange} required/>
        <div class="form-floating mb-3 mt-3">
  <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" />
  <label for="email">Email</label>
</div>
     
  
        
       
      <label >Age</label>
      <input type='text' id='age' name='Age' placeholder={ContextData.Students[IndexValue].Age}  onChange={handleChange} required/><br/>
      <label htmlFor='course'>Course</label>
      <input type='text' id='course' name='Course' placeholder={ContextData.Students[IndexValue].Course}  onChange={handleChange} required/><br/>
      <label htmlFor='batch'>Batch</label>
      <input type='text' id='batch' name='Batch'placeholder={ContextData.Students[IndexValue].Batch}  onChange={handleChange} required/><br/>
      <button type='button' onClick={()=>Navigate(-1)}>Cancel</button><br/>
      <button type='button' onClick={handleClick}>Update</button><br/>
      </form>
    </div>
  )
}

export default EditStudent