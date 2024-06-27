'use client';

import { formatDate, formatNumberAbbreviation } from '@/utils';
import dayjs from 'dayjs';
import React from 'react';
import Chart from 'react-apexcharts';
import weekday from 'dayjs/plugin/weekday';
import { calculateTotalValue, formatNumber } from '@/utils/numberAbbrevation';

dayjs.extend(weekday);

const options = {
  dataLabels: {
    enabled: false,
  },
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
      stops: [0, 100, 100, 100],
    },
  },
  series: [
    {
      name: 'Top Up',
      data: [8e6, 6e5, 2e6, 7e6, 4e6, 1e6, 8e6],
    },
    {
      name: 'Withdraw',
      data: [3e5, 4e6, 6e6, 2.5e6, 5e6, 7e6, 4e6],
    },
    {
      name: 'Game',
      data: [4e6, 9e6, 8e6, 3e6, 9e6, 1e7, 4e6],
    },
  ],
  grid: {
    borderColor: '#C5CCD6',
    strokeDashArray: 0,
  },
  stroke: {
    width: [3, 3, 3],
    curve: ['smooth', 'smooth', 'smooth'] as (
      | 'smooth'
      | 'straight'
      | 'stepline'
      | 'linestep'
      | 'monotoneCubic'
    )[],
  },
  xaxis: {
    label: {
      format: 'dd MMM',
    },
  },
  yaxis: {
    min: 0,
    max: (max: number) => (max > 1e7 ? Math.ceil(max) : 1e7),
    stepSize: 1e6,
    labels: {
      formatter: function (value: number) {
        return formatNumberAbbreviation(value).toString();
        // return value
      },
      style: {
        colors: '#555F6D',
        fontWeight: 'bold',
        fontSize: '14px',
      },
    },
  },
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    show: false,
    shared: false,
    intersect: true,
    x: {
      show: false,
    },
  },
  legend: {
    show: true,
    width: 600,
    fontSize: '18px',
    fontWeight: 'bold',
    position: 'bottom' as 'top' | 'bottom' | 'left' | 'right',
    horizontalAlign: 'left' as 'left' | 'center' | 'right',
    formatter: function (seriesName: any, opts: any) {
      return `
      <div class="w-32 inline-block">
      ${seriesName}
      <p class="font-light">${formatNumber(calculateTotalValue(opts.w.globals.series[opts.seriesIndex]), 0)}</p>
      </div>
      `;
    },
  },
};

const LineChart = () => {
  const days: (Date | string)[] = [];
  for (let i = -1; i < 6; i++) {
    const date = dayjs()
      .weekday(i - 3)
      .toString();
    days.push(formatDate(date, 'DD MMM'));
  }

  return (
    <Chart
      type="line"
      options={{
        ...options,
        xaxis: {
          categories: ['Days', ...days],
        },
      }}
      series={options.series}
      height={420}
    />
  );
};

export default LineChart;
