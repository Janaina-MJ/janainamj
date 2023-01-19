import { StyledProjects } from './Portfolio.styled'


export function Projects() {

    return(
        <StyledProjects>
            <div className='featured-project'>
                <div className='project-view'>
                    <img src="" alt="" />
                    <h4>Got a Plan - Travel Planner App</h4>
                    <div className='featured-project-img'></div>
                    <p>Are you planning a trip for the next year but unsure if you'll be able to do all the activities you want because of unpredictable weather? With Got a Plan, you can get the most accurate weather forecast for your upcoming trip, <strong>whether you're leaving in a week or months ahead</strong>. If the trip is within a week, you will receive the current weather forecast. If the trip is further out, you will receive a predicted forecast, so you can choose the best date for your trip, event, day out, etc. </p>
                    <p>Got a Plan is a SPA (Single Page Application), developed using several tools and packages. It also has a Jest testing unit and the functionalities were built modularly allowing for better maintenance.</p>
                    <strong>Deploy:</strong> <a href="https://gotaplan.onrender.com" target='blank' > check it out! </a> <br />
                    <strong>Github repository:</strong> <a href="https://github.com/Janaina-MJ/FEND-Capstone-travel-app.git" target='blank' > check the code here! </a> <br/ >
                    <ul className='tech-stack'>
                        <li><a href="">HTML</a></li>
                        <li><a href="">CSS</a></li>
                        <li><a href="">JavaScript</a></li>
                        <li><a href="">Node.js</a></li>
                        <li><a href="">Express.js</a></li>
                        <li><a href="">Webpack</a></li>
                        <li><a href="">Saas</a></li>
                    </ul>
                </div>
                <div className='mobile-container'>
                    <div className='mobile-view-holder'>
                        <div className='mobile-picture'>
                            <iframe className='mobile-screen' src="https://gotaplan.onrender.com" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
           
           
            
        </StyledProjects>
    )
}