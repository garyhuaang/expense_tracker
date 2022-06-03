import './Expenses.css';

function Expenses(props) {
    const title = props.title;
    const amount = props.amount;
    const date = props.date

    return (
        <div className="expenses">
            <div>{title}</div>
            <div>{amount}</div>
            <div>{date}</div>
        </div>
    );
}

export default Expenses;