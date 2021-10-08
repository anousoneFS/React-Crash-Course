import * as React from "react"
import { Container, Grid, Button } from "@mui/material"

export default function ResponsiveGrid() {
    return (
        <Container
            maxWidth="sm"
            className="Demo"
            disableGutters
            // style={{ padding: 0, margin: 0 }}
        >
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                // columnSpacing={4}
            >
                <Grid item md="2" style={{ margin: 0 }}>
                    <Button variant="contained" style={{ margin: 0 }}>
                        submit1
                    </Button>
                </Grid>
                <Grid item md="2" style={{ margin: 0 }}>
                    <Button variant="contained" style={{ margin: 0 }}>
                        submit2
                    </Button>
                </Grid>
                <Grid item md="2">
                    <Button variant="contained">submit3</Button>
                </Grid>
            </Grid>
            {/* <Box
                style={{ height: 180, backgroundColor: "#f4f4f4" }}
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <p
                    style={{
                        backgroundColor: "#f00",
                        textAlign: "center",
                        color: "#fff",
                        margin: 0,
                    }}
                >
                    item1
                </p>
                <p
                    style={{
                        backgroundColor: "#f00",
                        textAlign: "center",
                        color: "#fff",
                        margin: 0,
                    }}
                >
                    item2
                </p>
                <p
                    style={{
                        backgroundColor: "#f00",
                        textAlign: "center",
                        color: "#fff",
                        margin: 0,
                    }}
                >
                    item3
                </p>
            </Box> */}
        </Container>
    )
}
