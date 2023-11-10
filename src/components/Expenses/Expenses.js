import React, { useState } from 'react';
import "./Expenses.css"
import ExpenseItem from './ExpenseItem.js'
import ExpenseFilter from './ExpensesFilter.js'
import Card from "../UI/Card.js";
import ExpensesList from "./ExpensesList.js"

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023')

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	console.log('Year data in Expenses.js ' + filteredYear)

	const filterChangeHandler = (year) => {
		console.log('Filtered change handled by Expenses.js')
		console.log(year + ' in Expenses.js')
		setFilteredYear(year)
	}

	let expensesContent = <p>No expenses found.</p>
	if(filteredExpenses.length > 0){
		expensesContent = filteredExpenses.map((expense) => {
			return <ExpenseItem
				id={expense.id}
				title= {expense.title}
				amount={expense.amount}
				date={expense.date}    
			></ExpenseItem>
		} )
	} 

	
	return (
		<Card className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
			<ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
		</Card>
	)
}
export default Expenses;