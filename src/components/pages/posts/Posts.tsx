import GitHubCard from "../../organisms/gitHubCard/GitHubCard";
import "./Posts.css";
import {
  aptitudesData,
  educationData,
  expData,
  projectsData,
} from "../../../data";
import ExpCard from "../../organisms/expCard/ExpCard";
import ScrollIndicator from "../../molecules/scrollIndicator/ScrollIndicator";
import { useEffect, useRef, useState } from "react";

export default function Posts() {
  const [currentSection, setCurrentSection] = useState("");
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const educaationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    if (educaationRef.current) {
      observer.observe(educaationRef.current);
    }
    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }

      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      if (educaationRef.current) {
        observer.unobserve(educaationRef.current);
      }
    };
  }, []);
  return (
    <div>
      <ScrollIndicator currentSection={currentSection} />
      <div className="postsPage">
        <div className="details">
          <GitHubCard />
        </div>
        <div className="posts">
          <ExpCard
            aptitudes={aptitudesData}
            education={educationData}
            exp={expData}
            projects={projectsData}
            educaationRef={educaationRef}
            expRef={expRef}
            projectsRef={projectsRef}
          />
        </div>
      </div>
    </div>
  );
}
