import { exp, project } from "../../../types";
import Text from "../../atoms/text/Text";
import "./ExpCard.css";
import { differenceInDays } from "date-fns";
import { useEffect, useRef, useState } from "react";

interface PostCardProps {
  exp: exp[];
  projects: project[];
  education: exp[];
}

export default function ExpCard({ exp, projects,education }: PostCardProps) {
  const [currentSection, setCurrentSection] = useState("");
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const educaationRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }

      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  console.log(currentSection);
  return (
    <div>
      {exp.map((e) => (
        <div id="experience" className="expCard" ref={expRef}>
          <div className="jobData">
            <img src={e.logo} alt="Avatar" className="postAvatar" />
            <div className="jobDetails">
              <Text h="h3" w="normal" className="jobName">
                {e.name}
              </Text>
              <Text className="enterprise" w="normal">
                {e.enterprise}-{e.journey}
              </Text>
              <Text className="date" w="normal">
                {e.startDate}-{e.endDate} (
                {differenceInDays(
                  e.endDate == "Actual" ? new Date() : new Date(e.endDate),
                  new Date(e.startDate)
                )}{" "}
                days)
              </Text>
              <Text className="location" w="normal">
                {e.location} {e.modality}
              </Text>
              <Text className="description" w="normal">
                {e.description}
              </Text>
            </div>
            <div className="aptitudes">
              {e.aptitudes.map((a) => (
                <p key={a} className="aptitude">
                  {a}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
      {projects.map((p) => (
        <div id="projects" className="expCard" ref={projectsRef}>
          <div className="jobData">
            <img src={p.logo} alt="Avatar" className="postAvatar" />
            <div className="jobDetails">
              <Text h="h3" w="normal" className="jobName">
                {p.name}
              </Text>
              <Text className="enterprise" w="normal">
                {p.enterprise}-{p.journey}
              </Text>
              <Text className="date" w="normal">
                {p.startDate}-{p.endDate} (
                {differenceInDays(
                  p.endDate == "Actual" ? new Date() : new Date(p.endDate),
                  new Date(p.startDate)
                )}{" "}
                days)
              </Text>
              <Text className="location" w="normal">
                {p.location} {p.modality}
              </Text>
              <Text className="description" w="normal">
                {p.description}
              </Text>
            </div>
            <div className="aptitudes">
              {p.aptitudes.map((a) => (
                <p key={a} className="aptitude">
                  {a}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
      {education.map((p) => (
        <div id="education" className="expCard" ref={educaationRef}>
          <div className="jobData">
            <img src={p.logo} alt="Avatar" className="postAvatar" />
            <div className="jobDetails">
              <Text h="h3" w="normal" className="jobName">
                {p.name}
              </Text>
              <Text className="enterprise" w="normal">
                {p.enterprise}-{p.journey}
              </Text>
              <Text className="date" w="normal">
                {p.startDate}-{p.endDate} (
                {differenceInDays(
                  p.endDate == "Actual" ? new Date() : new Date(p.endDate),
                  new Date(p.startDate)
                )}{" "}
                days)
              </Text>
              <Text className="location" w="normal">
                {p.location} {p.modality}
              </Text>
              <Text className="description" w="normal">
                {p.description}
              </Text>
            </div>
            <div className="aptitudes">
              {p.aptitudes.map((a) => (
                <p key={a} className="aptitude">
                  {a}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
