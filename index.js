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
  console.log(`${c.Bright(c.BgRed((`Q1: ${Math.round(((4.5 / 0.8) * (100 + 15) / 100) * 100) / 100}     `)))}`);
  console.log(`${c.Bright(c.BgGreen((`Q2: ${Math.round(((39 / (50 * 3) * 100) * 100) / 100) / 100}     `)))}`);
  console.log(`${c.Bright(c.BgGreen((`Q3: ${Math.round(((0.1536 / 3) * 24) * 10000) / 10000}   `)))}`);
  console.log(`${c.Bright(c.BgGreen((`Q4: ${Math.round(((1.3 * 5) + (1.5 * 12)) * 10) / 10}     `)))}`);
  console.log(`${c.Bright(c.BgGreen((`Q5: ${Math.round((((((15.50 * (5.6 + 3.4 + 7.1 + 8.0 + 0)) + ((15.50 * 1.5) * (7.7 + 4.0)))) * 100) * 100) / 100) / 100}   `)))}`);
  console.log();
}

function M12D12Y2022() {
  console.log(`${c.Bright("12/12/2022")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgGreen(100 - ((120 / 150) * 100) + "%      ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgGreen(Math.round((((2 / 45) * 100) * 100) / 10) / 10 + "%     ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(Math.round((67.43 * 1.25) * 100) / 100 + "    ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgRed((320 * 0.25) + "       ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgRed(Math.round((975.00 * 1.04) * 100) / 100 + "     ")}`);
  console.log();
}

function M12D13Y2022() {
  console.log(`${c.Bright("12/13/2022")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgRed(450 / 1.20 + " W    ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgRed(Math.round((85 / 1.12) * 100) / 100 + "    ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(Math.round((3 / 10) * 100) + "       ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgGreen(25 / 100 + "     ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgRed(313 * 1.69 + "   ")}`);
  console.log();
}

function M12D14Y2022() {
  console.log(`${c.Bright("12/14/2022")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgGreen(375.00 * (1.00 - 0.65) + "   ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgGreen(Math.round(((((87 / 114) * 100) * 100) * 100) / 100) / 100 + "    ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(100 - 44 + "       ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgGreen(50 * 0.08 + "        ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgRed((Math.round((12.1 / 37.8) * 10) / 10) * 100 + "       ")}`);
  console.log();
}

function M12D15Y2022() {
  console.log(`${c.Bright("12/15/2022")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgGreen(100 - ((520 / 650) * 100) + "       ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgGreen(Math.round(((12000 / 85000) * 100) * 10) / 10 + "     ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgRed(Math.round(17366 * (1.00 - 0.98)) + "      ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgRed(((3 / 4) * 0.01) * 100 + "     ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgGreen(((75 - 6) / 75) * 100 + "       ")}`);
  console.log();
}

function M01D03Y2023() {
  console.log(`${c.Bright("01/03/2023")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgRed(450 / 1.20 + "      ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgRed(Math.round(85 / 1.12) + "       ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen("30%" + "      ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgGreen("1/4" + "      ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgRed((975.00 * 1.04 + "     "))}`);
  console.log();
}

function M01D04Y2023() {
  console.log(`${c.Bright("01/04/2023")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgRed(Math.round((((375.00 / 1.45) * 100) * 100) / 100) / 100 + "   ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgRed(Math.round(((((87 / 114) * 100) * 100) * 100) / 100) /100 + "    ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(100 - 44 + "       ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgRed(Math.round(50 / 1.92) + "       ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgGreen(Math.round(((12.1 / 37.8) * 100) * 10) / 10 + "       ")}`);
  console.log();
}

function M01D05Y2023() {
  console.log(`${c.Bright("01/05/2023")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgGreen(1.75 * (1 + 3 + 5) + "    ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgRed(Math.round(((((200 * 1024) / 200) + 1) / (((1.5 * 2) * 105.80) / 2)) * 100) / 100 + "     ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(Math.round(((19.85 * 75) - 375.68) * 100) / 100 + "  ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgGreen(Math.round(((11.26 / 2) * 0.87) * 100) / 100 + "      ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgRed(Math.round((39.00 / 50) * 100) / 100 + "     ")}`);
  console.log();
}

function M01D06Y2023() {
  console.log(`${c.Bright("01/06/2023")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgGreen(Math.round(((75 - 6) / 75) * 100) + "       ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgRed((Math.floor(313000000 / (2.00 - 1.31)) + 313000000) + "")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(100 - 44 + "       ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgRed(Math.round(((12000 / 85000) * 100) / 10) * 10 + "       ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgGreen(Math.round(50 * 0.08) + "        ")}`);
  console.log();
}

function M01D09Y2023() {
  console.log(`${c.Bright("01/09/2023")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgGreen(Math.round((83 / 12) * 10) / 10 + "      ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgGreen(Math.round((560 + 1520 + 764 + 833) / 4) + "      ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(Math.round((((35.50) * (3 + 5.5 + 8.5 + 7 + 8)) / 5) * 100) / 100 + "    ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgGreen(Math.round(((15 * 10) + (10 * 15) + (5 * 30)) / (15 + 10 + 5)) + "       ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgGreen(Math.round((27 + 14 + 36) / 3) + "       ")}`);
  console.log();
}

function M01D10Y2023() {
  console.log(`${c.Bright("01/10/2023")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgGreen(Math.round((37 + 65 + 70 + 33 + 49) / 5) + "       ")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgGreen(Math.round((35 + 41 + 28) / 3) + "       ")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgGreen(Math.round(((100 * 2) + (95 * 1) + (80 * 3) + (75 * 1)) / (2 + 1 + 3 + 1)) + "       ")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgRed(Math.round((((1400.00 + 1312.50 + 1400.00 + 945.00) / 5) / 35) * 100) / 100 + "     ")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgGreen(Math.round(((2.3 + 1.8 + 2.1) / 3) * 10) / 10 + "      ")}`);
  console.log();
}

function allDailyLogic() {
  M12D07Y2022();
  M12D08Y2022();
  M12D09Y2022();
  M12D12Y2022();
  M12D13Y2022();
  M12D14Y2022();
  M12D15Y2022();
  M01D03Y2023();
  M01D04Y2023();
  M01D05Y2023();
  M01D06Y2023();
  M01D09Y2023();
  M01D10Y2023();
}

allDailyLogic();

// ----------------------
//  Daily Logic Template
// ----------------------
function M00D00Y2023() {
  console.log(`${c.Bright("00/00/2023")}`);
  console.log(`${c.Bright("Q1:")} ${c.BgYellow( + "")}`);
  console.log(`${c.Bright("Q2:")} ${c.BgYellow( + "")}`);
  console.log(`${c.Bright("Q3:")} ${c.BgYellow( + "")}`);
  console.log(`${c.Bright("Q4:")} ${c.BgYellow( + "")}`);
  console.log(`${c.Bright("Q5:")} ${c.BgYellow( + "")}`);
  console.log();
}