import React from 'react'
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
    debugger
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return(
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint) => (
                    <ChartBar
                        value = {dataPoint.value}
                        label = {dataPoint.label}
                        maxValue = {totalMaximum}
                        key = {dataPoint.key} />
                ))
            }
            
        </div>
    )
}

export default Chart;