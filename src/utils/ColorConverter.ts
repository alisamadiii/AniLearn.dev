function hexToRGB(hexCode: string) {
  // Remove the '#' symbol if present
  hexCode = hexCode.replace("#", "");

  // Split the hexadecimal code into red, green, and blue components
  var r = parseInt(hexCode.substring(0, 2), 16);
  var g = parseInt(hexCode.substring(2, 4), 16);
  var b = parseInt(hexCode.substring(4, 6), 16);

  // Return the RGBA color string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function hexToHSL(hexCode: string) {
  // Remove the '#' symbol if present
  hexCode = hexCode.replace("#", "");

  // Split the hexadecimal code into red, green, and blue components
  var r = parseInt(hexCode.substring(0, 2), 16) / 255;
  var g = parseInt(hexCode.substring(2, 4), 16) / 255;
  var b = parseInt(hexCode.substring(4, 6), 16) / 255;

  // Find the maximum and minimum values of r, g, and b
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);

  // Calculate the hue
  var h;
  if (max === min) {
    h = 0; // No saturation, so hue is arbitrary
  } else if (max === r) {
    h = ((g - b) / (max - min)) % 6;
  } else if (max === g) {
    h = (b - r) / (max - min) + 2;
  } else {
    h = (r - g) / (max - min) + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  // Calculate the lightness
  var l = (max + min) / 2;

  // Calculate the saturation
  var s;
  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = (max - min) / (max + min);
  } else {
    s = (max - min) / (2 - max - min);
  }
  s = Math.round(s * 100);

  // Return the HSL color string
  return "hsl(" + h + ", " + s + "%, " + Math.round(l * 100) + "%)";
}

function generateTailwindColorGradient(hexCode: string) {
  var gradientColors = [];

  // Remove the '#' symbol if present
  hexCode = hexCode.replace("#", "");

  // Split the hexadecimal code into red, green, and blue components
  var r = parseInt(hexCode.substring(0, 2), 16);
  var g = parseInt(hexCode.substring(2, 4), 16);
  var b = parseInt(hexCode.substring(4, 6), 16);

  // Calculate the step size for brightness
  var step = Math.floor(255 / 11);

  // Push the actual color as the first element in the gradient array

  // Generate 11 gradient colors
  for (var i = 1; i <= 11; i++) {
    var brightness = i * step;
    var newR = Math.min(Math.round(r * (brightness / 255)), 255);
    var newG = Math.min(Math.round(g * (brightness / 255)), 255);
    var newB = Math.min(Math.round(b * (brightness / 255)), 255);

    // Convert the RGB values to hexadecimal format
    var newHex = "#" + componentToHex(newR) + componentToHex(newG) + componentToHex(newB);

    // Generate the tailwindcss class using the color utility
    var tailwindClass = `${newHex}`;

    // Add the tailwindcss class to the gradient array
    gradientColors.push(tailwindClass);
  }

  gradientColors.push(`#${hexCode}`);

  return gradientColors;
}

// Helper function to convert a decimal component to hexadecimal
function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function getContrastTextColor(backgroundColor: string) {
  // Remove the '#' symbol if present
  backgroundColor = backgroundColor.replace("#", "");

  // Split the hexadecimal code into red, green, and blue components
  var r = parseInt(backgroundColor.substring(0, 2), 16);
  var g = parseInt(backgroundColor.substring(2, 4), 16);
  var b = parseInt(backgroundColor.substring(4, 6), 16);

  // Calculate the relative luminance (perceptual brightness) using the formula
  // See: https://www.w3.org/TR/WCAG20/#relativeluminancedef
  var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return 'white' for dark backgrounds, 'black' for light backgrounds
  return luminance > 0.5 ? "black" : "white";
}

export { hexToRGB, hexToHSL, getContrastTextColor, generateTailwindColorGradient };
