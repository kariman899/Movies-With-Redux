import React, { useContext, useEffect, useState } from "react";
import { Brightness4, Brightness7, AccountCircle } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Button, InputBase,Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext } from "../ToggleColorMode";
import { useDispatch } from "react-redux";
import { getSearch } from "../Redux/ActionCreator";

export default function NavBar({query,setQuery}) {
  // const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(query?.length>2)
      dispatch(getSearch(query, 1));
  },[query])

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        
            <Box display="flex" justifyContent="center" 
            alignItems="center" borderBottom= "1px solid #fff" >
              <SearchIcon />
              <InputBase
              sx={{ml:1,color:"#fff"}}
                type="text"
                value={query}
                onChange={(e) => {e.preventDefault();setQuery(e.target.value)}}
                placeholder="Search…"
              />
           
          </Box>

          <Button color="inherit" onClick={() => {}}>
            Login <AccountCircle sx={{ ml: 1 }} />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
