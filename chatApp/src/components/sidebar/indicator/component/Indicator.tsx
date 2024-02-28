import React from 'react';

interface IndicatorProps {
    value: string;
}

const Indicator: React.FC<IndicatorProps> = ({ value }) => {
  return (
    <div className="flex items-center">
      <div className="w-5 h-3 bg-green-900 rounded-full flex items-center justify-center mr-4">
        <span className="text-white text-xs">{value}</span>
      </div>
    </div>
  );
};

export default Indicator;
