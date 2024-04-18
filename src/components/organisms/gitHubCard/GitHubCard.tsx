import Text from "../../atoms/text/Text";
import "./GitHubCard.css";
export default function GitHubCard() {
  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/112730350?v=4"
        alt="Avatar"
        className="gitAvatar"
      />
      <Text h="h3" w="bold">
        GILBERTO DAVALOS NAVA
      </Text>
    </div>
  );
}
