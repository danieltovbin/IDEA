import { useEffect, useState } from "react";
import TopProjectDiv from "./TopProjectDiv";
import { project1, project2, project3, project4 } from "./projects";
import "./topProjectsStyle.scss";
import ContainerProjects from "./ContainerProjects";

const TopProjects = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
    let i = 0;
    const timer = setInterval(() => {
      console.log("hi");
      currentSlide(i);
      i++;
    }, 9000);
    return () => clearInterval(timer);
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
    (dots[newIndex - 1] as HTMLElement).className += " active";

    setSlideIndex(newIndex);
  };

  return (
    <>
    <div className="slideshow-container">
      <TopProjectDiv projectInfo={project1} />
      <TopProjectDiv projectInfo={project2} />
      <TopProjectDiv projectInfo={project3} />
      <TopProjectDiv projectInfo={project4} />
      <TopProjectDiv projectInfo={project4} />
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
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
      </div>
    </div>
    <ContainerProjects/>
    </>
  );
};

export default TopProjects;
