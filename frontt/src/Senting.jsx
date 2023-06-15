import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import axios from 'axios'
import ToastCon from './ToastContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Senting() {
    const { toast } = useContext(ToastCon)
    const nav = useNavigate()
    const [state, setState] = useState({
        Title: '',
        Dis: '',
        img: ''
    })
    const handler = async () => {
        console.log(state)
        const headers = { 'Authorization': localStorage.getItem('token') }
        const res = await axios.post('https://newproject-abja.onrender.com/posts/posting', state, { headers })
        if (res.data === 'uploaded') {
            toast.success(res.data)
            nav('/post')
        }
    }
    return (
        <div className='main-div'>
            <div className='inp'>
                <div>
                    <h1>Title :</h1>
                    <input type="text" onChange={(e) => setState({ ...state, Title: e.target.value })} />
                </div>
                <div>
                    <h1>Discription :</h1>
                    <textarea name="area" id="" cols="30" rows="5" onChange={(e) => setState({ ...state, Dis: e.target.value })}></textarea>
                </div>
                <div>
                    <h1>Image :</h1>
                    <FileBase64 onDone={(file) => setState({ ...state, img: file.base64 })} />
                </div>
                <div>
                    <button className='send-btn' onClick={handler}>Send</button>
                </div>
            </div>
        </div>

    )
}
