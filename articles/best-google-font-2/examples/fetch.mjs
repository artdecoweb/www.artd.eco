/**
 * Download a resource with XHR.
 * @param {string} address The address to load.
 * @param {function(string)} cb The callback to call on complete.
 * @param {string} [marker] Performance annotation.
 */
function fetchStylesheet(address, cb, marker = '') {
  performance.mark('xhr-start'+marker)
  const xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(xhr.responseText)
        performance.mark('xhr-end'+marker)
        performance.measure('xhr'+marker, 'xhr-start'+marker, 'xhr-end'+marker)
      } else {
        console.error('Error loading webfont: server responded with code %s at %s',
          xhr.status, address)
      }
    }
  }
  xhr.open('GET', address)
  try {
    xhr.send(null)
  } catch (err) {
    console.error(err)
  }
}