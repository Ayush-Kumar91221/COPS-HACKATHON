import "./AddItems.css"
const AddItems =()=>{
    return (
        <form action="#" method="post">
        <label for="expenseDate">Date:</label>
        <input type="date" id="expenseDate" name="expenseDate" required/>

        <label for="expenseCategory">Expense Category:</label>
        <input type="text" id="expenseCategory" name="expenseCategory" required/>

        <label for="expenseDescription">Description:</label>
        <input type="text" id="expenseDescription" name="expenseDescription" required/>

        <label for="expenseAmount">Amount (INR):</label>
        <input type="number" id="expenseAmount" name="expenseAmount" step="0.01" required/>

        <button type="submit">Add Entry</button>
    </form>

    )
}
export default AddItems