import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Eperience = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Eperience;
