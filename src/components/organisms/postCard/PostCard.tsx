import Text from "../../atoms/text/Text";
import "./PostCard.css";
interface PostCardProps {
  avatar: string;
  username: string;
  date: string;
  content: React.ReactNode;
}
export default function PostCard({
  avatar,
  username,
  date,
  content,
}: PostCardProps) {
  return (
    <div className="postCard">
      <div className="userData">
        <img
          src={avatar}
          alt="Avatar"
          className="postAvatar"
        />
        <div>
          <Text h="h3" w="normal">
            {username}
          </Text>
          <Text className="date" w="normal">
            {date}
          </Text>
        </div>
      </div>
      {content}
    </div>
  );
}
