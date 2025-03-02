import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';

function Dashboard({ supplies }) {
  const [expiringSoon, setExpiringSoon] = useState([]);
  const [expiredSupplies, setExpiredSupplies] = useState([]);

  useEffect(() => {
    const now = new Date();
    const soonSupplies = supplies.filter(supply => {
      const expirationDate = new Date(supply.expirationDate);
      const timeDiff = expirationDate.getTime() - now.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      return daysDiff <= 90 && daysDiff > 0; // 3 months
    });
    setExpiringSoon(soonSupplies);

    const expired = supplies.filter(supply => {
      const expirationDate = new Date(supply.expirationDate);
      return expirationDate < now;
    });
    setExpiredSupplies(expired);
  }, [supplies]);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Supplies Expiring Soon</h2>
      <ul>
        {expiringSoon.map(supply => (
          <li key={supply.id}>
            <h3>{supply.name}</h3>
            <p>Expires in: {formatDistance(new Date(supply.expirationDate), new Date())}</p>
          </li>
        ))}
      </ul>
      <h2>Expired Supplies</h2>
      <ul>
        {expiredSupplies.map(supply => (
          <li key={supply.id}>
            <h3>{supply.name}</h3>
            <p>Expired: {formatDistance(new Date(supply.expirationDate), new Date())} ago</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
