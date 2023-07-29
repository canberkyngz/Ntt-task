import React from "react";
import { Stack } from "@mui/material";
import "../Application.css";
import logo from "../image/Frame.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <header className="header mt-4 flex flex-col items-center bg-white">
        <div className="top-menu" class="w-5/6 ">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <img src={logo} alt="Logo" className="logo" />
            <Paper
              component="form"
              className="search-input w-4/6 flex
    justify-between"
            >
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                className="grow shrink"
                // sx={{ width: "75%" }}
              />
              <Button
                className="items-end"
                sx={{
                  backgroundColor: "#F4F5F6",
                  "&:hover": {
                    backgroundColor: "F4F5F6", // Hover durumunda aynı arka plan rengini kullanarak hover'ı kaldırıyoruz.
                  },
                }}
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />}
              >
                Categories
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Laptop</MenuItem>
                <MenuItem onClick={handleClose}>Tablet</MenuItem>
                <MenuItem onClick={handleClose}>Mobile</MenuItem>
              </Menu>
            </Paper>
            <Button
              type="submit"
              sx={{
                p: "10px",
                backgroundColor: "#1D5D9B",
                marginLeft: 3,
                width: "120px",
                "&:hover": {
                  backgroundColor: "#1D5D9B", // Hover durumunda aynı arka plan rengini kullanarak hover'ı kaldırıyoruz.
                },
              }}
              aria-label="search-button"
            >
              <SearchIcon htmlColor="white" />
            </Button>
          </Stack>
        </div>
        {/* Divider için div elemanı ekliyoruz */}
        <div className="w-full">
          <div className="border-t border-gray-500 my-4"></div>
        </div>
        <div className="bottom-menu">
          <Stack className="menu-list" direction={"row"} spacing={0.4}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
          </Stack>
        </div>
      </header>
    </div>
  );
}

export default Header;
