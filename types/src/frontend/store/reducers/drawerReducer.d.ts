import { SetDrawerPreRouteResponse } from '../actions/set-drawer-preroute.js';
export type DrawerInState = SetDrawerPreRouteResponse['data'];
export declare const drawerReducer: (state: DrawerInState | undefined, action: {
    type: string;
    data: DrawerInState;
}) => {
    previousRoute: Partial<ReturnType<typeof import("react-router").useLocation>> | null;
};
