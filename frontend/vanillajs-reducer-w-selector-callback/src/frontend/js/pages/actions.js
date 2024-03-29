import { SET_ACTIVE_ITEM, TOGGLE_SUBMENU } from './actionTypes';

export const setActiveItemAction = (payload) => {
    if (!payload || typeof payload !== 'string') {
        throw new Error('Invalid payload for SET_ACTIVE_ITEM');
    }
    return { type: SET_ACTIVE_ITEM, payload };
};

export const toggleSubmenuAction = (payload) => {
    if (!payload || typeof payload !== 'string') {
        throw new Error('Invalid payload for TOGGLE_SUBMENU');
    }
    return { type: TOGGLE_SUBMENU, payload };
};

