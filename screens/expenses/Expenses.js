import React, { useContext } from "react";
import ExpensesContent from "../../components/Expenses/ExpensesContent";
import { ExpensesContext } from "../../store/expensesContext";

const Expenses = () => {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesContent
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!"
    />
  );
};

export default Expenses;
