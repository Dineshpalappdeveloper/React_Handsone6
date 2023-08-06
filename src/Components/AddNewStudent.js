import React, { useContext } from "react";
import Store from "./Store";
import { useNavigate } from "react-router-dom";
import "./AddNewButton.css";
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';

const AddNewStudent = () => {
  const ContextData = useContext(Store);
  const Navigate = useNavigate();
  // console.log(ContextData.Students)

  const newStu = {
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  };

  const handleChange = (e) => {
    newStu[e.target.name] = e.target.value;
  };
  const handleClick = () => {
    if (
      newStu.Name !== "" &&
      newStu.Age !== "" &&
      newStu.Course !== "" &&
      newStu.Batch !== ""
    ) {
      ContextData.Students.push(newStu);
    }
    Navigate(-1);
    console.log(ContextData.Students);
  };
  return (
    <div className="add-parent">
      <form action="/Student">
        <diV className="display">
          <div>
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="Name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="text"
              id="age"
              name="Age"
              placeholder="Age"
              onChange={handleChange}
              required
            />
            <br />
          </div>
        </diV>
        <diV className="display">
          <div>
            <label htmlFor="course">Course</label>
            <input
              type="text"
              id="course"
              name="Course"
              placeholder="Course"
              onChange={handleChange}
              required
            />
            <br />
          </div>{" "}
          <div>
            <label htmlFor="batch">Batch</label>
            <input
              type="text"
              id="batch"
              name="Batch"
              placeholder="Batch"
              onChange={handleChange}
              required
            />
            <br />
          </div>{" "}
        </diV>
        <div className="display1">

          <div>

            <button type="button" onClick={() => Navigate(-1)}>
              Cancel
            </button>

          </div>
          <div className="space">

            <button type="button" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default AddNewStudent;
