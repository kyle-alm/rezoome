import { Category } from "../resume-builder.tsx";
import UserForm from "../input-forms/user-form.tsx";
import MainForm from "../input-forms/main-from.tsx";
import ExperienceForm from "../input-forms/experience-form.tsx";
import EducationForm from "../input-forms/education-form.tsx";
import ProjectsForm from "../input-forms/projects-form.tsx";
import SkillsForm from "../input-forms/skills-form.tsx";
import InterestsForm from "../input-forms/interests-form.tsx";
import AwardsForm from "../input-forms/awards-form.tsx";
import LanguagesForm from "../input-forms/languages-form.tsx";
import CertificationsForm from "../input-forms/certifications-form.tsx";
import ReferencesForm from "../input-forms/references-form.tsx";

interface InputFormProps {
	category: Category | null;
}

export default function InputForm({ category }: InputFormProps) {
	switch (category) {
		case Category.User:
			return <UserForm />;
		case Category.Main:
			return <MainForm />;
		case Category.Experience:
			return <ExperienceForm />;
		case Category.Education:
			return <EducationForm />;
		case Category.Projects:
			return <ProjectsForm />;
		case Category.Skills:
			return <SkillsForm />;
		case Category.Interests:
			return <InterestsForm />;
		case Category.Awards:
			return <AwardsForm />;
		case Category.Languages:
			return <LanguagesForm />;
		case Category.Certifications:
			return <CertificationsForm />;
		case Category.References:
			return <ReferencesForm />;
		default:
			return <div id="input-form"></div>;
	}
}
