import React, { useState, useEffect } from 'react'
import { fetechDaily } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

import styles from './Chart.module.css'

function Chart(props) {
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            setDailyData(await fetechDaily())
        }
        fetchData()
    }, [])

    const LinkChart = dailyData[0] ? (
        <Line
            data={{
                labels: dailyData.map(({ reportDate }) => reportDate),
                datasets: [
                    {
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        file: true,
                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255,0,0,0.5)',
                        file: true,
                    },
                ],
            }}
        />
    ) : null

    const BarChart = props.data.confirmed ? (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Death'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: [
                            'rgb(0, 0, 255, 0.5)',
                            'rgb(0, 255, 0, 0.5)',
                            'rgb(255, 0, 0, 0.5)',
                        ],
                        data: [
                            props.data.confirmed.value,
                            props.data.recovered.value,
                            props.data.deaths.value,
                        ],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: {
                    display: true,
                    text: `Cureent State in ${props.country}`,
                },
            }}
        />
    ) : null

    return (
        <div className={styles.container}>
            {props.country ? BarChart : LinkChart}
        </div>
    )
}

export default Chart
