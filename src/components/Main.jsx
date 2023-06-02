import React from 'react'
import AllContactsList from './AllContactsList'

const Main = () => {
  return (
    <div className='container-flex'>
        <div className='row my-3'>
            <div className='col-2'>
            </div>
            <div className='col-8 border border-info border-2 rounded shadow'>
                <AllContactsList />
            </div>
            <div className='col-2'>
            </div>
        </div>
    </div>
  )
}

export default Main