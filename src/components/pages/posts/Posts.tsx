import GitHubCard from "../../organisms/gitHubCard/GitHubCard";
import "./Posts.css";
import { expData } from "../../../data";
import ExpCard from "../../organisms/expCard/ExpCard";
import DescriptionCard from "../../molecules/descriptionCard/DescriptionCard";

export default function Posts() {
  return (
    <div className="postsPage">
      <div className="details">
        <DescriptionCard />
        <GitHubCard />
      </div>
      <div className="posts">
        <ExpCard exp={expData} />
      </div>
    </div>
  );
}
