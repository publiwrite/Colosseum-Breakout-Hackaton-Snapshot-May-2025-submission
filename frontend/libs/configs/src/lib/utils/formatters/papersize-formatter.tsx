enum Units {
  Inches = 'inches',
  Centimeters = 'centimeters',
  Millimeter = 'millimeter',
}

type UnitTypes = `${Units}`;

/**
 * NOTE: Update this when adding new units
 */
const unitConversion: {
  [key in UnitTypes]: { [subKey in UnitTypes]?: number };
} = {
  inches: {
    centimeters: 2.54,
    millimeter: 25.4,
  },
  centimeters: {
    inches: 0.393701,
    millimeter: 10,
  },
  millimeter: {
    inches: 0.0393701,
    centimeters: 0.1,
  },
};

/**
 * NOTE: Update this when adding new units
 */
const unitSymbols: { [key in UnitTypes]: string } = {
  inches: '"',
  centimeters: 'cm',
  millimeter: 'mm',
};

/**
 * Converts a value from any supported unit to millimeters
 */
const toMM = (value: number, fromUnit: string) => {
  if (fromUnit === 'millimeter') return value;
  if (fromUnit === 'centimeters') return value * 10;
  if (fromUnit === 'inches') return value * 25.4;
  return value;
};

export const calculatePaperDimensions = (
  width: number,
  height: number,
  unit: string,
) => {
  const widthMM = toMM(width, unit);
  const heightMM = toMM(height, unit);

  // Container dimensions (accounting for padding)
  const maxWidth = 176; // px-11 = 88px * 2 = 176px
  const maxHeight = 108; // h-36 - py-[18px] = 144px - 36px = 108px

  // Calculate base scale to fit within container
  const baseScale = Math.min(maxWidth / widthMM, maxHeight / heightMM);

  // Using square root to make smaller sizes relatively larger while maintaining order
  const enhancedScale = Math.sqrt(baseScale) * 0.6;

  const scaledWidth = Math.round(widthMM * enhancedScale);
  const scaledHeight = Math.round(heightMM * enhancedScale);

  const minDimension = 40; // minimum size in pixels
  const finalWidth = Math.max(scaledWidth, minDimension);
  const finalHeight = Math.max(scaledHeight, minDimension);

  return {
    width: finalWidth,
    height: finalHeight,
  };
};

export const PapersizeFormatter = (
  x: number,
  y: number,
  valueUnit: `${Units}`,
  outputUnit: `${Units}`,
) => {
  // cross converter to each using unitConversion
  const convertedValueX = x * (unitConversion[valueUnit][outputUnit] || 1);
  const convertedValueY = y * (unitConversion[valueUnit][outputUnit] || 1);

  // check if fraction digits are needed, if integer no need to show fractions
  const newValueX =
    convertedValueX % 1 === 0 ? convertedValueX : convertedValueX.toFixed(2);
  const newValueY =
    convertedValueY % 1 === 0 ? convertedValueY : convertedValueY.toFixed(2);

  return `${newValueX}${unitSymbols[outputUnit]} x ${newValueY}${unitSymbols[outputUnit]}`;
};
