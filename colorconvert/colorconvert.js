// ! hexToRGB(hex)
function hexToRGB(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

console.log(hexToRGB("#c0ffee"));

// ! rgbToHex(rgb)
function rgbToHex(r, g, b) {
  hexString = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return { hexString };
}

console.log(rgbToHex(192, 255, 238));
