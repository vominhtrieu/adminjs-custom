import { findSubProperty } from './find-sub-property.js';
import { pathToParts } from '../../../../utils/flat/path-to-parts.js';
export const getPropertyByKey = (propertyPath, properties) => {
  const parts = pathToParts(propertyPath, {
    skipArrayIndexes: true
  });
  const fullPath = parts[parts.length - 1];
  const property = properties[fullPath];
  if (!property) {
    // User asks for nested property (embed inside the mixed property)
    if (parts.length > 1) {
      const mixedPropertyPath = parts.find(part => properties[part] && properties[part].type() === 'mixed');
      if (mixedPropertyPath) {
        const mixedProperty = properties[mixedPropertyPath];
        const subProperty = findSubProperty(parts, mixedProperty);
        if (subProperty) {
          return subProperty;
        }
      }
    }
  }
  return property || null;
};