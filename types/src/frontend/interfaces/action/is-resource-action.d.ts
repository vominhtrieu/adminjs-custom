import { ResourceActionParams } from '../../../backend/utils/view-helpers/view-helpers.js';
import { ActionJSON } from '../action/index.js';
import { DifferentActionParams } from '../../hooks/use-action/use-action.types.js';
export declare const isResourceAction: (params: DifferentActionParams, action: ActionJSON) => params is ResourceActionParams;
