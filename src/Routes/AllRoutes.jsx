import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn } from '../components/SignIn'
import { Upload } from '../components/Upload'

export const AllRoutes = () => {
    return (
        <>


            <Routes>

                <Route path='/' element={<SignIn/>}></Route>

                <Route path='/upload' element={<Upload />}></Route>

            </Routes>



        </>
    )
}
