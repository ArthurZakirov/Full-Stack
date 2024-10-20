import React, { useState } from 'react';

const AddNumbers = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError(null); // Reset any previous errors
    setResult(null); // Reset result

    try {
      const response = await fetch('http://127.0.0.1:8000/api/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ a, b }),  // Send the numbers in the request body
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.result);  // Show the result if the response is OK
      } else {
        setError(data.error);  // Show any errors from the backend
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div>
      <h1>Add Two Numbers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Enter number A"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Enter number B"
        />
        <button type="submit">Add</button>
      </form>

      {result !== null && <h2>Result: {result}</h2>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddNumbers;