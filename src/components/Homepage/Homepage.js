import './Homepage.css'
const Home=()=>{
    return(
        <div>
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
    </div>
    )
}
export default Home;