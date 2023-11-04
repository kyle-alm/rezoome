import { useState, useEffect } from "react";
import User from "../../models/User";
import TextBox from "../common/text-box";

interface UserFormProps {
	readonly userDetails: User;
	readonly setUserDetails: (newUser: User) => void;
}
export default function UserForm({
	userDetails,
	setUserDetails,
}: UserFormProps) {
	const [user, setUser] = useState<User>(userDetails);

	const handlePhoneNumberChange = (value: string) => {
		const digits = value.replace(/[^\d]/g, "");
		setUser({ ...user, phoneNumber: digits });
	};

	useEffect(() => {
		setUserDetails(user);
	}, [user]);

	return (
		<div className="input-form" id="user-form">
			<div className="input-form-row">
				<TextBox
					value={user.fullName}
					label="Full Name"
					onChange={(v) => setUser({ ...user, fullName: v })}
				/>
			</div>
			<div className="input-form-row">
				<TextBox
					value={user.email}
					label="Email"
					onChange={(v) => setUser({ ...user, email: v })}
				/>
				<TextBox
					value={user.phoneNumber}
					label="Phone Number"
					onChange={(v) => handlePhoneNumberChange(v)}
				/>
			</div>
			<div className="input-form-row">
				<TextBox
					value={user.address}
					label="Address"
					onChange={(v) => setUser({ ...user, address: v })}
				/>
			</div>
			<div className="input-form-row">
				<TextBox
					value={user.city}
					label="City"
					onChange={(v) => setUser({ ...user, city: v })}
				/>
				<TextBox
					value={user.state}
					label="State"
					onChange={(v) => setUser({ ...user, state: v })}
				/>
				<TextBox
					value={user.zipcode}
					label="Zip"
					onChange={(v) => setUser({ ...user, zipcode: v })}
				/>
			</div>
			<div className="input-form-row">
				<TextBox
					value={user.website}
					label="Website URL"
					onChange={(v) => setUser({ ...user, website: v })}
				/>
			</div>
			<div className="input-form-row">
				<TextBox
					value={user.portfolioUrl}
					label="Portfolio URL"
					onChange={(v) => setUser({ ...user, portfolioUrl: v })}
				/>
			</div>
			<div className="input-form-row">
				<TextBox
					value={user.linkedinUrl}
					label="LinkedIn URL"
					onChange={(v) => setUser({ ...user, linkedinUrl: v })}
				/>
			</div>
			<div className="input-form-row">
				<TextBox
					value={user.githubUrl}
					label="GitHub URL"
					onChange={(v) => setUser({ ...user, githubUrl: v })}
				/>
			</div>
		</div>
	);
}
