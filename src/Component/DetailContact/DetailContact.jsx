import './DetailContact.css'
export default function DetailContact() {
  return (
    <>
        <div className="DetailContact">
            <div className="container">
                <div className="row gy-5">
                <div className="col-lg-4 col-md-6">
                        <div className="location">
                            <h3 className='text-uppercase'>location</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="web">
                            <h3 className='text-uppercase'>around the web</h3>
                            <div className="social w-50 m-auto pt-2 d-flex justify-content-between">
                                <i className="fa-brands fa-facebook-f iconSocial"></i>
                                <i className="fa-brands fa-twitter iconSocial"></i>
                                <i className="fa-brands fa-linkedin-in iconSocial"></i>
                                <i className="fa-solid fa-globe iconSocial"></i>

                            </div>
                        </div>
                    </div>  

                    <div className="col-lg-4 col-md-6">
                        <div className="freelancer">
                            <h3 className='text-uppercase'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, open source Bootstrap theme created by <span>Route</span></p>

                        </div>
                    </div>                    
                    
                    
               
            </div>
            </div>
        </div>
    </>
)
}
