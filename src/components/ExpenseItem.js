import './ExpenseItem.css';

function ExpenseItem(props) {
  // in the default JS Date class, month starts from 0
  // for March, we input '2'
  // const expenseDate = new Date(2023, 2, 5);
  const option = {month: 'short', day: '2-digit', year: 'numeric'}
  const formattedDate = props.date.toLocaleString('en-US', option)
  return (
    <div className='expense-item'>
      <div>{formattedDate}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
