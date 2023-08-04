import React, { useContext } from 'react'
import Store from './Store'
import { useNavigate } from 'react-router-dom'
import './AddNewButton.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const AddNewStudent = () => {
  const ContextData = useContext(Store)
  const Navigate = useNavigate()
  // console.log(ContextData.Students)
  
  const newStu = {
    Name : '',
    Age : '',
    Course: '',
    Batch : ''
  }

  const handleChange = (e) =>{
    newStu[e.target.name] = e.target.value;
  }
  const handleClick = () =>{
    if(newStu.Name!=='' && newStu.Age!=='' && newStu.Course!=='' && newStu.Batch!==''){
      ContextData.Students.push(newStu)
    }
    Navigate(-1)
    console.log(ContextData.Students)
  }
  return (
    <div className='add-parent'>
      <form action='/Student'>

 
      <label >Name</label>
        <input type='text' id='name' name='Name' placeholder=' ' onChange={handleChange} required/>
        <div class="form-floating mb-3 mt-3">
  <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" />
  <label for="email">Email</label>
</div>
     
  
        
       
      <label >Age</label>
      <input type='text' id='age' name='Age' placeholder='Age' onChange={handleChange} required/><br/>
      <label htmlFor='course'>Course</label>
      <input type='text' id='course' name='Course' placeholder='Course' onChange={handleChange} required/><br/>
      <label htmlFor='batch'>Batch</label>
      <input type='text' id='batch' name='Batch' placeholder='Batch' onChange={handleChange} required/><br/>
      <button type='button' onClick={()=>Navigate(-1)}>Cancel</button><br/>
      <button type='button' onClick={handleClick}>Submit</button><br/>
      </form>
    </div>
  )
}

export default AddNewStudent