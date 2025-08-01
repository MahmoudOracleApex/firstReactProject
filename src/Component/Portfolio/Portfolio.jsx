import IconStar from '../IconStar/IconStar';
import './Portfolio.css'
import { useState } from 'react';



export default function Portfolio() {
    const [openModel,setOpenModel] = useState(false);
    let [imageOpen, setImageOpen] = useState(null);

    let changeImage=(img)=>{
      setImageOpen(img.url)
      console.log(imageOpen);
    }


  const images = Object.values(import.meta.glob('../../assets/images/*.{jpg,png,jpeg.svg}',{query:'?url' , import:'default' , eager:true}));
  console.log(images);

  const idImage = images.map((img)=>({id:crypto.randomUUID(),url:img}));
  console.log(idImage);
   

  return (
    <>
      <div className='portfolio position-relative' >
        <div className='container' >
          <div className="titlePortfolio text-center ">
            <h2 className='f-family text-uppercase h1'>portfolio component</h2>
               <IconStar/>
          </div>
       
          <div className='contentPortfolio'>
            <div className='row gy-3'>

             {idImage.map((img)=> <div className="col-lg-4 col-md-6" key = {img.id}>
                <div className="card" onClick={()=>{setOpenModel(true) ;changeImage(img)  }}>
                  <img src={img.url} alt=""/>
                  <div className="layout">
                    <i className="fa-solid fa-plus  iconPlus"></i>
                  </div>
                </div>
              </div>)}

              
              
              
            </div>

            
          </div>
           
        </div>
       {openModel?<div className='layer d-flex justify-content-center align-items-center' onClick={()=>setOpenModel(false)} >
              <img src={imageOpen} alt="" className='w-50' onClick={(e)=>e.stopPropagation()}/>
              </div> : ''}
      </div>
    

         

      
   
       
    
    </>
  )
}
