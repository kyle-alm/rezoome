import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;
const host = window.location.host;
let domain = "https://" + host;
if (host.includes(":")) {
	domain = "http://" + host.replace("3000", "8000");
}

export const restoreSession = () => {
	const session_id = localStorage.getItem("sessionid");
	if (session_id) {
		return axios
			.post(domain + "/login/restore/", {
				session_id: session_id,
			})
			.then((res) => {
				setCSRFToken();
				if (res.data.status === "success") {
					return true;
				} else {
					localStorage.removeItem("sessionid");
					return false;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		return false;
	}
};

const setCSRFToken = () => {
	if (setCSRFToken.isRunning) return;
	setCSRFToken.isRunning = true;

	let attempts = 0;
	let intervalID = setInterval(() => {
		attempts++;
		if (Cookies.get("csrftoken")) {
			clearInterval(intervalID);
			axios.defaults.headers.post["X-CSRFToken"] =
				Cookies.get("csrftoken");
		} else if (attempts > 5) {
			clearInterval(intervalID);
		}
	}, 500);
};

export const logout = () => {
	localStorage.removeItem("sessionid");
	return axios.post(domain + "/logout/").then((res) => {
		return true;
	});
};

export const login = (email, password, store_session) => {
	return axios
		.post(domain + "/login/", {
			username: email,
			password: password,
		})
		.then((res) => {
			setCSRFToken();
			if (res.data.status === "success") {
				if (store_session) {
					localStorage.setItem("sessionid", res.data.session_id);
				}
				return res.data.profile;
			} else {
				return false;
			}
		});
};

export const signup = (email, password, store_session) => {
	return axios
		.post(domain + "/sign-up/", {
			username: email,
			password: password,
		})
		.then((res) => {
			setCSRFToken();
			if (res.data.status === "success") {
				if (store_session) {
					localStorage.setItem("sessionid", res.data.session_id);
				}
				return true;
			}
		})
		.catch((err) => {
			if (
				err.response.data.email[0] ==
				"user with this email already exists."
			) {
				return "email_exists";
			}
			return false;
		});
};
