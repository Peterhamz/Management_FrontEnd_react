import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'

export const listEployees = () =>{
    return axios.get(`${REST_API_BASE_URL}/getAllEmployee`)
}

export const createEmployee = (employee) =>{
    return axios.post(`${REST_API_BASE_URL}/create`, employee)
}

export const getEmployee = (employeeId) =>{
    return axios.get(`${REST_API_BASE_URL}/getEmployeeById` + '/' + employeeId)
}

export const updateEmployeeApi = (employeeId, employee) =>{
    return axios.put(`${REST_API_BASE_URL}/updateEmployee` + '/' + employeeId, employee)
}

export const deleteEmployeeApi = (employeeId) =>{
    return axios.delete(`${REST_API_BASE_URL}/deleteEmployee` + '/' + employeeId)
}