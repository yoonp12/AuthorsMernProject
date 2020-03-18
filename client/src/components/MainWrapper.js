import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router, Link, navigate } from '@reach/router'
import Create from './Create'
import Edit from './Edit'
import AuthorList from './AuthorList'

const MainWrapper = () => {
    const [ submitState, setSubmitState] = useState(false)

    const [ authorList, setAuthorList ] = useState([])

    const [errors, setErrors] = useState({});
    
    const [ author, setAuthor] = useState({
        firstName: "",
        lastName: ""
    })

    const changeHandler = (e) => {
        setAuthor({
            ...author,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:8000/api/Authors/new", author)
            .then(res=> {
                setSubmitState(!submitState)
                setAuthor(res)
                navigate ("/")
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

    return (
            <div className="container jumbotron">
                <Router>
                    <AuthorList path="/" author={author} setAuthorList={setAuthorList} setSubmitState={setSubmitState} submitState={submitState} authorList={authorList} changeHandler={changeHandler} />
                    <Create path="/new" errors={errors} submitHandler={submitHandler} changeHandler={changeHandler} />
                    <Edit path="/edit/:id" setErrors={setErrors} errors={errors} setAuthor={setAuthor} author={author} submitState={submitState} changeHandler={changeHandler}/>
                </Router>
            </div>
    )
}

export default MainWrapper