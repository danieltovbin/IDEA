import { useEffect, useState } from 'react';
import './scss/projectCard.scss'
import { he, fakerHE } from '@faker-js/faker';
import { allprojects } from '../../../API/Projects/projectClientCtrl';
// const randomName = fakerHE.person.fullName(); // Rowan Nikolaus
// const randomImage = fakerHE.image.urlLoremFlickr({ category: 'nature' })
// const randomAvatar = fakerHE.image.avatar()

const ProjectCard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  const par = projects.length > 0 ? parseInt(((projects[0].raised / projects[0].aid) * 100).toString()) : 20;
  console.log(par);
  const allProjects = async () => {
    try {
      const { allProjects } = await allprojects();
      console.log('allProjects from ProjectCard',allProjects);
      setProjects(allProjects)

    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
   
    allProjects();
  }, []);

  return (
    <div>
      {projects && projects.map((project)=>(
        <div key={project._id}>
         
          <div
      style={{
        height: 'auto',
        color: 'rgb(66, 66, 66)',
        border: '1px solid rgb(220, 224, 225)',
        borderRadius: '3px',
        overflow: 'hidden',
        position: 'relative',
        lineHeight: '21px',
        minWidth: '242px',
        width: '242px',
        backgroundColor: 'rgb(255, 255, 255)',
        margin: '0px',
        cursor: 'pointer',
        fontFamily: 'Open Sans Hebrew, sans-serif',
        whiteSpace: 'pre-line',
        overflowWrap: 'break-word'

      }}
    >
      <div style={{ overflow: 'hidden', height: '133px' }}>
        <img
          className="card-image"
          width="100%"
          height="133px"
          src={project.images[0]}
          // src={fakerHE.image.urlLoremFlickr({ category: 'nature' })}
        />
      </div>
      <div>
        <p></p>
      </div>
      <div
        style={{
          fontSize: '16px',
          maxHeight: '48px',
          minHeight: '22px',
          fontWeight: 'bold',
          padding: '10px 15px 0px'
        }}
      >
        משקמים את משק דרייר
      </div>
      <div
        style={{
          width: 'calc(100% - 16px)',
          padding: '8px 16px 0px',
          display: "flex",
          alignItems: 'center'
        }}
      >
        <div className='btn-avatar'>
          <button
            type="button"
            disabled
          >
            <span>
              <img
                width="24px"
                height="24px"
                style={{ borderRadius: '50%' }}
                src={fakerHE.image.avatar()}
              />
            </span>
          </button>
        </div>
        <div>
          <div style={{ fontWeight: 'normal', padding: '0px 5px', fontSize: '13px', lineHeight: '17px' }}>
            {project.ownerInfo?.ownerName || 'Unknown Owner'}
            {/* {fakerHE.person.fullName()} */}
          </div>
        </div>
      </div>
      <div
        className='containerCardProject'
      >
        אנחנו מזמינים אתכם לקחת חלק ולתמוך בכרם בוטיק אשר ניזון מחומרים אורגנים וללא ריסוסים.
        אנו מייצרים יין טבעי כפי שאבותינו עשו לפנינו.
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)', bottom: '6px', position: 'absolute', height: '17px', left: ' 0px', right: '0px'
          }}
        ></div>
      </div>
      <div style={{ paddingBottom: '16px', paddingTop: '16px' }}>
        <div>
          <div className="progressBar">
            
            <div
              className={
                parseInt(((project.raised / project.aid) * 100).toString()) < 99 ? "progress" : "progress projectCompleted"
              }
              style={{ width: `${parseInt(((project.raised / project.aid) * 100).toString())}%` }}
            ></div>
            <p
              className={
                parseInt(((project.raised / project.aid) * 100).toString()) < 99 ? "percentP" : "percentP percentPCompleted"
              }
              style={{
                position: "relative",
                top: "calc(-100% - 20px )",
                right: `calc(${parseInt(((project.raised / project.aid) * 100).toString())}%  - 20px)`,
              }}
            >
              {parseInt(((project.raised / project.aid) * 100).toString())}%
            </p>
          </div>
          <div
            style={{ margin: '0px calc(48% - 25px)' }}
          >
            <span>48%</span>
          </div>
          <div role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100}>
            <div style={{ transform: 'translateX(52%)' }}></div>
          </div>
        </div>
        <div style={{ display: "flex", padding: '8px 16px 0', justifyContent: 'space-between' }}>
          <div className='number'>
            <p>
              <span>₪</span>9,520
            </p>
            <p>מתוך <span>₪</span>20,000</p>
          </div>
          <div className='number'>
            <p>2</p>
            <p>ימים נותרו</p>
          </div>
          <div className='number'>
            <p>32</p>
            <p>תומכים.ות</p>
          </div>
        </div>
      </div>
    </div>
        </div>
      ))}
    </div>
    
  )
}

export default ProjectCard