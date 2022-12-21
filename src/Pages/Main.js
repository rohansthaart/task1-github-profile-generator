import React from 'react'
import styled from 'styled-components'
import back from '../assets/image/back.svg'
export default function Main() {
  return (
    <Wrapper>
<img src={back} className='back-btn'/>
<button className="btn">Hire Me</button>
<div className="main-box">
    <h1 className='git-name'>Rohan Shrestha</h1>
    <h1 className='git-login'>@john_doe</h1>
    <div className="left">fd</div>
<div className="right">fd</div>
</div>
<img src="https://avatars.githubusercontent.com/u/64144604?v=4" alt="" className="profile" />

    </Wrapper>
  )
}


const Wrapper = styled.main`

.back-btn{
    position: absolute;
left: 102px;
right: 90.56%;
top: 8.22%;
bottom: 88.83%;


}

    .btn {
    background-color:#F24E1E !important;
    box-sizing: border-box;

    position: absolute;
    width: 204px;
    height: 46.48px;
    left: 1139px;
    top: 85.76px;

    background: #F24E1E;
    border: 1px solid #F24E1E;
    border-radius: 6px;
    color:#fff;
}
.main-box{
    box-sizing: border-box;

position: absolute;
width: 1238px;
height: 686px;
left: 102px;
top: 204px;

background: #FFFFFF;
border: 1px solid #000000;
border-radius: 8px;
}
.profile{
    position: absolute;
left: 35.14%;
top: 12.93%;
bottom: 72.45%;
width: 144px;
border-radius: 50%;
}
.git-name{
    position: fixed;

left: 645px;
top: 319px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 42px;
}
.git-login{
    position: fixed;
   
left: 662px;
top: 363px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
}

`
