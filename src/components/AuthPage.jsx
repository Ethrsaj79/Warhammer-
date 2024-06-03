import React, {useContext, useState} from 'react'
import { AuthForm } from "./AuthForm"
import { Footer } from './PublicStructure'
import { UserContext } from './context/UserContext'
import { Navigate } from 'react-router-dom'


const initInputs = { username: "", userpassword: "" }

export const AuthPage = () => {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signUp, login} = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    } 
    const handleSignUp = (e) => {
        e.preventDefault()
        signUp(inputs)
        Navigate(to = `/comment-section`)
    } 
    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)
        
    } 
    const toggleForm = () => {
        setToggle(prev => !prev)
        // resetAuth
    } 

    return (
        <div className='auth--box'>
            <h1>Welcome to Warhammer+!</h1>
            {!toggle ?
                <>
                    <AuthForm
                        handleChange = {handleChange}
                        handleSubmit = {handleSignUp}
                        inputs = {inputs}
                        btnTxt = "Sign up for Warhammer+"
                        // errMsg = {errMsg}
                        />
                    <p onClick={toggleForm}>Already Signed Up?</p>
                    {Footer()}
                </>
                    :
                    <>
                    <AuthForm
                        handleChange = {handleChange}
                        handleSubmit = {handleLogin}
                        inputs = {inputs}
                        btnTxt = "Login"
                        // errMsg = {errMsg}
                        />
                    <p onClick={toggleForm}>Not a Member?</p>
                    {Footer()}
                </>
                
            }
        </div>
    )
}