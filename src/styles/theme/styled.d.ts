import 'styled-components';

import { light } from './light';

declare module 'styled-components' {
  type Theme = typeof light;
  export interface DefaultTheme extends Theme {}
}
