import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'

export const listEployees = () =>{
    return axios.get(`${REST_API_BASE_URL}/getAllEmployee`)
}

export const createEmployee = (employee) =>{
    return axios.post(`${REST_API_BASE_URL}/create`, employee)
}

export const getEmployee = (employeeId) =>{
    return axios.get(`${REST_API_BASE_URL}/get`, employeeId)
}