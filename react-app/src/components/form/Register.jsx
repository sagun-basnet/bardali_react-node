import React, { useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // console.log(formData);

    }

    // {
    //     name: '',
    //     email: '',
    //     password: '',
    //     re_password :''
    // }


    return (
        <div className='grid place-items-center h-[100vh]'>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4 p-16 w-[40%] shadow-xl'>
                <h1 className='text-4xl font-bold'>Register</h1>

                {/* <input onChange={(e) => setFormData((prev) => ({ ...prev, name: value }))} type="text" name="name" id="" placeholder='Enter name' className='p-2 px-4 w-full border-b-2 border-black' value={formData.name} required /> */}

                <input onChange={handleChange} type="text" name="name" id="" placeholder='Enter name' className='p-2 px-4 w-full border-b-2 border-black' value={formData.name} required />

                <input onChange={handleChange} type="email" name="email" id="" placeholder='Enter email' className='p-2 px-4 w-full border-b-2 border-black' value={formData.email} required />

                <input onChange={handleChange} type="password" name="password" id="" placeholder='Enter password' className='p-2 px-4 w-full border-b-2 border-black' value={formData.password} required />

                <input onChange={handleChange} type="password" name="re_password" id="" placeholder='Re-enter password' className='p-2 px-4 w-full border-b-2 border-black' value={formData.re_password} required />

                <button type="submit" className='p-2 px-4 bg-blue-500 rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default Register


