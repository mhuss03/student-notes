export async function ParsedData(dataCsv) {
  const rows = dataCsv.split("\n");
  const result = [];

  const headers = rows[0].split(",");

  for (let i = 1; i < rows.length; i++) {
    const obj = {};
    const values = rows[i].split(",");

    headers.forEach((header, index) => {
      obj[header.trim()] = values[index].trim();
    });
    result.push(obj);
  }
  return result;
}
