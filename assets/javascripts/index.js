const fileInput = document.getElementById('shapefile-file');

fileInput.addEventListener('change', (e) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    shp(event.target.result).then((data) => {
      console.log(data)
      const convertedData = JSON.parse(JSON.stringify(data));
      convertedData.features = convertedData.features.map((f, i) => {
        // Caution: not a deep copy
        const featureCopy = Object.assign({}, f);
        const propCopy = f.properties;
        // Converts "available" strings to Boolean values
        if (Object.prototype.hasOwnProperty.call(f.properties, 'available') && (typeof f.properties.available) === 'string') {
          propCopy.available = (f.properties.available === 'true');
        }
        featureCopy.properties = propCopy;
        return featureCopy;
      });

      const output = document.getElementById('converted');
      const formatted = `<pre><code>${JSON.stringify(convertedData, 2)}</code></pre>`;
      output.innerHTML = formatted;
    });
  };
  reader.readAsArrayBuffer(e.target.files[0]);
});
