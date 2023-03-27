import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValues);
  const classes = "chart " + props.display;

  return(
    <div className={classes}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.id}
        value={dataPoint.value}
        maxValue={totalMaxValue}
        label={dataPoint.label}
        />
      ))}

    </div>
  )
};

export default Chart;
