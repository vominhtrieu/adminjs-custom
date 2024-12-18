/* eslint-disable no-nested-ternary */
import uniq from 'lodash/uniq.js';
import merge from 'lodash/merge.js';
function mergeActionHooks(key, oldHook, newHook) {
  let hooks = [];
  if (oldHook) {
    if (Array.isArray(oldHook)) {
      hooks = [...hooks, ...oldHook];
    } else if (oldHook) {
      hooks = [...hooks, oldHook];
    }
  }
  if (newHook) {
    if (Array.isArray(newHook)) {
      hooks = [...hooks, ...newHook];
    } else if (newHook) {
      hooks = [...hooks, newHook];
    }
  }
  return hooks.length ? {
    [key]: hooks
  } : {};
}
const basicOptions = ['id', 'href', 'parent', 'sort', 'navigation', 'titleProperty', 'translations'];
const listOptions = ['listProperties', 'showProperties', 'editProperties', 'filterProperties'];
// The following check is done in typescript to ensure that the `basicOptions` and `listOptions`
// contains all the keys from ResourceOptions (+ actions and properties) which are copied
// separately. If type MissingKeys has any key following condition is not meet and typescript
// throws an error.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const hasMissingKeys = {};

/**
 * @name mergeResourceOptions
 * @function
 * @description
 * Merges 2 ResourceOptions together. Used by features
 *
 * - 'id', 'href', 'parent', 'sort' from `newOptions` override `oldOptions`
 * - 'listProperties', 'showProperties', 'editProperties', 'filterProperties'
 *   are joined and made unique
 * - all 'properties' from `newOptions` override properties from `oldOptions`
 * - all 'actions' with their parameters from `newOptions` override `oldOptions`
 *   except hooks and handler - which are chained.
 *
 * @param   {ResourceOptions}  oldOptions
 * @param   {ResourceOptions}  newOptions
 *
 * @return  {ResourceOptions}
 */
const mergeResourceOptions = (oldOptions = {}, newOptions = {}) => {
  const options = {
    ...oldOptions
  };
  basicOptions.forEach(propName => {
    if (propName in newOptions) {
      options[propName] = newOptions[propName];
    }
  });
  listOptions.forEach(propName => {
    if (propName in newOptions) {
      const mergedOptions = [...(oldOptions && propName in oldOptions ? oldOptions[propName] : []), ...(newOptions && propName in newOptions ? newOptions[propName] : [])];
      options[propName] = uniq(mergedOptions);
    }
  });
  if (oldOptions.properties || newOptions.properties) {
    options.properties = merge({}, oldOptions.properties, newOptions.properties);
  }
  if (oldOptions.actions || newOptions.actions) {
    options.actions = Object.keys(newOptions.actions || {}).reduce((memo, actionName) => {
      const action = (newOptions.actions || {})[actionName];
      const oldAction = memo[actionName];
      return {
        ...memo,
        [actionName]: {
          ...memo[actionName],
          ...action,
          ...mergeActionHooks('before', oldAction?.before, action?.before),
          ...mergeActionHooks('after', oldAction?.after, action?.after),
          ...mergeActionHooks('handler', oldAction?.handler, action?.handler)
        }
      };
    }, oldOptions.actions || {});
  }
  return options;
};

/**
 * @name buildFeature
 * @function
 * @description
 * Higher Order Function which creates a feature
 *
 * @param   {ResourceOptions}  options
 *
 * @return  {FeatureType}
 * @example
 * const { buildFeature } = require('adminjs')
 *
 * const feature = buildFeature({
 *   // resource options goes here.
 * })
 */
const buildFeature = (options = {}) => (admin, prevOptions = {}) => mergeResourceOptions(prevOptions, typeof options === 'function' ? options(admin) : options);
export { mergeResourceOptions, buildFeature };