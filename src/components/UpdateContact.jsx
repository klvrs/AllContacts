import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateContact = () => {
    const {id} = useParams()

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        age: 0,
        id: id
    })

    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:5000/contacts/'+id)
        .then(res=>setInputData(res.data))
        .catch(err => console.log(err))
    },[])

    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:5000/contacts/' + id, inputData)
            .then(res => {
                alert('Contact has been updated!!!')
                navigate('/')
            })
            .catch(err => console.log(err))
    }

  return (<div className='container my-5'>
  <div className='row'>
      <div className='col-2'></div>
      <div className='col-8 border border-info rounded shadow'>
          <div className='container-flex'>
              <form onSubmit={ handleSubmit }>
              <div className='row'>
                  <div className="col bg-light rounded p-3 text-center">
                      <h3>Update the Conatct Details</h3>
                  </div>
              </div>
              <div className='row'>
                  <div className="col p-3 text-center">
                      <input type= "text" className= "form-control" placeholder='enter name' value= {inputData.name} 
                      onChange={(event) => setInputData({...inputData, name: event.target.value})}/>

                  </div>
              </div>
              <div className='row'>
                  <div className="col p-3 text-center">
                      <input type= "email" className= "form-control" placeholder='enter email' value= {inputData.email} 
                      onChange={(event) => setInputData({...inputData, email: event.target.value})} />
                  </div>
              </div>
              <div className='row'>
                  <div className="col p-3 text-center">
                      <input type= "number" className= "form-control" placeholder='enter age' value= {inputData.age} 
                      onChange={(event) => setInputData({...inputData, age: event.target.value})} />
                  </div>
              </div>
              <div className='row'>
                  <div className="col p-3 text-end">
                      <button onClick={(event)=> {
                              event.preventDefault()
                              navigate(-1)
                          }} className='btn btn-secondary mx-2'>Cancel</button>
                      <button className='btn btn-success mx-2'>Submit</button>
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

export default UpdateContact