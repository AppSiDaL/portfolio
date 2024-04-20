import { exp } from "../../../types";
import Text from "../../atoms/text/Text";
import "./ExpCard.css";
import { differenceInDays } from "date-fns";
interface PostCardProps {
  exp: exp[];
}
export default function ExpCard({ exp }: PostCardProps) {
  return (
    <div>
      {exp.map((e) => (
        <div className="expCard">
          <div className="jobData">
            <img src={e.logo} alt="Avatar" className="postAvatar" />
            <div className="jobDetails">
              <Text h="h3" w="normal">
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
            </div>
            <div className="aptitudes">
              {e.aptitudes.map((a) => (
                <Text key={a} w="normal">
                  {a}
                </Text>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
