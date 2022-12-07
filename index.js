function M12D07Y2022() {
  console.log("Q1: " + ((4 / 16) * 1000)); // Solves to the MBps, not the GBps
  console.log("Q2: " + Math.round((15.95 / 3.5) * 100) / 100); // rounds to the first two decimal places
  console.log("Q3: " + Math.round((568.68 / 3) * 100) / 100); // rounds to the first two decimal places
  console.log("Q4: " + Math.round(((((3.990 / 60) * 100) * 100) * 100) / 100) / 10); // rounds to one place out, gets answer in MB, not GB
  console.log("Q5: " + Math.round(((6.2 / 60) * 93) * 100) / 100); // rounds two places out
}

function allDailyLogic() {
  M12D07Y2022();
}

allDailyLogic();