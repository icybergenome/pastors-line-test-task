import { createSelector } from 'reselect';

const homeSelector = state => state.home;

export const getHome = createSelector(homeSelector, home => home);
