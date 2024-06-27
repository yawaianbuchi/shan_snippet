'use client';

import { formatNumber } from '@/utils/numberAbbrevation';
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  return (
    <Chart
      type="donut"
      options={{
        chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            donut: {
              size: '25%',
            },
          },
        },
        labels: ['Myanmar', 'Thailand', 'Chinese'],
        colors: ['#FF7BBE', '#D5538F', '#62B3FF'],
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDBA93', '#E484FF', '#19F987'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 70, 100],
          },
        },
        legend: {
          position: 'bottom',
          fontSize: '18px',
          fontWeight: 'bold',
          formatter: function (seriesName: any, opts: any) {
            console.log(seriesName);
            return `
            <div class="w-32 inline-block">
            ${seriesName}
            <p class="font-light">${formatNumber(opts.w.globals.series[opts.seriesIndex], 0)}</p>
            </div>
            `;
          },
        },
      }}
      series={[75, 15, 10]}
    />
  );
};

export default PieChart;
