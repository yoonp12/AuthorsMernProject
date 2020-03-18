import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router' 
import axios from 'axios'

const Edit = ({id, setErrors, errors, setAuthor, author, changeHandler}) => {


    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/Authors/edit/${id}`, author)
            .then(res=> {
                setAuthor(res)
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorObj = {};
                for (const key of Object.keys(errorResponse)) { 
                    errorObj[key] = errorResponse[key]
                }
                setErrors(errorObj);
               
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/Authors/${id}`)
        .then(res => setAuthor(res.data))
        .catch(err=> console.log("Error: ", err))
    }, [])

    return(
        <div>
            <h1>Update This Author!</h1>
            <Link to="/">Go Back</Link>
            <form className="mt-3" onSubmit={updateHandler}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={author.firstName} onChange={changeHandler}/>
                {(errors.firstName) ? <p className="text-danger">{errors.firstName.message}</p> : null}
                <hr/>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={author.lastName} onChange={changeHandler}/>
                {(errors.lastName) ? <p className="text-danger">{errors.lastName.message}</p> : null}
                <hr/>
                <button type="submit" className="btn btn-secondary">Update!</button>
            </form>
        </div>
    )
}

export default Edit