import React from 'react'
import { Link } from '@reach/router'

const Create = ({submitHandler, changeHandler, errors}) => {

    return(
        <div>
            <h1>Add A New Author:</h1>
            <Link to="/">Go Back</Link>
            <form className="mt-3" onSubmit={submitHandler}>
                <label>First Name:</label>
                <input type="text" name="firstName" onChange={changeHandler}/>
                {(errors.firstName) ? <p className="text-danger">{errors.firstName.message}</p> : null}
                <hr/>
                <label>Last Name:</label>
                <input type="text" name="lastName" onChange={changeHandler}/>
                {(errors.lastName) ? <p className="text-danger">{errors.lastName.message}</p> : null}
                <hr/>
                <button type="submit" className="btn btn-secondary">Add!</button>
            </form>
        </div>
    )
}

export default Create