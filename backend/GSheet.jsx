// googleSheets->Extensions->App Script
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1TWgzGm3sW6h8KKGPbkEo-8hmGQD9dDLlWupsnluvr6s').getSheetByName('Reg');
    const params = e.parameter;

    // Append the data to the sheet
    sheet.appendRow([params.Name, params.Email]);
    
    return ContentService.createTextOutput('Data successfully added to Google Sheet');
  } catch (error) {
    return ContentService.createTextOutput(`Error: ${error.message}`);
  }
}

