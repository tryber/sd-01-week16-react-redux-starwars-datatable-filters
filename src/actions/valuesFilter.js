
export const updatingValuesFilter = (filters, columns) => {
    return {
        type: "UPDATE_VALUE_FILTER",
        filters,
        columns,
    }
}
