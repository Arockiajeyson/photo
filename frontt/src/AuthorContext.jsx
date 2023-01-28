import React from 'react'
import { createContext } from 'react'
import axios from 'axios'
import ToastCon from './ToastContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthoCont = createContext()
export function AuthorContext({ children }) {
    const nav =useNavigate()
    const {toast} =useContext(ToastCon)
    const registerFun =async(e)=>{
        const {Email,Password} =e
        const res =await axios.post('http://localhost:3000/register',{Email,Password})
        if(res.data ==='Successful'){
            toast.success(res.data)
            nav('/')
        }else if(res.data ==='Data exist already'){
            toast.error(res.data)
        }

    }
    const LoginFun=async(e,ref1,ref2)=>{
        // console.log(e)
        const res =await axios.post('http://localhost:3000/login',e)
        console.log(res.data)
        if(res.data ==='Register first'){
            return toast.error(res.data)
        }else if(res.data ==='invalid password'){
            console.log(res.data)
            ref1.current.style.border='2px solid red'
            ref2.current.style.border='2px solid red'
            ref1.current.style.color='red'
            ref2.current.style.color='red'
            return toast.error(res.data)
        }else{
            ref1.current.style.border='2px solid black'
            ref2.current.style.border='2px solid black'
            ref1.current.style.color='black'
            ref2.current.style.color='black'
            toast.success(res.data[0])
            localStorage.setItem('token',res.data[1])
            nav('/post',{replace:true})
        }
    }
    return (
        <div>
            <AuthoCont.Provider value={{registerFun,LoginFun}}>
                {children}
            </AuthoCont.Provider>
        </div>
    )
}
export default AuthoCont;