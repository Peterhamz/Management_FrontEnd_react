import React, {useState} from 'react'
import { createEmployee } from '../services/EmployeeServices'
import { useNavigate } from 'react-router-dom'


const Employee = () => {

const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')

const [error, setError] = useState({
  firstName: "",
  lastName: "",
  email:  ""
})


const navigator = useNavigate()

function saveEmployee(e){
    e.preventDefault()


    if(validateForm){

      const employee = {firstName, lastName, email}
      console.log(employee)
  
      createEmployee(employee).then((response) =>{
        console.log(response.data)
          navigator('/employees')
      })

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

  return (
    <div className='container'>
          <br /> <br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                 <div className='card-body pt-3'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                 type='text'
                                 placeholder='Enter Employee First Name'
                                 name='firstName'
                                 value={firstName}
                                 className='form-control'
                                 onChange={(e) => setFirstName(e.target.value)}
                                 />

                            </div>

                             <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                 type='text'
                                 placeholder='Enter Employee Last Name'
                                 name='lastName'
                                 value={lastName}
                                 className='form-control'
                                 onChange={(e)=> setLastName(e.target.value)}
                                 />
                            </div>

                             <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                 type='text'
                                 placeholder='Enter Employee Email'
                                 name='email'
                                 value={email}
                                 className='form-control'
                                 onChange={(e) => setEmail(e.target.value)}
                                 />
                            </div>

                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

                        </form>

                 </div>

            </div>
        </div>
    </div>
  )
}

export default Employee