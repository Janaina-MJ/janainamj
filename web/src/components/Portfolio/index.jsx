import { StyledProjects } from './Portfolio.styled'
import { Card } from '../Cards'
import goTravelLogo from '../../assets/goTravelLogo.jpeg'
import goTravel from '../../assets/goTravel.jpeg'
import goTravelDesktop from '../../assets/goTravelDesktop.jpeg'
import attendanceRegister from '../../assets/attendanceRegister.jpeg'
import attendanceRegisterLogo from '../../assets/attendanceRegisterLogo.jpeg'
import attendanceRegisterDesktop from '../../assets/attendanceRegisterDesktop.jpeg'
import gotaplanProject from '../../assets/gotaplanProject.jpeg'
import gotaplanLogo from '../../assets/gotaplanLogo.jpeg'
import gotaplanDesktop from '../../assets/gotaplanDesktop.jpeg'
import comingSoonLogo from '../../assets/comingSoonLogo.jpeg'
import comingSoon from '../../assets/comingSoon.jpeg'
import comingSoonDesktop from '../../assets/comingSoonDesktop.jpeg'


export function Projects() {

    return(
        <StyledProjects>
            <div className='featured-project'>
                <div className='project-view'>
                    <div className='featured-project-img'>
                        <h5>GOT A PLAN - Travel Planner Web App</h5>
                    </div>
                    <p>Got a Plan is a SPA (Single Page Application) designed to assist users in planning trips by providing accurate weather forecasts. The application caters to both short-term and long-term trip planning needs, offering current weather forecasts for trips within a week and predicted forecasts for those scheduled further in advance. This feature allows users to make informed decisions and select the optimal date for their trips, events, or outings.</p>
                    <p>Developed by me using several tools and packages, this project also has a Jest testing unit and the functionalities were built modularly allowing for better maintenance.</p>
                    <strong>Deploy:</strong> <a href="https://gotaplan.onrender.com" target='_blank' > check it out! </a> <br />
                    <strong>Github repository:</strong> <a href="https://github.com/Janaina-MJ/FEND-Capstone-travel-app.git" target='_blank' > check the code here! </a> <br/ >
                    <ul className='tech-stack'>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='blank' >HTML</a></li>
                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='blank'>JavaScript</a></li>
                        <li><a href="https://nodejs.org/en/" target='blank'>Node.js</a></li>
                        <li><a href="https://expressjs.com" target='blank'>Express.js</a></li>
                        <li><a href="https://webpack.js.org" target='blank'>Webpack</a></li>
                        <li><a href="https://sass-lang.com" target='blank'>Sass</a></li>
                        <li><a href="https://jestjs.io" target='blank'>Jest Testing</a></li>
                        <li><a href="https://babeljs.io" target='blank'>Babel</a></li>
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

            <p className='projects-briefing'>Explore my portfolio of projects</p>
           
            <div className='projects-portfolio'>
                <Card 
                    projectName={ 'Go Travel - travel blog'}
                    descriptionOfProject={'This is an example of a responsive Personal blog - theme: Travel, which contains three pages (Homepage, blog Post and About Me page).'} 
                    deployUrl={'https://personal-blog-iota-wine.vercel.app'}
                    githubRepo={'https://github.com/Janaina-MJ/personal-blog.git'}
                    technologyUsedOnProject={[['https://developer.mozilla.org/en-US/docs/Web/HTML', 'HTML'], ['https://developer.mozilla.org/en-US/docs/Web/CSS', 'CSS']]}
                    projectImgDesktop = {goTravelDesktop}
                    projectImgLogo={ goTravelLogo } 
                    projectImgMobile={ goTravel } >

                </Card>
                    

                <Card 
                    projectName={ 'Got a Plan - travel planner'}
                    descriptionOfProject={"This is a travel planner web app that allows users to plan their trips based on predicted weather forecasts, whether they’re leaving in a week or months ahead. It was developed using several tools and packages and has a Jest testing unit. The functionalities were built modularly allowing for better maintenance."} 
                    deployUrl={'https://gotaplan.onrender.com'}
                    githubRepo={'https://github.com/Janaina-MJ/FEND-Capstone-travel-app.git'}
                    technologyUsedOnProject={[['https://developer.mozilla.org/en-US/docs/Web/HTML', 'HTML'], ['https://sass-lang.com', 'Sass'], ['https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'Javascript'], ['https://developer.mozilla.org/https://nodejs.org/en/', 'Node.js'], ['https://expressjs.com', 'Express.js'], ['https://webpack.js.org', 'Webpack'], ['https://jestjs.io', 'Jest Testing'], ['https://babeljs.io', 'Babel']]}
                    projectImgDesktop = {gotaplanDesktop}
                    projectImgLogo ={ gotaplanLogo } 
                    projectImgMobile={ gotaplanProject } >

                </Card>

                <Card 
                    projectName={ 'Attendance Register ⚠️ under development'}
                    descriptionOfProject={'This is an Attendance Register tool. It is still under development to create a page with a form in which the information will be stored in a database to be used to feed the information on the main page. The project is being made to improve my skills with css, JavaScript, React.js and database.'} 
                    deployUrl={'https://attendance-register.vercel.app'}
                    githubRepo={'https://github.com/Janaina-MJ/attendance-register.git'}
                    technologyUsedOnProject={[['https://axios-http.com/docs/intro', 'Axios'], ['https://www.prisma.io', 'Prisma'], ['https://developer.mozilla.org/https://nodejs.org/en/', 'Node.js'], ['https://expressjs.com', 'Express.js'],['https://vuejs.org', 'Vue.js'], ['https://reactjs.org', 'React.js'], ['https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'Javascript'], ['https://developer.mozilla.org/en-US/docs/Web/HTML', 'HTML'], ['https://developer.mozilla.org/en-US/docs/Web/CSS', 'CSS']]}
                    projectImgDesktop = {attendanceRegisterDesktop}
                    projectImgLogo={ attendanceRegisterLogo } 
                    projectImgMobile={ attendanceRegister } >

                </Card>

                <Card 
                    projectName={ 'New project coming soon!'}
                    descriptionOfProject={'Stay tuned for a new project that is on its way and will be available soon.'} 
                    deployUrl={'#'}
                    githubRepo={'#'}
                    technologyUsedOnProject={[['#', 'tech stack'], ['#', 'tech stack'], ['#', 'tech stack']]}
                    projectImgDesktop = {comingSoonDesktop}
                    projectImgLogo={ comingSoonLogo } 
                    projectImgMobile={ comingSoon } >

                </Card>

                <Card 
                    projectName={ 'New project coming soon!'}
                    descriptionOfProject={'Stay tuned for a new project that is on its way and will be available soon.'} 
                    deployUrl={'#'}
                    githubRepo={'#'}
                    technologyUsedOnProject={[['#', 'tech stack'], ['#', 'tech stack'], ['#', 'tech stack']]}
                    projectImgDesktop = {comingSoonDesktop}
                    projectImgLogo={ comingSoonLogo } 
                    projectImgMobile={ comingSoon } >

                </Card>

                <Card 
                    projectName={ 'New project coming soon!'}
                    descriptionOfProject={'Stay tuned for a new project that is on its way and will be available soon.'} 
                    deployUrl={'#'}
                    githubRepo={'#'}
                    technologyUsedOnProject={[['#', 'tech stack'], ['#', 'tech stack'], ['#', 'tech stack']]}
                    projectImgDesktop = {comingSoonDesktop}
                    projectImgLogo={ comingSoonLogo } 
                    projectImgMobile={ comingSoon } >

                </Card>
            </div>
            
        </StyledProjects>
    )
}
