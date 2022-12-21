import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useGithubContext } from '../context/context'

export default function Landing() {
  const navigate = useNavigate()
  const {user,setInputText,fetchUser,notFound} = useGithubContext()
  const [name,setName] = useState('')
  const [gitUser,setGitUser] = useState('rohansthaart')
  
const OnChange = (e)=>{
  setName(e.target.value)
  
}


  const GenerateUser = (e) =>  {
    e.preventDefault();    
    // fetchUser(`https://api.github.com/users/${name}`)
    
     navigate('/main')
    
  }



  // useEffect(()=>{
  //   fetchUser(`https://api.github.com/users/${gitUser}`)
  // },[gitUser])
if(user){
  console.log(user);
}
  return (
   <Wrapper>

        <div> 
            <h1 className='heading'>Github Profile</h1>        
            <h1 className='sub-heading'>Generate your Github Profile</h1>
        </div>
            <form>
                <input type="text" className='form' placeholder='Github Username' value={name} onChange={OnChange}/>
             <button className='submit-btn' onClick={GenerateUser}> Generate</button>
            </form>
            
   </Wrapper>
  )
}
const Wrapper = styled.main`


      .heading{
        position: absolute;
        width: 232px;
        height: 42px;
        left: 568px;
        top: 284px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;

        color: #000000;
      }
  .sub-heading{
    position: absolute;
width: 300px;
height: 28px;
left: 534px;
top: 331px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;

color: #3C3C3C;

  }
  input[type=text]{
 
  padding: 12px 20px;
  
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  }
  .form{
    position: absolute;
width: 387px;
height: 55px;
left: 362px;
top: 397px;

background: rgba(237, 237, 237, 0.63);
border: 1px solid #000000;
border-radius: 6px;
  }

  .submit-btn{
    box-sizing: border-box;

position: absolute;
width: 245.78px;
height: 56px;
left: 769.78px;
top: 396px;

background: #DE5A21;
border: 1px solid #F24E1E;
border-radius: 6px;
color:#fff;
  }
  `

