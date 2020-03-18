import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate, Link } from '@reach/router';

const AuthorList = ({authorList, setAuthorList, setSubmitState, submitState}) => {

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/Authors/delete/${id}`)
            .then(res=> setSubmitState(!submitState))
            .catch(err=> console.log("Error: ", err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/Authors/")
            .then(res=>setAuthorList(res.data))       
    }, [submitState]);

    return (
            <div className="container">
                <h1>My Favorite Authors</h1>
                <Link to="/new">Add an Author</Link>
                <table className="table mt-3">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Authors:</th>
                        <th scope="col">Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authorList.map((author, i) => 
                        <tr key={i}>
                            <td scope="row" className="p-4">{author.lastName}, {author.firstName}</td>
                            <td>
                                <button className="ml-4" onClick={()=>navigate(`/edit/${author._id}`)}>Update</button>
                                <button className="ml-4" onClick={()=>deleteHandler(author._id)}>Delete</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
    )
}

export default AuthorList