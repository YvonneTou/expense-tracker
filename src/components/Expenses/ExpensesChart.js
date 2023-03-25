import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

  const chartDataPoints = [
    { label: "Jan", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Feb", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Mar", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Apr", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "May", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Jun", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Jul", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Aug", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Sep", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Oct", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Nov", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
    { label: "Dec", value: 0, id: ('d' + Math.floor(Math.random() * 1000).toString()) },
  ];

  props.expenses.forEach(expense => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
    console.log(chartDataPoints[expenseMonth].value);
  }
  )

  return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;
