import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const AddContactForm = () => {

    const [inputDate, setInputData] = useState({
        name: '',
        email: '',
        age: 0
    })

    const navigate = useNavigate()
    const handleSubmit =(event)=>{
        event.preventDefault()
        axios.post('http://localhost:5000/contacts',inputDate)
        .then(()=>{
            alert('contact has been added')
            navigate(-1)
        })
        .catch(err=>console.log(err))
    }

    

  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 border border-info rounded shadow'>
                <div className='container-flex'>
                    <form onSubmit={ handleSubmit }>
                    <div className='row'>
                        <div className="col bg-light rounded p-3 text-center">
                            <h3>Fill the Contact Details</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col p-3 text-center">
                            <input type= "text" className= "form-control" placeholder='enter name' 
                            onChange={(event) => setInputData({...inputDate, name: event.target.value})}/>

                        </div>
                    </div>
                    <div className='row'>
                        <div className="col p-3 text-center">
                            <input type= "email" className= "form-control" placeholder='enter email' 
                            onChange={(event) => setInputData({...inputDate, email: event.target.value})} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col p-3 text-center">
                            <input type= "number" className= "form-control" placeholder='enter age' 
                            onChange={(event) => setInputData({...inputDate, age: event.target.value})} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col p-3 text-end">
                            <button onClick={(event)=> {
                                    event.preventDefault()
                                    navigate(-1)
                                }} className='btn btn-secondary mx-2'>Cancel</button>
                            <button className='btn btn-success mx-2' >Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className='col-2'></div>
        </div>
      
    </div>
  )
}

export default AddContactForm