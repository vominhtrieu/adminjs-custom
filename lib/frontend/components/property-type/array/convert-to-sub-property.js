import { DELIMITER } from '../../../../utils/flat/constants.js';
export const getSubpropertyPath = (path, index) => [path, index].join(DELIMITER);
export const getIndexFromSubpropertyPath = subpropertyPath => {
  const [, index] = subpropertyPath.split(DELIMITER);
  return parseInt(index, 10);
};

/**
 * Converts property: PropertyJSON from an array to a sub-property for an actual item in the array
 * It change path that it has index inside along with the label. Futhermore flat isArray is removed
 * ,because it was already handled, so that itemRenderer can render property as a regular one
 *
 * @param {PropertyJSON}  arrayProperty property with path set to an root Array type property,
 * @param {Number}        index         index under which sub-property should be placed
 * @private
 * @hide
 */
export const convertToSubProperty = (arrayProperty, index) => ({
  ...arrayProperty,
  path: getSubpropertyPath(arrayProperty.path, index),
  label: `[${index + 1}]`,
  isArray: false,
  isDraggable: false
});