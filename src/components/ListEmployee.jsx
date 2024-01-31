import React, {useEffect, useState} from 'react'
import { listEployees } from '../services/EmployeeServices'
import { useNavigate } from 'react-router-dom'


const ListEmployee = () => {

const [employees, setEployees] = useState([])

const navigator = useNavigate()


useEffect(()=>{
        listEployees().then((response)=>{
            setEployees(response.data);
        }).catch(error =>{
            console.error(error);
        })
},[])

function addNewEmployee(){
        navigator('/add-newEmployee')
}

  return (
    <div className='container'>
           
            <h2 className='bt-3 text-center'>List of Employee</h2>

            <button className='btn mb-2 btn-primary' onClick={addNewEmployee}>Add Employee</button>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                                <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                </tr>
                        )

                    }
                </tbody>

            </table>
    </div>
  )
}

export default ListEmployee