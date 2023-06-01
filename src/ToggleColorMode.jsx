import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ColorModeContext = createContext();

export default function ColorMode({ children }) {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
    },
  }), [mode]);
  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleColorMode }}>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      {children}
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}


export const themeSettings=(mode)=>{
const colors=tokens(mode);
return{
    palette:{
        mode:mode,
        ...(mode==='dark'?
        {
            primary:{
                main:colors.primary[500]
            },
            secondary:{
                main:colors.greenAccent[500],
            },
            netural:{
                dark:colors.grey[700],
                main:colors.grey[500],
                light:colors.grey[1000]
            },
            background:{
                default:colors.primary[500]
            }

        }:{
            primary:{
                main:colors.primary[100]
            },
            secondary:{
                main:colors.greenAccent[500],
            },
            netural:{
                dark:colors.grey[700],
                main:colors.grey[500],
                light:colors.grey[1000]
            },
            background:{
                default:"#fcfcfc"
            }
        }
        )
    },
    typography:{
        fonFamily:["Source Sans Pro", "Sans-serif"].join(","),
        fontSize:12,
        h1:{
            fonFamily:["Source Sans Pro", "Sans-serif"].join(","),
        fontSize:40,
        },
        h2:{
            fonFamily:["Source Sans Pro", "Sans-serif"].join(","),
        fontSize:32,
        },
        h3:{
            fonFamily:["Source Sans Pro", "Sans-serif"].join(","),
        fontSize:24,
        },
        h4:{
            fonFamily:["Source Sans Pro", "Sans-serif"].join(","),
        fontSize:20,
        },
        h5:{
            fonFamily:["Source Sans Pro", "Sans-serif"].join(","),
        fontSize:16,
        },
        h6:{
            fonFamily:["Source Sans Pro", "Sans-serif"].join(","),
        fontSize:14,
        },
    }
}
};