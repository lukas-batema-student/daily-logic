import { c } from 'tcol';

function M12D07Y2022() {
  console.log(`${c.Bright("12/07/2022")}`);
  console.log(`${c.Bright(c.BgGreen((`Q1: ${((4 / 16) * 1000)}      `)))}`); // Solves to the MBps, not the GBps
  console.log(`${c.Bright(c.BgGreen((`Q2: ${Math.round((15.95 / 3.5) * 100) / 100}     `)))}`); // rounds to the first two decimal places
  console.log(`${c.Bright(c.BgGreen((`Q3: ${Math.round((568.68 / 3) * 100) / 100}   `)))}`); // rounds to the first two decimal places
  console.log(`${c.Bright(c.BgGreen((`Q4: ${Math.round(((((3.990 / 60) * 100) * 100) * 100) / 100) / 10}     `)))}`); // rounds to one place out, gets answer in MB, not GB
  console.log(`${c.Bright(c.BgRed((`Q5: ${Math.round(((6.2 / 60) * 93) * 100) / 100}     `)))}`); // rounds two places out
  console.log();
}

function M12D08Y2022() {
  console.log(`${c.Bright("12/08/2022")}`);
  console.log(`${c.Bright(c.BgGreen((`Q1: ${((1 + 3) + 5) * (1.75)}    `)))}`); // Solves to the MBps, not the GBps
  console.log(`${c.Bright(c.BgRed((`Q2: ${Math.round(((((200 * 1024) / 200) / (105.80 / 2))) * 1000) / 1000}   `)))}`); // rounds to the first two decimal places
  console.log(`${c.Bright(c.BgGreen((`Q3: ${Math.round(((19.85 * 75) - 375.68) * 100) / 100  }  `)))}`); // rounds to the first two decimal places
  console.log(`${c.Bright(c.BgRed((`Q4: ${Math.round(((((2 / 11.26) * 0.87) * 100) * 10) / 100) / 10}      `)))}`); // rounds to one place out, gets answer in MB, not GB
  console.log(`${c.Bright(c.BgRed((`Q5: ${Math.round((39.00 / 50) * 100) / 100}     `)))}`); // rounds two places out
  console.log();
}

function M12D09Y2022() {
  console.log(`${c.Bright("12/09/2022")}`);
  console.log(`${c.Bright(c.BgRed((`Q1: ${Math.round(((4.5 / 0.8) * (100 + 15) / 100) * 100) / 100}     `)))}`); // Solves to the MBps, not the GBps
  console.log(`${c.Bright(c.BgGreen((`Q2: ${Math.round(((39 / (50 * 3) * 100) * 100) / 100) / 100}     `)))}`); // rounds to the first two decimal places
  console.log(`${c.Bright(c.BgGreen((`Q3: ${Math.round(((0.1536 / 3) * 24) * 10000) / 10000}   `)))}`); // rounds to the first two decimal places
  console.log(`${c.Bright(c.BgGreen((`Q4: ${Math.round(((1.3 * 5) + (1.5 * 12)) * 10) / 10}     `)))}`); // rounds to one place out, gets answer in MB, not GB
  console.log(`${c.Bright(c.BgGreen((`Q5: ${Math.round((((((15.50 * (5.6 + 3.4 + 7.1 + 8.0 + 0)) + ((15.50 * 1.5) * (7.7 + 4.0)))) * 100) * 100) / 100) / 100}   `)))}`); // rounds two places out
  console.log();
}

function allDailyLogic() {
  M12D07Y2022();
  M12D08Y2022();
  M12D09Y2022();
}

allDailyLogic();