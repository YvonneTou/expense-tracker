import './ExpenseDate.css';
import Card from '../UI/Card';

function ExpenseDate(props) {
  // const option = {year: 'numeric', month: 'short', day: '2-digit'};
  const day = props.date.toLocaleString('en-JP', {day: '2-digit'});
  const month = props.date.toLocaleString('en-JP', {month: 'short'});
  const year = props.date.toLocaleString('en-JP', {year: 'numeric'});

  return (
    <Card className='expense-date'>
      {/* <div className='expense-date__year'>{year}</div> */}
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
    </Card>
  )
}

export default ExpenseDate;
