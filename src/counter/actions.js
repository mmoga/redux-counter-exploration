import * as types from './types';

export const incrementByAction = (num) => ({
    type: types.INCREMENT_BY,
    payload: {
        value: num
    }
});

export const decrementByAction = (num) => ({
    type: types.DECREMENT_BY,
    payload: {
        value: num
    }
});