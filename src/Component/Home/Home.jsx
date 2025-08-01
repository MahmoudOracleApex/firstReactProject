import avataaars from '../../assets/avataaars.svg'
import './Home.css'
import IconStar from '../IconStar/IconStar'

export default function Home() {
  console.log(avataaars)
  return (
    <>
    <div className='home bgColor f-family'>
        <div className=' w-25 m-auto'>
        <img src={avataaars} className='w-75' alt="" />
      </div>
      <div className='text-white pt-3' >
        <h1>START FRAMEWORK</h1>
      </div>
        <div className='text-white pb-3' >
         <IconStar/>
           <p >Graphic Artist - Web Designer - Illustrator</p>
    </div>

    </div>
    
    
    </>
  )
}
