import React, { FC } from 'react'
import { StyledCard } from './StyledCard'
import ProjectCard from './ProjectCard'
import { useLocation, useParams } from 'react-router-dom';
import './scss/moreProjects.scss';


const MoreProjects = () => {
    const projectsToShow = 40;

    const location = useLocation();
    const labelText = (location.state as any)?.LabelText || '';
    const {categoryName} = useParams<{categoryName:"endingSoon" | "popular" | "new" | "completed"}>();
    
    return (
        <div className='MoreProjects' style={{ margin: 'auto', maxWidth: '1024px' }}>
            <div>
            <h1>{labelText}</h1>
            </div>
            <div className='cards'>
                <StyledCard><ProjectCard categoryFilter={categoryName} projectsToShow={projectsToShow} /></StyledCard>
            </div>
        </div>
    )
}

export default MoreProjects