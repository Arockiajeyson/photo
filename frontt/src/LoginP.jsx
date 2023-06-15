import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import ToastCon from './ToastContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthoCont from './AuthorContext'
import { useRef } from 'react'
export default function LoginP() {
    const ref1 = useRef()
    const ref2 = useRef()
    const { LoginFun } = useContext(AuthoCont)
    const navigate = useNavigate()
    const { toast } = useContext(ToastCon)
    const [state, setState] = useState({ Email: '', Password: '' })
    const handler = () => {
        navigate('/register')
    }
    const handler2 = () => {
        LoginFun(state, ref1, ref2)
    }
    return (
        <div className='main-div'>
            <div className='inp'>
                <div >
                    <h2>Email :</h2>
                    <input type="text" ref={ref1} onChange={(e) => setState({ ...state, Email: e.target.value })} />
                </div>
                <div>
                    <h2>Password :</h2>
                    <input type="password" ref={ref2} onChange={(e) => setState({ ...state, Password: e.target.value })} />
                </div>
                <div>
                    <button onClick={handler2}>Login</button>
                </div>
                <div>
                    <h3>need an account ? <span className='sp-tag' onClick={handler}>Click</span></h3>
                </div>
            </div>
        </div>
    )
}
