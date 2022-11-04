import { useParams } from "react-router-dom";
import { getExpense } from "../expenseData";

export default function Expense() {
    let params = useParams();
    let expense = getExpense(parseInt(params.expenseId, 10))
    return (
        <main style={{ padding : "1rem" }}>
            <h2>Expense amount: {expense.amount}</h2>
            <p>
                {expense.name}: {expense.number}
            </p>
            <p>Expense due: {expense.due}</p>
        </main>
    );
}