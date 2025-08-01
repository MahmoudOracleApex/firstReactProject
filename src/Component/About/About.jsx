import'./About.css'
import IconStar from '../IconStar/IconStar'
export default function About() {
  return (
    <>
    <div className='About bgColor f-family text-white'>
      <div className='container'>
        <div className='titleAbout text-uppercase '>
        <h2 className='fw-bold'> about component</h2>
        <IconStar/>
      </div>
      
      <div className='row'>
        <div className='col-md-6'>
          <div className='pargraph text-start'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='pargraph text-start'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
        
      </div>
      </div>
    </div>
    </>
  )
}
