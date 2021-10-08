import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { blue, yellow } from "@mui/material/colors"
import { Link } from "react-router-dom"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}))

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: yellow[500],
        },
    },
})

export default function ButtonAppBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 3 }}
                        >
                            News
                        </Typography>
                        <Grid
                            style={{
                                width: 350,
                                padding: 0,
                                marginRight: 15,
                            }}
                            columnSpacing={3}
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <div className="Link__nav">
                                    <Link
                                        to="/"
                                        style={{
                                            paddingLeft: 0,
                                            marginLeft: 0,
                                            padding: 0,
                                            textDecoration: "none",
                                        }}
                                    >
                                        <Item style={{ margin: 0 }}>Home</Item>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="Link__nav">
                                    <Link
                                        to="/about"
                                        style={{
                                            padding: 0,
                                            textDecoration: "none",
                                        }}
                                    >
                                        <Item style={{ margin: 0 }}>About</Item>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="Link__nav">
                                    <Link
                                        to="/product"
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        <Item>Product</Item>
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="Link__nav">
                                    <Link
                                        to="/category"
                                        style={{
                                            margin: 0,
                                        }}
                                    >
                                        <Item>Category</Item>
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                        <Button
                            color="inherit"
                            style={{
                                backgroundColor: yellow[500],
                                color: "#000",
                            }}
                        >
                            LogOut
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}
