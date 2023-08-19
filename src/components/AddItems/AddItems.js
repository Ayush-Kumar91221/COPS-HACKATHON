import "./AddItems.css"
import { useState } from "react";
import jsonData from '../items.json';
import { Link,useNavigate } from 'react-router-dom';
const AddItems =()=>{
    const navigate= useNavigate();
    const [formData, setFormData] = useState({
        expenseDate: '',
        expenseCategory: '',
        expenseDescription:'',
        expenseAmount:''
      });
      const [data, setData] = useState(jsonData);
      const addItem = (newItem) => {
          const updatedData = { ...data };
          updatedData.items.push(newItem);
          setData(updatedData);
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
        navigate('/')
    
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