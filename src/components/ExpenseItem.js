import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props){
    /*
    const day = props.expenseData.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.expenseData.date.toLocaleString('en-US', {month: 'long'})
    const year = props.expenseData.date.getFullYear()
*/

    return (
        <div className="expense-item">
            <ExpenseDate date={props.expenseData.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">{props.expenseData.price}</div>
            </div>
        </div>
    )

} 

/*const ExpenseItem = () => {
    const date = new Date (2023, 0, 10)
    const title = 'New book'
    const price = 30.99
    
    return(
        <div className="expense-item">
            <div>{date.toString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
        </div>
    )
}
*/

export default ExpenseItem;