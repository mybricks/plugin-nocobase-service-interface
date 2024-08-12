import {createContext} from 'react';

export const DefaultPanelContext = createContext({
  addBlurAry: (key: string, blur: any) => {}
});
