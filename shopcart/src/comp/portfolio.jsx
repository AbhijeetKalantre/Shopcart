import {}  from 'react'
import './portfolio.css'
const Portfolio = () => {
  return (
    <>
    <div className='portfolio'>
        <div className='portfolio_banner'>
            <p>Home.Portfolio</p>
            <h3>Portfolio</h3>
        </div>
        <div className='portfolio_info'>
            <h3>our recent completed project</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
            <div className='projects'>
                <div className='box'>
                    <div className='img_box'>
                        <img src='image/projects-1.jpg' alt=''></img>
                    </div>
                    <div className='info'>
                        <h4>3D Design</h4>
                        <p>client project</p>   
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='image/projects-2.jpg' alt=''></img>
                    </div>
                    <div className='info'>
                        <h4>3D Design</h4>
                        <p>client project</p>   
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='image/projects-3.jpg' alt=''></img>
                    </div>
                    <div className='info'>
                        <h4>3D Design</h4>
                        <p>client project</p>   
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='image/projects-4.jpg' alt=''></img>
                    </div>
                    <div className='info'>
                        <h4>3D Design</h4>
                        <p>client project</p>   
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='image/projects-5.jpg' alt=''></img>
                    </div>
                    <div className='info'>
                        <h4>3D Design</h4>
                        <p>client project</p>   
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='image/projects-6.jpg' alt=''></img>
                    </div>
                    <div className='info'>
                        <h4>3D Design</h4>
                        <p>client project</p>   
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio