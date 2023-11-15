import { createContext } from 'react'
import { getAppliedTheme } from '../lib/theme'
import { Pak } from '../lib/pak'

const nullPage: PageContextState = {
  page: {
    ov: 'pakrypt.page:main',
  },
  setPage: () => {},
}

export const PageContext = createContext(nullPage);
export const PakContext = createContext(null as null | Pak) // See also: The PakContextProvider component. TODO make sure this exists.
export const ThemeContext = createContext(getAppliedTheme()) // See also: The ThemeContextProvider component. TODO make sure this exists still.
