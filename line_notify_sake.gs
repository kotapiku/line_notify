function onFormSubmit(e){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  
  var row = sheet.getLastRow();
  
  var who = sheet.getRange(row, 2).getValue();
  var meigara = sheet.getRange(row, 4).getValue();
  var kind = sheet.getRange(row, 5).getValue();
  
  sendMessage(who + "さんが新しいお酒を追加しました : " + meigara + " (" + kind + ")");
}

function sendMessage(message){
  var url = "https://notify-api.line.me/api/notify";
  var token = "your token";
  var options = {
    "method" : "post",
    "payload" : "message= " + message,
    "headers" : {"Authorization" : "Bearer " + token}
  };
  UrlFetchApp.fetch(url,options);
}
