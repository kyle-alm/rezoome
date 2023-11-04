import { useState } from "react";
import Categories from "./resume_builder/categories";
import DisplayCurrentList from "./resume_builder/display-current-list";
import InputForm from "./resume_builder/input-form";
import Resume from "../models/Resume";
import User from "../models/User";

export default function ResumeBuilder() {
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	);
	const [resume, setResume] = useState<Resume>(defaultResume);

	return (
		<div id="form-panel">
			<Categories
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>
			<div id="category-form-panel">
				<DisplayCurrentList
					category={selectedCategory}
					resume={resume}
					setResume={setResume}
				/>
				<InputForm
					category={selectedCategory}
					resume={resume}
					setResume={setResume}
				/>
			</div>
		</div>
	);
}

export enum Category {
	User = "User",
	Summary = "Summary",
	Experience = "Experience",
	Education = "Education",
	Skills = "Skills",
}

const defaultUser: User = {
	email: "",
	fullName: "",
	phoneNumber: "",
	address: "",
	city: "",
	state: "",
	zipcode: "",
	website: "",
	portfolioUrl: "",
	linkedinUrl: "",
	githubUrl: "",
};

const defaultResume: Resume = {
	user: defaultUser,
	summaries: [],
	experiences: [],
	educations: [],
	skills: [],
};
