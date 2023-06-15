import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import ToastCon from './ToastContext'
import { useContext } from 'react'
import AuthoCont from './AuthorContext'
export default function Registerp() {
    const { registerFun } = useContext(AuthoCont)
    const { toast } = useContext(ToastCon)
    const [state, setState] = useState({ Email: '', Password: '', Confirmpassword: '' })
    const handler = () => {
        const { Email, Password, Confirmpassword } = state
        if (Password !== Confirmpassword) {
            return toast.error('password must be same as confirm password....')
        } else if (!Password.includes('!') && !Password.includes('@') && !Password.includes('#') && !Password.includes('$') && !Password.includes('%') && !Password.includes('&') && !Password.includes('?') && !Password.includes('*')) {
            return toast.error('must contain special character....')
        } else if (Password.length < 6) {
            return toast.error('password must contain atleast 6 letters....')
        }
        registerFun(state)
    }
    return (
        <div className='main-div'>
            <div className='inp'>
                <div>
                    <h2>Email :</h2>
                    <input type="email" onChange={(e) => setState({ ...state, Email: e.target.value })} />
                </div>
                <div>
                    <h2>Password :</h2>
                    <input type="password" onChange={(e) => setState({ ...state, Password: e.target.value })} />
                </div>
                <div>
                    <h2>Confirm password :</h2>
                    <input type="password" onChange={(e) => setState({ ...state, Confirmpassword: e.target.value })} />
                </div>
                <div>
                    <button onClick={handler}>Register</button>
                </div>
            </div>
        </div>

    )
}
