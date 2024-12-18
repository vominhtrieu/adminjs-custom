import React from 'react';
import { Navigation } from '@adminjs/design-system';
import { useTranslation } from '../../../hooks/use-translation.js';
import allowOverride from '../../../hoc/allow-override.js';
import { useNavigationResources } from '../../../hooks/index.js';

/**
 * @alias SidebarResourceSectionProps
 * @memberof SidebarResourceSection
 */

/**
 * Groups resources by sections and renders the list in {@link Sidebar}
 *
 * ### Usage
 *
 * ```
 * import { SidebarResourceSection } from 'adminjs`
 * ```
 *
 * @component
 * @subcategory Application
 * @name SidebarResourceSection
 */
const SidebarResourceSectionOriginal = ({
  resources
}) => {
  const elements = useNavigationResources(resources);
  const {
    translateLabel
  } = useTranslation();
  return /*#__PURE__*/React.createElement(Navigation, {
    label: translateLabel('navigation'),
    elements: elements
  });
};

// Rollup cannot handle type exports well - that is why we need to do this hack with
// exporting default and named SidebarResourceSection
const SidebarResourceSection = allowOverride(SidebarResourceSectionOriginal, 'SidebarResourceSection');
export { SidebarResourceSection, SidebarResourceSectionOriginal as OriginalSidebarResourceSection };
export default SidebarResourceSection;