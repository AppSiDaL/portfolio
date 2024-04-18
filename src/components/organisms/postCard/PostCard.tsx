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
      <img src={avatar} alt="Avatar" className="postAvatar" />
      <Text h="h3" w="bold">
        {username}
      </Text>
      <Text h="h3" w="bold">
        {date}
      </Text>
      {content}
    </div>
  );
}
