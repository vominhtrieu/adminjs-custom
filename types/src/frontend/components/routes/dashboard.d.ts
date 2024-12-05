import React, { ReactNode } from 'react';
type State = {
    isClient: boolean;
};
type PropsFromState = {
    dashboard: {
        component?: string;
    };
};
declare class Dashboard extends React.Component<PropsFromState, State> {
    constructor(props: PropsFromState);
    componentDidMount(): void;
    render(): ReactNode;
}
declare const _default: React.ComponentType<{
    key?: React.Key | null | undefined;
    ref?: React.LegacyRef<Dashboard> | undefined;
    context?: import("react-redux/es/components/Context.js").ReactReduxContextInstance | undefined;
    store?: import("redux").Store | undefined;
} & {
    OriginalComponent?: React.ComponentType<{
        key?: React.Key | null | undefined;
        ref?: React.LegacyRef<Dashboard> | undefined;
        context?: import("react-redux/es/components/Context.js").ReactReduxContextInstance | undefined;
        store?: import("redux").Store | undefined;
    }> | undefined;
}>;
export default _default;
