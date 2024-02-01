import React from 'react';

export const noop = () => {};

export const insertAt = (arr, item, index) => {
    if(index===null||!(index in arr)) return [...arr, item];
    return [...arr.slice(0, index), item, ...arr.slice(index)];
}