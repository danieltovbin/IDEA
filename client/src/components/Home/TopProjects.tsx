import { useEffect, useState } from "react";
import TopProjectDiv from "./TopProjectDiv";
import "./topProjectsStyle.scss";
import { getLast4projects } from "../../API/Projects/projectClientCtrl";

const TopProjects = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [projects]);

  async function getProject() {
    const { latestProjects } = await getLast4projects();
    setProjects(latestProjects);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    getProject();
  }, []);

  const plusSlides = (n: number) => {
    setSlideIndex(
      (prevIndex) => (prevIndex + n + projects.length) % projects.length
    );
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n);
  };

  return (
    <>
      {loading ? (
        <div className="loadingDiv">
          <img src="/image/Ellipsis-3.8s-203px.gif" alt="loading..." />
        </div>
      ) : (
        <div className="slideshow-container">
          <TopProjectDiv projectInfo={projects[slideIndex]} />
          <div className="btnPrevNext">
            <a className="prev" onClick={() => plusSlides(-1)}>
              &#10094;
            </a>
            <a className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            {projects.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === slideIndex ? "active" : ""}`}
                onClick={() => currentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TopProjects;
