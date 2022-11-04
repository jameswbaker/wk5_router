import { Link, Outlet, useSearchParams } from "react-router-dom";
import { getExpenses } from "../expenseData";

export default function Expenses() {
    let expenses = getExpenses();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div style ={{ padding: "1rem 0", display: "flex" }}>
            <nav>
                <input
                    value = {searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
            {/* iterate through all expenses */}
                { expenses.filter((expense) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = expense.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((expense) => (
                    <Link
                        style={{display: "block", margin: "1rem 0" }}
                        to={`/expenses/${expense.number}`} /* key off of expense number */
                        key={expense.number}
                    >
                        {expense.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}