export const CircularProgressBar = ({
  progress,
  size = 32,
  strokeWidth = 4,
}: {
  progress: number;
  size?: number;
  strokeWidth?: number;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="stroke-gray-300 dark:stroke-gray-dark-600"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="stroke-green-500 dark:stroke-green-300"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            transformOrigin: '50% 50%',
            transform: 'rotate(-90deg)',
            transition: 'stroke-dashoffset 0.35s',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[8px] font-semibold">
        {progress}%
      </div>
    </div>
  );
};
