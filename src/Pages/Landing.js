import React from 'react'
import styled from 'styled-components'

export default function Landing() {
  return (
   <Wrapper>

        <div> <h1 className='heading'>Github Profile</h1></div>
            <h3 className='sub-heading'>Generate your Github Profile</h3>
            <form action="">
                <input type="text" className='form' placeholder='Github Username'/>
                <div className='submit'>
                    <div className="center">

                <p className='submit-text'>Generate</p>
                    </div>
              
                </div>
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

  .submit{
    
      position: absolute;
    
    text-align: center;
    width: 245.78px;
    height: 56px;
    left: 769.78px;
    top: 396px;

background: #DE5A21;
border: 1px solid #F24E1E;
border-radius: 6px;
  }

  .submit-text{
   
padding: 16px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;

color: #FFFFFF;


  }
  `

