type Experience = {
	id: number;
	company: string;
	city: string;
	state: string;
	start_date: Date;
	end_date: Date | null;
	titles: string[];
	bullets: string[];
};

export default Experience;
