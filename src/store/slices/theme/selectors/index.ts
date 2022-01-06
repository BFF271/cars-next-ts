import { ReduxStore } from '@store/types';

export const selectThemeType = (store: ReduxStore) => store.theme.themeType;
