import { useEffect, useState } from "react";
import TopProjectDiv from "./TopProjectDiv";
import { project1, project2, project3, project4 } from "./projects";
import "./topProjectsStyle.scss";
import { getLast4projects } from "../../API/Projects/projectClientCtrl";


const TopProjects = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    showSlides(slideIndex);
    let i = 0;
    const timer = setInterval(() => {
      console.log("hi");
      currentSlide(i);
      i++;
    }, 9000);
    return () => clearInterval(timer);
  }, [loading]);

  async function getProject() {
    const { latestProjects } = await getLast4projects();
    console.log(latestProjects);
    setProjects(latestProjects);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    getProject();
  }, []);

  const plusSlides = (n: number) => {
    // setSlideIndex((prev) => prev + n);
    showSlides(slideIndex + n);
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
    showSlides(n);
  };

  const showSlides = (n: number) => {
    let newIndex = n;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (slides && slides.length > 1) {
      if (n > slides.length) {
        newIndex = 1;
      }
      if (n < 1) {
        newIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        (dots[i] as HTMLElement).className = (
          dots[i] as HTMLElement
        ).className.replace(" active", "");
      }
      (slides[newIndex - 1] as HTMLElement).style.display = "flex";
      (dots[newIndex - 1] as HTMLElement).className += "active";

      setSlideIndex(newIndex);
    }
  };

  return (
    <>
      {loading ? (
        <div className="loadingDiv">
          <img src="/image/Ellipsis-3.8s-203px.gif" alt="loading..." />
        </div>
      ) : (
        <div className="slideshow-container">
          {projects.map((project)=>{
            return <TopProjectDiv projectInfo={project}/>
          })}
          <TopProjectDiv projectInfo={projects[0]}/>
          <TopProjectDiv projectInfo={projects[0]}/>
          <TopProjectDiv projectInfo={projects[0]}/>
          <div className="btnPrevNext">
            <a className="prev" onClick={() => plusSlides(-1)}>
              &#10094;
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            {/* <span className="dot" onClick={() => currentSlide(4)}></span>
            <span className="dot" onClick={() => currentSlide(5)}></span> */}
          </div>
        </div>
      )}

    </>
  );
};

export default TopProjects;
