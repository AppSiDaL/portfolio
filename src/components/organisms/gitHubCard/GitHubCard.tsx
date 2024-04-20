import { IconUser, IconUsers } from "@tabler/icons-react";
import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";
import "./GitHubCard.css";
import GitData from "../../molecules/gitData/GitData";
export default function GitHubCard() {
  return (
    <div className="gitHubCard">
      <div className="userAvatar">
        <img
          src="https://avatars.githubusercontent.com/u/112730350?v=4"
          alt="Avatar"
          className="gitAvatar"
        />
      </div>
      <Text h="h3" w="bold">
        GILBERTO DAVALOS NAVA
      </Text>
      <Text w="normal">AppSiDaL</Text>
      <Button className="followButton">Follow</Button>
      <Text>
        You must not adapt to the system, the system must adapt to you.
      </Text>
      <IconUsers />
      76 Followers
      <IconUser />
      15 Following
      <GitData />
    </div>
  );
}
