import GitHubCard from "../../organisms/gitHubCard/GitHubCard";
import "./Posts.css";
import { educationData, expData, projectsData } from "../../../data";
import ExpCard from "../../organisms/expCard/ExpCard";
import ScrollIndicator from "../../molecules/scrollIndicator/ScrollIndicator";

export default function Posts() {
  return (
    <div>
      <ScrollIndicator />
      <div className="postsPage">
        <div className="details">
          <GitHubCard />
        </div>
        <div className="posts">
          <ExpCard education={educationData} exp={expData} projects={projectsData} />
        </div>
      </div>
    </div>
  );
}
