function convertToCSV(objArray) {
    return 'question,context,answer \n '+objArray.map(e => [e.question, e.context, e.answer]).map(e => e.join(",")).join("\n");
  }
  
  function exportCSVFile(items, fileTitle) {

    const jsonObject =items;
    const csv = convertToCSV(jsonObject);
    console.log(csv)
    const exportedFilenmae = fileTitle + '.csv' || 'export.csv'; // eslint-disable-line
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  
