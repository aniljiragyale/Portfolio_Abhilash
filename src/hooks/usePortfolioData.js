import { useState, useEffect } from 'react';

const usePortfolioData = () => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setPortfolioData(data))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  return portfolioData;
};

export default usePortfolioData;
