import axios from "axios";

const host = window.location.host;
let domain = "https://" + host;
if (host.includes(":")) {
	domain = "http://" + host.replace("3000", "8000");
}

export function submitProfile(profile) {
	profile["full_name"] = profile["fullName"];
	return axios
		.post(domain + "/userprofile/", {
			profile: profile,
		})
		.then((res) => {
			console.log(res);
			return true;
		});
}

export function getResume() {
	return axios.get(domain + "/resume/").then((res) => {
		console.log(res);
		return res;
	});
}

export function getUserProfile() {
	return axios.get(domain + "/userprofile/").then((res) => {
		console.log(res);
		return res;
	});
}
