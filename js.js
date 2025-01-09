function createTwoWayTable(data, rowCategory, colCategory) {
    // 1. Create a unique set of row and column categories
    const uniqueRows = [...new Set(data.map(item => item[rowCategory]))];
    const uniqueCols = [...new Set(data.map(item => item[colCategory]))];
  
    // 2. Initialize an empty table
    const table = [];
    for (let i = 0; i < uniqueRows.length + 1; i++) {
      table[i] = new Array(uniqueCols.length + 1).fill(0);
    }
  
    // 3. Fill in the row and column headers
    table[0][0] = ""; // Top-left cell
    for (let i = 0; i < uniqueRows.length; i++) {
      table[i + 1][0] = uniqueRows[i];
    }
    for (let i = 0; i < uniqueCols.length; i++) {
      table[0][i + 1] = uniqueCols[i];
    }
  
    // 4. Populate the table with frequencies
    for (const item of data) {
      const rowIndex = uniqueRows.indexOf(item[rowCategory]) + 1;
      const colIndex = uniqueCols.indexOf(item[colCategory]) + 1;
      table[rowIndex][colIndex]++;
    }
  
    return table;
  }
  
  // Example usage
  const data = [
    { gender: 'Male', ageGroup: '18-25' },
    { gender: 'Female', ageGroup: '18-25' },
    { gender: 'Male', ageGroup: '26-35' },
    { gender: 'Female', ageGroup: '26-35' },
  ];
  
  const table = createTwoWayTable(data, 'gender', 'ageGroup');
  
  // Output the table (you can customize this part)
  console.log(table[0][1]+"what"); 
  