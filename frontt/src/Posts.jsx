import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
export default function Posts() {
  const nav = useNavigate()
  const [state, setState] = useState([])
  const [iset, iState] = useState()
  const [st,setSt] =useState(false)
  const [iofRead,setIodread] =useState()
  useEffect(() => {
    const func = async () => {
      console.log(localStorage.getItem('token'))
      const headers = { 'Authorization': localStorage.getItem('token') }
      const res = await axios.post('https://newproject-abja.onrender.com/posts/geting', null, { headers })
      setState(res.data)
    }
    func()
  }, [])
  const Creating = () => {
    nav('/send')
  }
  const datas = (i) => {
    iState(i)
  }
  const logout =()=>{
    localStorage.clear()
    nav('/',{replace:true})
  }
  return (
    <div >
      <div style={{marginTop:'50px'}}>
      <span style={{marginLeft:'150px',fontSize:'30px'}} className='p-yag' onClick={Creating}>+ Create</span>
      <span style={{marginLeft:'1000px',fontSize:'30px'}} className='p-yag' onClick={logout}>Log-Out</span>
      </div>
      {state.length !== 0 ?
        <div className='content' style={{marginTop:'40px'}}>
          {state.map((e, i) => {
            return (
              <div className='main-div' key={i}>
                <h1 onClick={() => datas(i)} className='title'>Title :</h1>
                <p>{e.Title}</p>
                <h1>Discription :</h1>
                {st && i==iofRead ?<div>{e.Dis}<span className='sp-tt' style={{marginLeft:'30px',color:'rgb(124, 124, 230)'}} onClick={()=>{setSt(false);setIodread(i)}}>Readless</span></div>:<div>{e.Dis.substr(0,100)}<span className='sp-tt' onClick={()=>{setSt(true);setIodread(i)}} style={{marginLeft:'30px',color:'rgb(124, 124, 230)'}}>Readmore</span></div>}
                <h1>Image :</h1>
                {iset == i ? <img src={e.img} alt="" /> : ''}
                <hr />
              </div>
            )
          })}
        </div> : <div className='loader'><Box sx={{ display: 'flex' }} >
          <CircularProgress />
        </Box></div>}
    </div>
  )
}
