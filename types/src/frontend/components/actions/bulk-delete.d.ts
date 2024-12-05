import React from 'react';
declare const FormattedBulkDelete: import("react-redux").ConnectedComponent<any, {
    context?: import("react-redux/es/components/Context.js").ReactReduxContextInstance | undefined;
    store?: import("redux").Store | undefined;
}>;
declare const OverridableFormattedBulkDelete: React.ComponentType<{
    context?: import("react-redux/es/components/Context.js").ReactReduxContextInstance | undefined;
    store?: import("redux").Store | undefined;
} & {
    OriginalComponent?: React.ComponentType<{
        context?: import("react-redux/es/components/Context.js").ReactReduxContextInstance | undefined;
        store?: import("redux").Store | undefined;
    }> | undefined;
}>;
export { OverridableFormattedBulkDelete as default, OverridableFormattedBulkDelete as BulkDelete, FormattedBulkDelete as OriginalBulkDelete, };
