import './Contact.css'
import IconStar from '../IconStar/IconStar'
import { useState } from 'react'


export default function Contact() {

  const[isActive , setIsActive] = useState(false); 
  const [value, setValue] = useState('');

  const handleFocus = () => setIsActive(true);
  const handleBlur = ()=>{value == ''? setIsActive(false) : ''};
  return (<>
            <div className='contact ' >
                    <div className='container' >
                      <div className="titleContact text-center ">
                        <h2 className='f-family text-uppercase h1'>contact section</h2>
                           <IconStar/>
                      </div>

                    <div className='form w-50 mx-auto mt-5'>
                      <div className="mb-5 input-group">
                       
                        <input type="text" className="form-control" id="userName" placeholder="userName" onClick={(e)=>setValue(e.target.value)}  onFocus={handleFocus}
        onBlur={handleBlur} />
                         <label htmlFor="userName" className={isActive ? 'active' : ''}>userName :</label>
                      </div>

                      <div className="mb-5 input-group">
                       
                        <input type="text" className="form-control" id="userAge" placeholder="userAge"  onClick={(e)=>setValue(e.target.value)} onFocus={handleFocus}
        onBlur={handleBlur}/>
                         <label htmlFor="userAge" className={isActive ? 'active' : ''}>userAge :</label>
                      </div>

                      <div className="mb-5 input-group">
                        
                        <input type="email" className="form-control" id="userEmail" placeholder="userEmail" onClick={(e)=>setValue(e.target.value)} onFocus={handleFocus}
        onBlur={handleBlur} />
                        <label htmlFor="userEmail" className={isActive ? 'active' : ''}>userEmail :</label>
                      </div>

                      <div className="mb-5 input-group">
                       
                        <input type="password" className="form-control" id="userPassword" placeholder="userPassword"  onClick={(e)=>setValue(e.target.value)} onFocus={handleFocus}
        onBlur={handleBlur}/>
                         <label htmlFor="userPassword" className={isActive ? 'active' : ''}>userPassword :</label>
                      </div>

                     <button className='btn btn-success'> send Message</button>
                      
                    </div>





                    </div>
            </div>
          </>
  )
}
