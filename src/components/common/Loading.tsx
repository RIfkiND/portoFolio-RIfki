import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2">
        <div className="w-8 h-8 bg-blue-500 animate-bounce"></div>
        <div className="w-8 h-8 bg-blue-500 animate-bounce delay-200"></div>
        <div className="w-8 h-8 bg-blue-500 animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Loading;
