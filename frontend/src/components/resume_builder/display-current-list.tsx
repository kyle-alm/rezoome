import { Category } from "../resume-builder";
import UserDisplay from "../display-lists/user-display";
import MainDisplay from "../display-lists/main-display";
import ExperienceDisplay from "../display-lists/experience-display";
import EducationDisplay from "../display-lists/education-display";
import ProjectsDisplay from "../display-lists/projects-disaplay";
import SkillsDisplay from "../display-lists/skills-display";
import InterestsDisplay from "../display-lists/interests-display";
import AwardsDisplay from "../display-lists/awards-display";
import LanguagesDisplay from "../display-lists/languages-display";
import CertificationsDisplay from "../display-lists/certifications-display";
import ReferencesDisplay from "../display-lists/references-display";

interface DisplayCurrentListProps {
	category: Category | null;
}

export default function DisplayCurrentList({
	category,
}: DisplayCurrentListProps) {
	switch (category) {
		case Category.User:
			return <UserDisplay />;
		case Category.Main:
			return <MainDisplay />;
		case Category.Experience:
			return <ExperienceDisplay />;
		case Category.Education:
			return <EducationDisplay />;
		case Category.Projects:
			return <ProjectsDisplay />;
		case Category.Skills:
			return <SkillsDisplay />;
		case Category.Interests:
			return <InterestsDisplay />;
		case Category.Awards:
			return <AwardsDisplay />;
		case Category.Languages:
			return <LanguagesDisplay />;
		case Category.Certifications:
			return <CertificationsDisplay />;
		case Category.References:
			return <ReferencesDisplay />;
		default:
			return <div id="display-current-list"></div>;
	}
}
