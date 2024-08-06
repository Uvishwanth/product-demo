import React, { useState } from 'react';
import Navigation from './navigation';
import './product.css';
import couplingImage from '../Asset/coupling.png';
import shaftImage from '../Asset/shaft.png';
import { Link } from 'react-router-dom'

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-md-4 container-fluid vh-100">
      <Navigation data={'Dashboard'} />
      <div className="row mt-5 ms-4">
        <div id='side-bar' className="px-md-4 init-border align-items-center rounded shadow-sm init-border-sidebar d-flex flex-column">
          <div className='mt-5 font-color w-100 px-md-3 py-md-2 rounded-3 shadow-sm d-flex justify-content-between align-items-center dropdown-container' onClick={toggleDropdown}>
            Purchaser
            <i className={`fa-solid ${isDropdownOpen ? 'fa-chevron-right' : 'fa-chevron-down'} ps-2 align-items-end dropdown-arrow`}></i>
            {isDropdownOpen && (
              <div className="dropdown-content rounded-4 border-2 d-flex flex-column justify-content-around align-content-center">
                <Link to={'/demo'} className="d-flex flex-column text-dark text-decoration-none align-items-center dropdown-container">
                  <i className="fa-solid fa-gear fa-2x z-3"></i> Gear Box
                </Link>
                <Link to={'/demo'} className="d-flex flex-column p-2 text-dark text-decoration-none align align-items-center dropdown-container">
                  <img src={shaftImage} alt="Shaft" className="img-fluid mt-2" style={{ height: '2em' }} />
                  Shaft
                </Link>
                <Link to={'/demo'} className="d-flex flex-column text-dark text-decoration-none text-center align align-items-center dropdown-container">
                  <img src={couplingImage} alt="Shaft" className="img-fluid mt-2" style={{ height: '2em' }} />
                  Motor <br /> Coupling
                </Link>
              </div>
            )}
          </div>
          <div className=' dropdown-container mt-4 font-color w-100 px-md-3 py-md-2 rounded-3 shadow-sm d-flex justify-content-between align-items-center'>
            Manufacturer
            <i className="fa-solid fa-chevron-down ps-2 align-items-end dropdown-arrow"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
