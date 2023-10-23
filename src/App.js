import './App.css';

import Expenses from './components/Expenses/Expenses.js';
import NewExpense from "./components/NewExpense/NewExpense.js";


const App = () => {
  const expenses = [
    {
      date: new Date(2023, 0, 10),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2023, 0, 10),
      title: 'New Jeans',
      price: 99.99
    }
  ] 

  const addExpensehandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  } 
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpensehandler}></NewExpense>
      <Expenses expensesData={expenses}></Expenses>
    </div>
  );
}

export default App;