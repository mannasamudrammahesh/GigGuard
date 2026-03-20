export const mockWorkers = [
  { id: 'W1', name: 'Arjun S.', trustScore: 92, tenure: '14 months', status: 'Fast Track', claims: 0 },
  { id: 'W2', name: 'Priya K.', trustScore: 88, tenure: '8 months', status: 'Fast Track', claims: 1 },
  { id: 'W3', name: 'Rahul M.', trustScore: 45, tenure: '1 month', status: 'Standard', claims: 0 },
  { id: 'W4', name: 'Ananya R.', trustScore: 95, tenure: '24 months', status: 'Fast Track', claims: 2 },
  { id: 'W5', name: 'Vikram D.', trustScore: 12, tenure: '2 weeks', status: 'Flagged', claims: 0 },
];

export const generateClaim = (isFraud = false) => {
  const id = `CLM-${Math.floor(Math.random() * 9000) + 1000}`;
  const timestamp = new Date().toLocaleTimeString();
  
  if (isFraud) {
    return {
      id,
      timestamp,
      workerName: `User_${Math.floor(Math.random() * 1000)}`,
      type: 'Syndicate',
      signals: {
        mockLocation: true,
        hdop: 1.0,
        pressure: 1013, // Standard indoor
        network: 'Home Wi-Fi',
        latency: '42s' // Sub-60s
      },
      trustScore: Math.floor(Math.random() * 25),
      status: 'Denied'
    };
  } else {
    const worker = mockWorkers[Math.floor(Math.random() * mockWorkers.length)];
    return {
      id,
      timestamp,
      workerName: worker.name,
      type: 'Genuine',
      signals: {
        mockLocation: false,
        hdop: 2.4,
        pressure: 998, // Stormy
        network: 'Cellular (4G)',
        latency: '14m'
      },
      trustScore: Math.max(75, worker.trustScore - Math.floor(Math.random() * 10)),
      status: 'Approved'
    };
  }
};
