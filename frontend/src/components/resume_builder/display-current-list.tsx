import { Category } from "../resume-builder";
import SummaryDisplay from "../display-lists/summary-display";
import ExperienceDisplay from "../display-lists/experience-display";
import EducationDisplay from "../display-lists/education-display";
import SkillsDisplay from "../display-lists/skills-display";
import Resume from "../../models/Resume";
import Summary from "../../models/Summary";
import Experience from "../../models/Experience";
import Education from "../../models/Education";
import Skill from "../../models/Skill";

interface DisplayCurrentListProps {
	category: Category | null;
	resume: Resume;
	setResume: (resume: Resume) => void;
}

export default function DisplayCurrentList({
	category,
	resume,
	setResume,
}: DisplayCurrentListProps) {
	switch (category) {
		case Category.User:
			return <div id="user-display" />;
		case Category.Summary:
			return (
				<SummaryDisplay
					summaries={resume.summaries}
					setSummaries={(newSummaries: Summary[]) =>
						setResume({ ...resume, summaries: newSummaries })
					}
				/>
			);
		case Category.Experience:
			return (
				<ExperienceDisplay
					experiences={resume.experiences}
					setExperiences={(newExperiences: Experience[]) =>
						setResume({ ...resume, experiences: newExperiences })
					}
				/>
			);
		case Category.Education:
			return (
				<EducationDisplay
					educations={resume.educations}
					setEducations={(newEducations: Education[]) =>
						setResume({ ...resume, educations: newEducations })
					}
				/>
			);
		case Category.Skills:
			return (
				<SkillsDisplay
					skills={resume.skills}
					setSkills={(newSkills: Skill[]) =>
						setResume({ ...resume, skills: newSkills })
					}
				/>
			);
		default:
			return <div id="display-current-list"></div>;
	}
}
