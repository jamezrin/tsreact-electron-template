import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

type Employee<> = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
};

type EmployeeResponse<> = {
  status: string;
  data: Employee[];
};

const App: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeResponse>();

  useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <pre>{JSON.stringify(employees)}</pre>
    </div>
  );
};

export default App;
