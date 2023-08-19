const resumeInterface = {
	Profile: {
		Display: "card",
		Fields: [
			{
				id: "full_name",
				label: "Full Name",
				type: "char",
			},
			{
				id: "phone_number",
				label: "Phone Number",
				type: "phone",
			},
			{
				id: "address",
				label: "Address",
				type: "address",
			},
			{
				id: "city",
				label: "City",
				type: "char",
			},
			{
				id: "state",
				label: "State",
				type: "char",
			},
			{
				id: "zipcode",
				label: "Zip Code",
				type: "zipcode",
			},
			{
				id: "website",
				label: "Website",
				type: "url",
			},
			{
				id: "portfolio",
				label: "Portfolio",
				type: "url",
			},
			{
				id: "github",
				label: "Github",
				type: "url",
			},
			{
				id: "linkedin",
				label: "LinkedIn",
				type: "url",
			},
			{
				id: "twitter",
				label: "Twitter",
				type: "url",
			},
			{
				id: "instagram",
				label: "Instagram",
				type: "url",
			},
			{
				id: "facebook",
				label: "Facebook",
				type: "url",
			},
		],
	},
	Titles: {
		Display: "chip",
		Fields: [
			{
				id: "title",
				label: "Title",
				type: "char",
			},
		],
	},
	Summaries: {
		Display: "card",
		Fields: [
			{
				id: "summarysnippet",
				label: "Summary",
				type: "text",
			},
		],
	},
	Experience: {
		Display: "card",
		Fields: [
			{
				id: "company",
				label: "Company",
				type: "char",
			},
			{
				id: "city",
				label: "City",
				type: "char",
			},
			{
				id: "state",
				label: "State",
				type: "char",
			},
			{
				id: "start_date",
				label: "Start Date",
				type: "date",
			},
			{
				id: "end_date",
				label: "End Date",
				type: "date",
			},
			{
				id: "is_current",
				label: "Current",
				type: "bool",
			},
		],
	},
	Experience_Titles: {
		Display: "chip",
		Fields: [
			{
				id: "title",
				label: "Title",
				type: "char",
			},
		],
	},
	Experience_Snippets: {
		Display: "card",
		Fields: [
			{
				id: "snippet",
				label: "Snippet",
				type: "text",
			},
		],
	},
	Education: {
		Display: "card",
		Fields: [
			{
				id: "school",
				label: "School",
				type: "char",
			},
			{
				id: "city",
				label: "City",
				type: "char",
			},
			{
				id: "state",
				label: "State",
				type: "char",
			},
			{
				id: "start_date",
				label: "Start Date",
				type: "date",
			},
			{
				id: "end_date",
				label: "End Date",
				type: "date",
			},
			{
				id: "is_current",
				label: "Current",
				type: "bool",
			},
		],
	},
	Project: {
		Display: "card",
		Fields: [
			{
				id: "name",
				label: "Name",
				type: "char",
			},
			{
				id: "start_date",
				label: "Start Date",
				type: "date",
			},
			{
				id: "end_date",
				label: "End Date",
				type: "date",
			},
			{
				id: "url",
				label: "URL",
				type: "url",
			},
			{
				id: "role",
				label: "Role",
				type: "char",
			},
		],
	},
	Project_Snippets: {
		Display: "chip",
		Fields: [
			{
				id: "snippet",
				label: "Snippet",
				type: "text",
			},
		],
	},
	Skills: {
		Display: "chip",
		Fields: [
			{
				id: "name",
				label: "Name",
				type: "char",
			},
		],
	},
	Interests: {
		Display: "chip",
		Fields: [
			{
				id: "name",
				label: "Name",
				type: "char",
			},
		],
	},
	Awards: {
		Display: "chip",
		Fields: [
			{
				id: "name",
				label: "Name",
				type: "char",
			},
			{
				id: "date",
				label: "Date",
				type: "date",
			},
		],
	},
	Certifications: {
		Display: "card",
		Fields: [
			{
				id: "name",
				label: "Name",
				type: "char",
			},
			{
				id: "date",
				label: "Date",
				type: "date",
			},
			{
				id: "details",
				label: "Details",
				type: "text",
			},
		],
	},
	Languages: {
		Display: "card",
		Fields: [
			{
				id: "name",
				label: "Name",
				type: "char",
			},
			{
				id: "proficiency",
				label: "Proficiency",
				type: "select",
				options: [
					"Basic",
					"Conversational",
					"Fluent",
					"Native/Bilingual",
				],
			},
		],
	},
	References: {
		Display: "card",
		Fields: [
			{
				id: "name",
				label: "Name",
				type: "char",
			},
			{
				id: "title",
				label: "Title",
				type: "char",
			},
			{
				id: "company",
				label: "Company",
				type: "char",
			},
			{
				id: "phone_number",
				label: "Phone Number",
				type: "char",
			},
			{
				id: "email",
				label: "Email",
				type: "email",
			},
			{
				id: "relationship",
				label: "Relationship",
				type: "char",
			},
		],
	},
};
export default resumeInterface;
