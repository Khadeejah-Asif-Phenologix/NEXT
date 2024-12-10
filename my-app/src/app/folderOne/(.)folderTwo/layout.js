import React from 'react';

export default function InterceptingLayout({ children }) {
  return (
    <div>
      <h2>This is an Intercepted Route!</h2>
      {children}
    </div>
  );
}
