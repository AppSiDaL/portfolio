import Text from "../../atoms/text/Text";
import "./IGHeader.css";
import { IconBell, IconCircleDashedCheck } from "@tabler/icons-react";

export default function IGHeader() {
  return (
    <div className="igHeader">
      <div className="igText">
        <Text h="h2" w="bold">
          davalosng
        </Text>
        <IconCircleDashedCheck className="verifiedIcon" size={20} />
      </div>
      <IconBell className="notiIcon" size={30} />
    </div>
  );
}
