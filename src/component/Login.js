import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './product.css'
import {Link} from 'react-router-dom'

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { register, formState: { errors }, handleSubmit, trigger } = useForm()

    const onSubmit = () => {
        trigger().then(isValid => {
            if (isValid) {
                console.log(formData)
            }
        }
        )
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        })
        )
    }

    return (
        <div className="container-xxl">
            <div className="row">
                <div className="d-flex vh-100 justify-content-center align-items-center">
                    <div className="col-md-4">
                        <div className="border rounded p-4 shadow bg-white rounded">
                            <h2 className="text-center my-4 title font-header-adjustment">Sign In</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className='need-validation' noValidate>
                                <div className="row m-md-4">
                                    <div className="mb-4">
                                        <label className="mb-2 font-adjustment" htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                                            className={`form-control ${errors.email ? 'invalid' : ''} font-adjustment`}
                                            onChange={handleChange}
                                            name='email'
                                            value={formData.email}
                                            id="email"
                                            autoComplete="password"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="mb-2 font-adjustment" htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            {...register('password', { required: true})}
                                            className={`form-control ${errors.password ? 'invalid' : ''} font-adjustment`}
                                            onChange={handleChange}
                                            name='password'
                                            value={formData.password}
                                            id="password"
                                            autoComplete="password"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="mb-4 text-end font-adjustment font-color-text">
                                         Forget Password?
                                    </div>
                                    <div className="mb-4 d-flex justify-content-center">
                                        <Link to={'/home'} className="text-center text-decoration-none px-md-5 py-2 col-12 font-adjustment font-color rounded">
                                            Sign In
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login