import { Category } from "../resume-builder.tsx";
import UserForm from "../input-forms/user-form.tsx";
import SummaryForm from "../input-forms/summary-form.tsx";
import ExperienceForm from "../input-forms/experience-form.tsx";
import EducationForm from "../input-forms/education-form.tsx";
import SkillsForm from "../input-forms/skills-form.tsx";
import Resume from "../../models/Resume.tsx";
import User from "../../models/User.tsx";
import Summary from "../../models/Summary.tsx";
import Experience from "../../models/Experience.tsx";
import Education from "../../models/Education.tsx";
import Skill from "../../models/Skill.tsx";

interface InputFormProps {
	category: Category | null;
	resume: Resume;
	setResume: (resume: Resume) => void;
}

export default function InputForm({
	category,
	resume,
	setResume,
}: InputFormProps) {
	switch (category) {
		case Category.User:
			return (
				<UserForm
					userDetails={resume.user}
					setUserDetails={(newUser: User) =>
						setResume({ ...resume, user: newUser })
					}
				/>
			);
		case Category.Summary:
			return (
				<SummaryForm
					addSummary={(newSummary: Summary) =>
						setResume({
							...resume,
							summaries: [...resume.summaries, newSummary],
						})
					}
				/>
			);
		case Category.Experience:
			return (
				<ExperienceForm
					addExperience={(newExperience: Experience) =>
						setResume({
							...resume,
							experiences: [...resume.experiences, newExperience],
						})
					}
				/>
			);
		case Category.Education:
			return (
				<EducationForm
					addEducation={(newEducation: Education) =>
						setResume({
							...resume,
							educations: [...resume.educations, newEducation],
						})
					}
				/>
			);
		case Category.Skills:
			return (
				<SkillsForm
					addSkill={(newSkill: Skill) =>
						setResume({
							...resume,
							skills: [...resume.skills, newSkill],
						})
					}
				/>
			);
		default:
			return <div id="input-form"></div>;
	}
}
