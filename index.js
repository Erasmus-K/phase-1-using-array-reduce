const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// totalBatteries should be a number, not a function
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

module.exports = {
  totalBatteries
};
