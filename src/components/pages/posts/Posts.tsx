import GitHubCard from "../../organisms/gitHubCard/GitHubCard";
import "./Posts.css";
import { data } from "../../../data";
import PostCard from "../../organisms/postCard/PostCard";
export default function Posts() {
  return (
    <div className="postsPage">
      <div className="details">
        <GitHubCard />
      </div>
      <div className="posts">
        {data.map((d) => (
          <PostCard
            avatar={d.avatar}
            content={d.content}
            date={d.date}
            username={d.username}
          />
        ))}
      </div>
    </div>
  );
}
