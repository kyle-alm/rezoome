type Education = {
	id: number;
	school: string;
	city: string;
	state: string;
	start_date: Date;
	end_date: Date | null;
	degree_type: string;
	degree_field: string;
	gpa: number;
};

export default Education;
