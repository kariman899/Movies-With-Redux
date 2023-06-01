import React, { useContext, useEffect, useState } from "react";
import { Brightness4, Brightness7, AccountCircle } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, IconButton, Toolbar, Button, InputBase,Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext } from "../ToggleColorMode";
import { useDispatch } from "react-redux";
import { getSearch } from "../Redux/ActionCreator";

export default function NavBar({query,setQuery}) {
  // const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter" && query.length > 1) {
  //     e.preventDefault();
  //     dispatch(getSearch(query, 1));
  //     setQuery("");
  //   }
  // };
  
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
                // onKeyPress={handleKeyPress}
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
