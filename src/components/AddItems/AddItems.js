import "./AddItems.css"
import { useState } from "react";
import jsonData from '../items.json';
import { Link,useNavigate } from 'react-router-dom';
const AddItems =()=>{
    const navigate= useNavigate();
    const [expenses, setExpenses] = useState([]);
    const [formData, setFormData] = useState({
        expenseDate: '',
        expenseCategory: '',
        expenseDescription:'',
        expenseAmount:''
      });
      const storedExpenses = JSON.parse(localStorage.getItem('Expenses'));
      if (storedExpenses) {
        setExpenses(storedExpenses);
      }
      const addItem = (newItem) => {
          setExpenses({...newItem});
          setData(updatedData);
          localStorage.setItem('Expenses', JSON.stringify(expenses));
      }
    function SubmitEvent(e) {
        const { expenseDate, expenseCategory, expenseAmount, expenseDescription } = e.target;
        setFormData({
          ...formData,
          "expenseAmount": expenseAmount,
          "expenseCategory": expenseCategory,
          "expenseDescription": expenseDescription,
          "expenseDate":expenseDate
        });
        addItem(formData);
        navigate('/');
    
    }  
    return (
        <form  onSubmit={SubmitEvent}>
        <label for="expenseDate">Date:</label>
        <input type="date" id="expenseDate" name="expenseDate" required/>

        <label for="expenseCategory">Expense Category:</label>
        <input type="text" id="expenseCategory" name="expenseCategory" required/>

        <label for="expenseDescription">Description:</label>
        <input type="text" id="expenseDescription" name="expenseDescription" required/>

        <label for="expenseAmount">Amount (INR):</label>
        <input type="number" id="expenseAmount" name="expenseAmount" step="1" required/>

        <button type="submit">Add Entry</button>
    </form>

    )
}
export default AddItems