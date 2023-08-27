import React from 'react';

export default function Alert({ message, type }) {
  return (
    <div>
      {message && (
        <div className={`alert alert-${type}`}>
          {message}
        </div>
      )}
    </div>
  );
}
