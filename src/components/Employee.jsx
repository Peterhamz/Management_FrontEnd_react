import React, {useEffect, useState} from 'react'
import { createEmployee, getEmployee, updateEmployeeApi } from '../services/EmployeeServices'
import { useNavigate, useParams } from 'react-router-dom'


const Employee = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')


const {id} = useParams()

const [error, setError] = useState({
  firstName: "",
  lastName: "",
  email:  ""
})
const navigator = useNavigate()

useEffect(() =>{

if(id){
  getEmployee(id).then((response) =>{
    setFirstName(response.data.firstName);
    setLastName(response.data.lastName);
    setEmail(response.data.email);
  }).catch(error =>{
    console.error(error)
  })
}

},[id])

function saveOrUpdateEmployee(e){
    e.preventDefault()


    if(validateForm()){

      const employee = {firstName, lastName, email}
      console.log(employee)

      if(id){
        updateEmployeeApi(id,employee).then((response) => {
          console.log(response.data)
          navigator('/employees')
        }).catch(error=>{
          console.error(error)
        })
      }else{
        createEmployee(employee).then((response) =>{
          console.log(response.data)
            navigator('/employees')
        }).catch(error =>{
          console.error(error)
        })
      }
  
   
    }
}

function validateForm(){
  let valid = true;

  const errorCoppy ={... error}

  if(firstName.trim()){
    errorCoppy.firstName = ''
  }else{
    errorCoppy.firstName = 'First name is Reqiured'
    valid = false
  }


  if(lastName.trim()){
    errorCoppy.lastName = ''
  }else{
    errorCoppy.lastName = 'Last name is Reqiured'
    valid = false
  }

  if(email.trim()){
    errorCoppy.email = ''
  }else{
    errorCoppy.email = 'Email is Reqiured'
    valid = false
  }

  setError(errorCoppy)

  return valid;
}

function pageTitle(){

  if(!id){
      return <h2 className='text-center'>Add Employee</h2>

  }else{
    return <h2 className='text-center'>Update Employee</h2>

  }
}

  return (
    <div className='container'>
          <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                           {pageTitle()}
                 <div className='card-body pt-3'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                 type='text'
                                 placeholder='Enter Employee First Name'
                                 name='firstName'
                                 value={firstName}
                                 className={`form-control ${error.firstName ? "is-invalid" : ""}`}
                                 onChange={(e) => setFirstName(e.target.value)}
                                 />
                                 {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                            </div>

                             <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                 type='text'
                                 placeholder='Enter Employee Last Name'
                                 name='lastName'
                                 value={lastName}
                                 className={`form-control ${error.lastName ? "is-invalid" : ""}`}
                                 onChange={(e)=> setLastName(e.target.value)}
                                 />
                                    {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                            </div>

                             <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                 type='text'
                                 placeholder='Enter Employee Email'
                                 name='email'
                                 value={email}
                                 className={`form-control ${error.email ? "is-invalid" : ""}`}
                                 onChange={(e) => setEmail(e.target.value)}
                                 />
                                 {error.email && <div className='invalid-feedback'>{error.email}</div>}
                            </div>

                           <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>

                 </div>

            </div>
        </div>
    </div>
  )
}

export default Employee