import { Link } from 'react-router-dom'
import './containerProjects.scss'
import CategoryAndBtnMore from './util/CategoryAndBtnMore'
import ProjectCard from './util/ProjectCard'
import { StyledCard } from './util/StyledCard'


const ContainerProjects = () => {
    const projectsToShow = 4;

    return (
        <div className='containerProjects' style={{
            direction: "rtl", paddingBottom: '30px',
        }}>
            <div className='aboutToEnd'>
                <Link to="/more/endingSoon"
                    state={{ LabelText: 'עומדים להסתיים' }}>
                    <CategoryAndBtnMore categoryName={'עומדים להסתיים'} />
                </Link>
                <div className='cards'>
                    <StyledCard>
                        <ProjectCard categoryFilter={'endingSoon'} projectsToShow={projectsToShow} />
                    </StyledCard>
                </div>
            </div>
            <div className='Popular'>
                <Link to="/more/popular"
                state={{ LabelText: 'פרויקטים פופולריים' }}>
                    <CategoryAndBtnMore categoryName={'פרויקטים פופולריים'} />
                </Link>
                <div className='cards'>
                    <StyledCard><ProjectCard categoryFilter={'popular'} projectsToShow={projectsToShow} /></StyledCard>
                </div>
            </div>
            <div className='new'>
                <Link to="/more/new"
                state={{ LabelText: 'פרויקטים חדשים' }}>
                    <CategoryAndBtnMore categoryName={'פרויקטים חדשים'} />
                </Link>
                <div className='cards'>
                    <StyledCard><ProjectCard categoryFilter={'new'} projectsToShow={projectsToShow} /></StyledCard>
                </div>
            </div>
            <div className='endedSuccessfully'>
                <Link to="/more/completed"
                state={{ LabelText: 'הסתיימו בהצלחה' }}>
                    <CategoryAndBtnMore categoryName={'הסתיימו בהצלחה'} />
                </Link>
                <div className='cards'>
                    <StyledCard><ProjectCard categoryFilter={'completed'} projectsToShow={projectsToShow} /></StyledCard>
                </div>
            </div>
        </div>
    )
}

export default ContainerProjects

