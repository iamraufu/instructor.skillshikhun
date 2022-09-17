import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

const SalesChart = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'আপনার কোর্স বিক্রয়',
            },
        },
    };

    const labels = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'বিক্রয়',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    );
};

export default SalesChart;