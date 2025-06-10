async function fetchSpecificLines(url, lineNumbers) {
    const response = await fetch(url);
    const text = await response.text();
    const lines = text.split('\n');
    const selectedLines = lineNumbers.map(lineNumber => {
        if (lineNumber > 0 && lineNumber <= lines.length) {
            return lines[lineNumber - 1]
        }
    }).filter(line => line !== null)
    return selectedLines;
}
fetchSpecificLines(url, lineNumbersToFetch)
  .then(selectedLines => {
    if (selectedLines) {
        selectedLines.forEach(line => console.log(line));
    }
  });