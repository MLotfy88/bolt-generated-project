import React, { useState } from 'react';

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    name: '',
    alertDuration: ''
  });

  const handleAddCompany = () => {
    setCompanies([...companies, newCompany]);
    setNewCompany({
      name: '',
      alertDuration: ''
    });
  };

  const handleDeleteCompany = (index) => {
    setCompanies(companies.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Companies</h1>
      <div>
        <input
          type="text"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Alert Duration (e.g., 3 months)"
          value={newCompany.alertDuration}
          onChange={(e) => setNewCompany({ ...newCompany, alertDuration: e.target.value })}
        />
        <button onClick={handleAddCompany}>Add Company</button>
      </div>
      <ul>
        {companies.map((company, index) => (
          <li key={index}>
            <h3>{company.name}</h3>
            <p>Alert Duration: {company.alertDuration}</p>
            <button onClick={() => handleDeleteCompany(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
