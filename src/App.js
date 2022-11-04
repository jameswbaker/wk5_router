import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className = "appdiv">
      <h1>Budget!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>

      <br/>
      <br/>
      <br/>

      <Outlet /> {/* add outlet so App component still renders*/}
    </div>
  );
}
