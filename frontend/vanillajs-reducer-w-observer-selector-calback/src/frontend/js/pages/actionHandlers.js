export const setActiveItem = (state, action) => ({
    ...state,
    selected: action.payload,
});

export const toggleSubmenu = (state, action) => {
    const newItemState = { ...state.items[action.payload] };
    newItemState.active = !newItemState.active;
    return {
        ...state,
        items: {
            ...state.items,
            [action.payload]: newItemState,
        },
    };
};

export const defaultHandler = (state) => state;
