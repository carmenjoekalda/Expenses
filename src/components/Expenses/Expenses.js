import React from 'react'
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpensesFilter.js'
import "./Expenses.css"
import Card from '../UI/Card'

const Expenses = (props) => {
	const addExpenseFilterHandler = (expenseFilter) => {
		console.log('Year data in Expenses.js')
		console.log(expenseFilter)
	}

	return (
		<Card className="expenses">
			<ExpenseFilter onAddExpenseFilter={addExpenseFilterHandler} />
			<ExpenseItem expenseData={props.expensesData[0]}></ExpenseItem>
			<ExpenseItem expenseData={props.expensesData[1]}></ExpenseItem>
		</Card>
	)

}

export default Expenses