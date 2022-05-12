import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        PAGALEVE
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUsAAABECAMAAAA/SOfNAAAB+1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP76cAAAAAAAAAAAAAAAAR8qoS8qoAAAAS8qoR8akP758P76oR8qkP768R8akS86oAAAAAAAAS8akR8an/NPIR8qr/NPIQ8KgQ8akAAAD/NPAR8aoR8qsQ8qr/L+8P76X/M/L/N+8S8akS8Kj/Ne/9NfH/Mu8R8Kj9NfET76cR8aoP86v/L+8P76gR8Kn9NPAS8aj/MvH/M+8S8qn/P+8U8qoS8ar/NPAT8qz/Ofb/NPET86sS8aoS8an/NPH9NPH/NfAQ8af/NfER8aj/M/EP76f9NPL/M+8S86wR8KoQ9qwP8qgP76T8NPEQ8qcS9Kv9NPH/NPER8an9NfEP96/9NPAP8akSvqeGcsyQM8uuNNb9NfD/NPFtp8T9NPH9NPCle9X/NfIu2rL9NPDWNeT9NPDWVOXPM98SkqV+mcsAAAAS8qr+NfESMqEwM6vgNOeIM8kvMqshMqbhNefDNN0SqqbvNexcM7p5M8SINMkS2qnRNOISSqISbqQ+M7AShqTvNOxNM7XwNex5NMQSwqgSnqYSVqISkqUS5qkStqeXM84SPqISYqMgMqa1NNilM9PSNOJqM79NMrUhM6Yhtqw+MrASeqQheqkSzqjlVCcDAAAAenRSTlMAQH9gnxDvvyDfH4/PX68wIG8/gFCf73Df3xAwjxC/b5BP74Cfzz9/X6B/z48/IFBPIL9/MN9goO9Ar0AQcI/PcG9A7xA/cJ9QH79AYF/fz49vv89fQJ9Qb5AfUDBwT1/fz6+/IJ+A77/v77+vT++/gI9/r7/fv1Dfz/Qj3a8AAApOSURBVHja7Zz5f9u2GcYpiSABkyJ1OT6TzUntXF2aNOeapF3SdF3vbuva3fd934ds17mbZEmzdj3Xbmt3/5kjBEgPyRdAFc+e7Xz0/BKRAF+KX7548eIVYu/uVjsQ3BtpLcS73W7kjbQWqmQsfW+kEcsRy5y+efLk9IjlGqgxu20x0/xXGoa2XfPbFufHvzBiOZQ+vtjX5H2lpunPDZoaI5YfrOOLOe0popxHy+QXRyw/SLskqJ2zTz01PiU/fSbfNp7HPDk9YulWQ2LarT4+gLEMzND4iKVb4wql0v3ZwY5B08xiSdMjlk5lM/jU4GC7HOazfY+dLLP80FZnyThnq7QJC9zWNlNENLMN88/8YlmzW5kla4ZBVyqM0sL5CjVgbmM1X3SlYr9j6v1EhugjHnQ6O364oYIl0fjWZcnDbk6ijoagG3pUtI21A6MF6BOKJXSvmrGRdN4VLNvdkhKuW6LswOaZkv+Y/txRJCFRsYxxaPv+7MzXvYYc7HdLvORx//nDMNRMhB7oNTnq7WaE/vxhaqHbpnOPnLkhRXF2ctGgxtZkyYWKky0177R01NOjVFgdM0SnvcpCkymDNQGYpTH9scKZjwLeXZFfMtHjwHNw/a5UOnDM2O6W8ErR8qCJwABzhix2vMNmlDsbW5NlD1x1cIjoJ9jAMeseFc5P9F6G7F10djg0yGGxg5Sdas/QORjuatMwaR5fzZ0oyxpQ5pRKmMmgg6BGcJqjbxmmwBcgix2k7ES7h8LYVMEoTurchqiZqC5+3Qq0EsXy+wdhVLHfKcGdXCxlr8iACm4VwzGNbukTaECMl0QWO0jZy/q0y4OEihzcD7qQz02Uwi4UqC7trkBXmsjhDkUzkDYTiJSyrCkQVIkctwiMDreUtyDPood+MDB96NixF454M3QEny6jnGp45144duysdcJjhiTOZ545YwbNjFAKxzEnclxlgWOgrTIUSIJmGIhgick4LyBi6GN1ywjWoHIK8KWvLUkdff53/5GLHTK95/TWT3/2qV7nE88fsuS0SOLiUABDXqkYdIn7xBKGJ88ncoGQVpQmPD/PkhvMCC7ZhIQlNwdDEKSOWQ6isZ7yqZr9+xyScLSuvfPu7d/+5uw5D9qvId54+/Xbt25eR9+jR4zfqqKTOBUE2ZyPjLjocUHUYipJC1WXWo6lTuTi5lghFWznWaaKX6LMsFqilyFGlp28cYrLxwNMWNyS2d4Gms4dXYKuvry8vPxS9uHpZx5//If3SP3637fefePmO8s9/XEpryMmloFKhwtJHDwTDCKGLi3R1Vf6ea8M6h5UVV4Klpymi8pMiSUur3KjZK8YFwSs7JZoC7lZQoWJewp4Ll3MiP2pcOry8kAvvlpoOXrKwBKZRxFDzPDEeUxYDXfx5BO4okQKLHuHTcOdjCz9rlMi9wRV4pYaq1tj3iGgAbnLhVPf66P8+6VS532UJUWJ1A5PFWDIgwJY8gA5MYU5hipFnZixs3TLI44JtxyOZavvltD1DNqFlcKplzTL75f7njCxBEqoiq/IlTsRJWBpS+TSACy55U7R6ljGHnFMuOVwLLn3zFJZr2TUXi6cuXqxh/L6EtFjhKUlPuMr+pZJgAWKpSuRq4Klb1k9M2FnKUKbkALDMeGWOAisFpKW51E+V1/MuJ0vnDovUb6yRHWQEKPjDl+RcKKgfHciFwxYCpuZmpll0+TGjrdOV+gp7FpkAPRe5oYXC2dW5LxzaQiW7iSuggTE5pi+O5Gr9lki8SEyzuO4wC04Jl2gB6rBrqcNhK5l6AjLyziEFggwCgp+EemwOOdR6SbfncjxPssIHlNWVGaJN8XvyDHhlmhoeg49SgGt/DnzwsKZ38v56KqBJf0aFBRGSKJ9jtlx+5pA4pklNMsQrltWjbJE4BjeMWndqIljs84SPn+4QJLyvy73UniibxlYpvalQawHirEDliY1RCzzKlW/EksXsobEZ1PdnLUjbnZM0Ut0IBZYvljN13a/UQb0PpLyPF3MR9AB45OapV+q491WwNI2fgfrcTEUy1RbRDDnpsgijI5JfwCaML+O9mCoHThR5HMe8wzip9Jlkqr/31kmQ7LExxhlxhJMLFZNERNuCcWmZUati45HvloOjct/KdHVurjiROke4/oJxXBjPHKNcXfYxYyNYhjcSqS09heZImZTmaFV3+4EeRlwjwO5+WflApJy0FUqpvAPLVirV1SYUGK761Y1y9Qx9wT6ch+QLHMP1lsV3AAFYxSb4bmkrtCir1sqxp0rolxSPHDmB5rQPzHJgC50rQ/yWUrSnRP5OqGI1L+uq5kxkcMEMuZKvVEnx2Iq7JRW69VKJe00/UAdMfNtqFtiISmiToVXapGyQALHwplfPGQKln8DyV4J6cc/efbgKfsIpBQw2lKMQFvu6COvN8nP5+qB3UxYpBIw/AJbVmR7H3BLWmCBdNmP6uevvf3mrV/+igZLqZtv/Ov2lX/8yJ3mWtwFuRoLbKD8AcumjTfHejy2hZN20aM6Qh6zYjEVEi33e6ViUdFCgFFGdmp8Mvtw6rGFhYPPPXdm377vvvn6lStXvvPajRtkU7CNZcAtb7M+GGeC2Tj5A94TJtxgaTejWYJeUPC9lh7aKFmbVA2ou8EifDOumofhtNzv8iChW9IOJ0vUcMmYEbkQFtnGjo8pIzX83geWTNAZSp8mXl2e61pNP1N1zoDBdhGxEGUWovqYa2fwFKFL9G0nS6mk/CX35utHE9g0QndN+SAiOI0TYOl1TMGOxZg1NlK7JMoGoUt1n5slwcBKSZw6ZMYfJn19bNja2MaPAaj6Jpy+kY1n2QAm0DXq4YaLpYqZbUcSx4QmhS4KQHFnAFJBbCoQIViymJgJeng3nCX2/tMt/zRkulYle/VAr1c4T2s60seMxkbhd9KsS1N7cxWVCMTGsJlZ4Z1IX5H6YClhajO4k+RPWG7o3n9s+X9wygRz2sVSZcTOJI5JJCS1AEusKAqKuQeWapgTVb2NZol9wdB8zwNnhtwXDJba79xJXE3QfJcFmKAMqWBQRZ3IaqalzPgbBxJ7/+lUdHr4zayoE9XC3POBj5Em8rxOKHEVU0OQZB5YQrWYmOGJ7Lthonv/nxzspb73jllK8bkoCcMEKRgVr0XyJ8DIlee1qtKK35SUwNJopk7NbPwYxxII/wmgqFkny/US7rDJtR17/7EEsi1+9mzMk6Juucn1gNr7j4Mp+38CaKw7S+baULaJBWAa5vTx0hLoMAmX68yyjfo3WUYmmx6lnmMmP3vyydltZAl0f3Fr8LqyxA8atsL9FtBx4w5/Mv/snFnXmcFa5MSe862gw+C1pzw1jQ/2/jfWd5Z1FDm52EJ/b6gxvrNHcve0qW1/1rLjy04EmBnWwDFDU0FNcG/LaOaRRz7vrVq1aA0eFRuDDQW1ujfSnSoqVzA7QpUuRhpeqMUrmqk84LIwN/rjbKsVCmpCBPKf0d9fXLVoQS3oeCOtVrwquoWi20j/i+aiMMg4xlFr85P8L7eK+6SKpgLiAAAAAElFTkSuQmCC' />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
