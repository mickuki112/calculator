import axios from 'axios'

export const getEmployees= () => {
    axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
            return response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}
export const getEmployee= (id) => {
    axios.get('http://dummy.restapiexample.com/api/v1/employee/'+id)
        .then((response) => {
            return response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}
export const createEmployee= (data) => {
    axios.post('http://dummy.restapiexample.com/api/v1/create',data)
        .then((response) => {
            return response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}
export const updateEmployee= (data,id) => {
    axios.put('http://dummy.restapiexample.com/public/api/v1/update/'+id,data)
        .then((response) => {
            return response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}
export const deleteEmployee= (id) => {
    axios.delete('http://dummy.restapiexample.com/public/api/v1/delete/'+id)
        .then((response) => {
            return response.data.data
        })
        .catch((error) => {
            console.log(error)
        })
}
