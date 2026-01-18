interface Props {
    categories: string[];
    onSelectCategory: (selectedCategory: string) => void;
}

const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
    return (
        <div className="mb-3">
            <select
                onChange={(event) => onSelectCategory(event.target.value)}
                className="form-select"
            >
                <option value={""}>All</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ExpenseFilter