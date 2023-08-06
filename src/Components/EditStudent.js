import React, { useContext } from 'react'
import Store from './Store'
import { useLocation, useNavigate } from 'react-router-dom'
import './AddNewButton.css'
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';


const EditStudent = () => {
  const ContextData = useContext(Store)
  const Navigate = useNavigate()
  const IndexValue = useLocation().state.data;

  const updateObj = {
    Name: ContextData.Students[IndexValue].Name,
    Age: ContextData.Students[IndexValue].Age,
    Course: ContextData.Students[IndexValue].Course,
    Batch: ContextData.Students[IndexValue].Batch
  }

  const handleChange = (e) => {
    updateObj[e.target.name] = e.target.value;
  }
  const handleClick = () => {
    ContextData.Students[IndexValue] = updateObj;
    Navigate(-1)
    //  Navigate("/student")
  }
  // Navigate(-1)
  // console.log(ContextData.Students)

  return (
    <div className='add-parent'>
      <form action='/Student'>
        <diV className="display">

          <div>


            <label >Name</label>
            <input type='text' id='name' name='Name' placeholder={ContextData.Students[IndexValue].Name} onChange={handleChange} required />

          </div>

          <div>



            <label >Age</label>
            <input type='text' id='age' name='Age' placeholder={ContextData.Students[IndexValue].Age} onChange={handleChange} required /><br />
          </div>
        </diV>
        <diV className="display">
          <div>


            <label htmlFor='course'>Course</label>
            <input type='text' id='course' name='Course' placeholder={ContextData.Students[IndexValue].Course} onChange={handleChange} required /><br />

          </div> <div>


            <label htmlFor='batch'>Batch</label>
            <input type='text' id='batch' name='Batch' placeholder={ContextData.Students[IndexValue].Batch} onChange={handleChange} required /><br />
          </div>  </diV>
        <diV className="display1">

          <div>


            <button type='button' onClick={() => Navigate(-1)}>Cancel</button><br />

          </div>
          <diV className="space">
            <button type='button' onClick={handleClick}>Update</button><br />
          </diV>  </diV>  </form>
    </div>
  )
}

export default EditStudent