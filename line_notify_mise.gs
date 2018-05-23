function onFormSubmit_mise(e){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  
  var row = sheet.getLastRow();
  
  var who = sheet.getRange(row, 2).getValue();
  var name = sheet.getRange(row, 3).getValue();
  var kind = sheet.getRange(row, 4).getValue();
  
  sendMessage(who + "さんが新しいお店を追加しました : " + name + " (" + kind + ")");
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
