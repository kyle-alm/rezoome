import { Dispatch, SetStateAction } from "react";
import { Category } from "./form-panel";

interface CategoriesProps {
	selectedCategory: Category | null;
	setSelectedCategory: Dispatch<SetStateAction<Category | null>>;
}

export default function Categories({
	selectedCategory,
	setSelectedCategory,
}: CategoriesProps) {
	return (
		<div id="categories">
			{Object.values(Category).map((category) => (
				<div
					key={category}
					className={`category ${
						selectedCategory === category ? "selected" : ""
					}`}
					onClick={() => setSelectedCategory(category)}
				>
					<span className="category-text">{category}</span>
					<div className="category-line" />
				</div>
			))}
		</div>
	);
}
