'use client';

import { formatDate, formatNumberAbbreviation } from '@/util';
import dayjs from 'dayjs';
import React from 'react';
import Chart from 'react-apexcharts';
import weekday from 'dayjs/plugin/weekday';
import Text from '@/components/ui/typo';
import { Button, Stack } from '@mui/material';
import { Icons } from '@/components/ui/images/Icons';
import Link from 'next/link';

dayjs.extend(weekday);

// const apexChartData = {
//   series: [
//     {
//       name: 'Attendance(%)',
//       data: [45, 76, 72, 68, 57, 24, 23],
//     },
//   ],
//   options: {
//     chart: {
//       title: {
//         text: 'Transactions',
//       },
//       yaxis: {
//         max: 100,
//         categories: [0, 25, 50, 75, 100, 120],
//       },
//       xaxis: {
//         title: { text: 'Days' },
//         categories: ['20 Mar', '21 Mar', '22 Mar', '23 Mar', '24 Mar', '25 Mar', '26 Mar'],
//       },
//       dropShadow: {
//         enabled: true,
//         color: '#000',
//         top: 18,
//         left: 7,
//         blur: 10,
//         opacity: 0.2,
//       },
//       zoom: {
//         enabled: false,
//       },
//     },
//     type: 'line',
//     colors: ['#F31559'],
//     dataLabels: {
//       enabled: false,
//     },
//   },
// };
const options = {
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 100],
      colorStops: [],
    },
  },
  colors: ['#E484FF', '#D5538F', '#FF7BBE', '#FDBA93', '#19F987', '#62B3FF'],
  series: [
    {
      name: 'Series A',
      data: [8e6, 6e5, 2e6, 7e6, 4e6, 1e6, 8e6],
    },
    {
      name: 'Series B',
      data: [3e5, 4e6, 6e6, 2.5e6, 5e6, 7e6, 4e6],
    },
    {
      name: 'Series C',
      data: [4e6, 9e6, 8e6, 3e6, 9e6, 1e7, 4e6],
    },
  ],
  grid: {
    borderColor: '#C5CCD6',
    strokeDashArray: 0,
  },
  stroke: {
    width: [3, 3, 3],
    curve: 'smooth', // Fixed the type error here
  },
  xaxis: {
    label: {
      format: 'dd MMM',
    },
  },
  yaxis: {
    logbase: 1000,
    min: 0,
    max: (max: number) => (max > 1e7 ? Math.ceil(max) : 1e7),
    stepSize: 1e6,
    labels: {
      formatter: function (value: number) {
        return formatNumberAbbreviation(value);
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
    <section className="w-full h-full bg-white rounded-lg p-4">
      <ChartHeader />

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
    </section>
  );
};

const ChartHeader = () => {
 
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Text className="font-semibold text-lg">Transactions</Text>

      <Link href="/transactions/top-up">
        <Button className="flex text-lg justify-center items-center gap-2 normal-case text-gray-secondary">
          More
          <Icons.arrow_long className="rotate-180" />
        </Button>
      </Link>
    </Stack>
  );
};
export default LineChart;
