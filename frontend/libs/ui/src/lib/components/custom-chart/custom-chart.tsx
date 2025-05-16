'use client';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  ChartConfiguration,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

Chart.register(CategoryScale, BarController, LinearScale, BarElement, Tooltip);

type ChartProps = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  config: ChartConfiguration;
};

export const CustomChart = forwardRef<HTMLCanvasElement, ChartProps>(
  ({ config, ...props }, ref) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    useImperativeHandle(ref, () => chartRef.current!);

    useEffect(() => {
      if (!chartRef.current) return;

      const localConfig: ChartConfiguration = {
        options: {
          responsive: true,
          // plugins: {
          //   legend: {
          //     position: 'top',
          //   },
          //   title: {
          //     display: true,
          //     text: 'Chart.js Bar Chart',
          //   },
          // },
        },
        ...config,
      };

      const chartCtx = new Chart(chartRef.current, localConfig);

      return () => {
        chartCtx.destroy();
      };
    }, []);

    return <canvas {...props} ref={chartRef} />;
  }
);
