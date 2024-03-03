import './containerProjects.scss'
import CategoryAndBtnMore from './util/CategoryAndBtnMore'
import { Card, Divider } from '@mui/material'
import ProjectCard from './util/ProjectCard'
import { StyledCard } from './util/StyledCard'


const ContainerProjects = () => {
  return (
    <div className='containerProjects' style={{direction:"rtl", paddingBottom: '30px',
}}>
        <div className='aboutToEnd'>
            <CategoryAndBtnMore categoryName={'עומדים להסתיים'} />
            <Divider />
            <div className='cards'>
            <StyledCard><ProjectCard /></StyledCard> 
            </div>
        </div>
        <div className='Popular'>
        <CategoryAndBtnMore categoryName={'פרויקטים פופולריים'} />
        <Divider />
            <div className='cards'>
            <StyledCard><ProjectCard /></StyledCard>  
            </div>
        </div>
        <div className='new'>
        <CategoryAndBtnMore categoryName={'פרויקטים חדשים'} />
        <Divider />
            <div className='cards'>
            <StyledCard><ProjectCard /></StyledCard>
            </div>
        </div>
        <div className='endedSuccessfully'>
        <CategoryAndBtnMore categoryName={'הסתיימו בהצלחה'} />
        <Divider />
            <div className='cards'>
            <StyledCard><ProjectCard /></StyledCard>
            </div>
        </div>
    </div>
  )
}

export default ContainerProjects