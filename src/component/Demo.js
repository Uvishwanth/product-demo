import React, { useState } from 'react';
import Navigation from './navigation';
import GearViewer from './GearViewer';


function Demo() {
  const [formData, setFormData] = useState({
    gearMaterial: '',
    torqueCapacity: '',
    noiseLevel: '',
    efficiency: '',
    mountType: '',
    serviceLife: '',
    speedRange: '',
    size: '',
    weight: ''
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleHandle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };


  return (
    <div className="p-md-3 container-fluid">
      <Navigation data={'Product Demo'} />
      <div className="row p-md-4">
      <div className="col-md-8">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className='text-center font-header-adjustment product-demo-font'>MODEL VIEW</h2>
          <div className=''>
            <div className="container product-container d-flex align-items-center rounded-2 justify-content-center border-1 shadow">
                <GearViewer/>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div className="col-md-4">
          <div className="container">
            <div className="row justify-content-center">
              <h2 className='text-center font-header-adjustment product-demo-font'>SPECIFICATIONS</h2>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-12">
                <form onSubmit={handleSubmit}>
                  <div className='init-border rounded-2 border-1 p-md-4 shadow-sm'>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="gearMaterial" className="form-label product-font-adjustment">Gear Material:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="gearMaterial"
                          value={formData.gearMaterial}
                          onChange={handleChange}
                          placeholder='Steel (Alloy Steel)'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="torqueCapacity" className="form-label product-font-adjustment">Torque Capacity:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="torqueCapacity"
                          value={formData.torqueCapacity}
                          onChange={handleChange}
                          placeholder='250 Nm (Newton-meters)'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="noiseLevel" className="form-label product-font-adjustment">Noise Level:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="noiseLevel"
                          value={formData.noiseLevel}
                          onChange={handleChange}
                          placeholder='70 dB (Moderate noise level)'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="efficiency" className="form-label product-font-adjustment">Efficiency:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="efficiency"
                          value={formData.efficiency}
                          onChange={handleChange}
                          placeholder='90%'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="mountType" className="form-label product-font-adjustment">Mount Type:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="mountType"
                          value={formData.mountType}
                          onChange={handleChange}
                          placeholder='Flange-Mounted'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="serviceLife" className="form-label product-font-adjustment">Service Life:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="serviceLife"
                          value={formData.serviceLife}
                          onChange={handleChange}
                          placeholder='20,000 hours'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="speedRange" className="form-label product-font-adjustment">Speed Range:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="speedRange"
                          value={formData.speedRange}
                          onChange={handleChange}
                          placeholder='500 to 1500 RPM'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="size" className="form-label product-font-adjustment">Size:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="size"
                          value={formData.size}
                          onChange={handleChange}
                          placeholder='300 mm x 250 mm x 200 mm'
                        />
                      </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                      <div className="col-md-4">
                        <label htmlFor="weight" className="form-label product-font-adjustment">Weight:</label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          id="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          placeholder='15 kg (33 lbs)'
                        />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mb-3 justify-content-center align-items-center product-dropdown">
                    <div type="submit" onClick={toggleHandle} className="font-color px-md-3 py-md-1 my-md-3 rounded-3 shadow-sm d-flex justify-content-between align-items-center">Confirm
                      <i className="fa-solid fa-arrow-right-long ps-2"></i>
                      {
                        isDropdownOpen && (
                          <div className="container z-1000 product-dropdown-content rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-around">
                            <div className='product-dropdown-items z-100 py-md-1 px-2 w-100 d-flex align-items-center justify-content-between'>Generate PDF <i className="fa-solid fa-chevron-right ps-2"></i></div>
                            <div className='product-dropdown-items z-100 py-md-1  px-2 w-100 d-flex align-items-center justify-content-between'>Send Email <i className="fa-solid fa-chevron-right ps-2"></i></div>
                          </div>
                        )
                      }
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
