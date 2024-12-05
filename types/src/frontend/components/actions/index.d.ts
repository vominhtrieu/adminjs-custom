export * from './new.js';
export * from './action.props.js';
export * from './edit.js';
export * from './show.js';
export * from './list.js';
export * from './bulk-delete.js';
export * from './utils/index.js';
export declare const actions: {
    new: import("react").ComponentType<import("./action.props.js").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props.js").ActionProps> | undefined;
    }>;
    edit: import("react").ComponentType<import("./action.props.js").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props.js").ActionProps> | undefined;
    }>;
    show: import("react").ComponentType<import("./action.props.js").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props.js").ActionProps> | undefined;
    }>;
    list: import("react").ComponentType<import("./action.props.js").ActionProps & {
        OriginalComponent?: import("react").ComponentType<import("./action.props.js").ActionProps> | undefined;
    }>;
    bulkDelete: import("react").ComponentType<{
        context?: import("react-redux/es/components/Context.js").ReactReduxContextInstance | undefined;
        store?: import("redux").Store | undefined;
    } & {
        OriginalComponent?: import("react").ComponentType<{
            context?: import("react-redux/es/components/Context.js").ReactReduxContextInstance | undefined;
            store?: import("redux").Store | undefined;
        }> | undefined;
    }>;
};
