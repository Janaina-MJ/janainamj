import { StyledCard } from './Cards.styled'
import { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md'

export const Card = ({ projectImgLogo, projectImgMobile, projectName, descriptionOfProject, deployUrl, githubRepo, technologyUsedOnProject, projectImgDesktop }) => {

    const childDivProjectImg = useRef(null);
    const projectOnDisplay = useRef(null);
    const specificCard = useRef(null);
    const unorderedTechList = useRef();

    const showProject = ()=> {
        childDivProjectImg.current.classList.add('project-img-display');
    }

    const removeProjectDisplay = ()=> {
        childDivProjectImg.current.classList.remove('project-img-display');
    }

    const closeProjectDetails = ()=> {
        projectOnDisplay.current.style.left = '-100%';
    }

    const [showDetails, setShowDetails] = useState([]);
    
    const technologyList = technologyUsedOnProject.map((technology, index) => {
        return (
            <li key={index}>
                <a href={technology[0]} target="blank">{technology[1]}</a>
            </li>
        )
    });

    const showProjectDetails = ()=> {
        setShowDetails([...showDetails, <div key={showDetails.length} className='blur-background' ref={projectOnDisplay} > 
                <div className='project-details' >
                    <MdClose className='closeButton' onClick={closeProjectDetails} />
                    <div className='project-container'>
                        <img className='project-cover' src={projectImgDesktop} alt="" />
                        <div className='project-info' >
                            <h6>{projectName} </h6>
                            <strong>Deploy:</strong> <a href={deployUrl} target='_blank' > check it out! </a> <br />
                            <strong>Github repository:</strong> <a href={githubRepo} target='_blank' > check the code here! </a> <br/ >
                        </div>
                    </div>
                    <p><em>{descriptionOfProject}</em></p>
                    <ul ref={unorderedTechList} className='mini-tech-stack'> 
                        {technologyList}
                    </ul>
                </div>
                
            </div>]);
    }

    return(
        <StyledCard ref={ specificCard } projectImgLogo={projectImgLogo} projectImgMobile={projectImgMobile} descriptionOfProject={descriptionOfProject} >
            <button className='project-link' onMouseEnter={ showProject } onMouseLeave={ removeProjectDisplay } onClick={ showProjectDetails } >
                <div ref={ childDivProjectImg } className='project-img'></div>
            </button>
            { showDetails }
            
        </StyledCard>
    )
}