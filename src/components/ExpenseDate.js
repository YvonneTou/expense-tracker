import './ExpenseDate.css';

function ExpenseDate(props) {
  // const option = {year: 'numeric', month: 'short', day: '2-digit'};
  const day = props.date.toLocaleString('en-JP', {day: '2-digit'});
  const month = props.date.toLocaleString('en-JP', {month: 'short'});
  const year = props.date.toLocaleString('en-JP', {year: 'numeric'});

  return (
    <div className='expense-date'>
      {/* <div className='expense-date__year'>{year}</div> */}
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  )
}

export default ExpenseDate;
