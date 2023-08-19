import './Homepage.css'
import PlusIcon from "../Icons/plus-large-svgrepo-com.svg"
import jsonData from '../items.json'; 
import { useState } from 'react';

const Home=()=>{
    const [data, setData] = useState(jsonData);
    const addItem = (newItem) => {
        const updatedData = { ...data };
        updatedData.items.push(newItem);
        setData(updatedData);
    }
    return(
        <div className='HomePage'>
    <h1>Expense Tracker</h1>
    <table>
        <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount (USD)</th>
        </tr>
        <tr>
            <td>2023-08-19</td>
            <td>Food</td>
            <td>Lunch at Restaurant A</td>
            <td>15.00</td>
        </tr>
        <tr>
            <td>2023-08-19</td>
            <td>Transportation</td>
            <td>Bus Fare</td>
            <td>5.00</td>
        </tr>
        <tr>
            <td>2023-08-20</td>
            <td>Shopping</td>
            <td>Groceries</td>
            <td>40.00</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>60.00</td>
        </tr>
    </table>
    <div>
        <a href="/add"><button><img src={PlusIcon} alt=""/> Add Items</button></a>
    </div>
    </div>
    )
}
export default Home;