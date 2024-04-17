function download() {

  appSetBusy(true);

  apiGet_Product();

}


function convertToBase64(binaryData) {
  var binaryString = String.fromCharCode.apply(null, binaryData);
  return btoa(binaryString);
}

function DownloadExcel(fileExcel) {
    // Decode the base64 string
    //console.log(fileExcel);
    var decodedBase64 = atob(fileExcel);
    //console.log(decodedBase64);

    // Convert the decoded base64 string to a Uint8Array
    var data = new Uint8Array(decodedBase64.length);
    for (var i = 0; i < decodedBase64.length; i++) {
        data[i] = decodedBase64.charCodeAt(i);
    }

  // Convert the workbook to a Blob
  var excelBlob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  // Create a temporary link element and set its attributes
  var link = document.createElement('a');
  link.href = URL.createObjectURL(excelBlob);
  link.download = 'TestExcel_Dummy.xlsx';

  // Simulate a click on the link to initiate the download
  link.click();
}

function CreateExcelData() {

  // Create a new workbook
  const workbook = new ExcelJS.Workbook();

  // Create a new worksheet
  const worksheet = workbook.addWorksheet('Test Excel');

  // Add header to the worksheet
  worksheet.getCell('A1').value = 'Id';
  worksheet.getCell('B1').value = 'Product Name';
  worksheet.getCell('C1').value = 'Description';
  worksheet.getCell('D1').value = 'Price';
  worksheet.getCell('E1').value = 'Stocks';
  worksheet.getCell('F1').value = 'Category';

  // Config Cell
  for (let x = 1; x <= 6; x++){
    worksheet.getCell(convertNumberToAlphabets(x) + '1').font = {
      name: 'Comic Sans MS',
      size: 12,
      bold: true
    };  
  }

  var position = 1;

  var DataProduct = modelModelObject_Product.getData();
  
  for(let data of DataProduct) {
    position = position + 1;
    // Add data to the worksheet
    worksheet.getCell('A' + position).value = data.id;
    worksheet.getCell('B' + position).value = data.ProductName;
    worksheet.getCell('C' + position).value = data.Description;
    worksheet.getCell('D' + position).value = data.Price;
    worksheet.getCell('E' + position).value = data.Stock;
    worksheet.getCell('F' + position).value = data.Category;
  }

  // Save the workbook to a buffer
  var buffers = "";
    
  workbook.xlsx.writeBuffer()
    .then((buffer) => {
      console.log('Excel file exported successfully');
      buffers = convertToBase64(buffer);
      DownloadExcel(buffers);
    })
    .catch((error) => {
      console.error('Error exporting Excel file:', error); 
  });

  appSetBusy(false);
}

function convertNumberToAlphabets(num) {
 const alphabets = [];
 const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

 while (num > 0) {
    alphabets.unshift(characters[num % 26 - 1]);
    num = Math.floor(num / 26);
 }

 return alphabets.join('');
}