import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import Summary from "./Summary";
import User from "./User";

type Resume = {
	user: User;
	summaries: Summary[];
	experiences: Experience[];
	educations: Education[];
	skills: Skill[];
};

export default Resume;
