import React from 'react'

function Navigation({ data }) {
  return (
    <div className="row">
      <div className="d-flex header init-border justify-content-between align-items-center rounded shadow-sm px-md-5 py-md-2">
        <h2 className='font-header-adjustment'>{data}</h2>
        <div className="d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-circle-user pe-2 user-profile"></i>{'Jhon Doe'}<i className="fa-solid fa-chevron-down ps-2 align-items-end dropdown-arrow"></i>
        </div>
      </div>
    </div>
  )
}

export default Navigation