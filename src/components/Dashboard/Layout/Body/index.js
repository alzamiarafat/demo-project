import React from 'react';
import { Card, Typography, Paper } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';


export default function index() {
    return (
        <>
            <Paper elevation={5} sx={{ marginTop: "20px" }}>
                <div>
                    <Card>
                        <h4><DashboardIcon /> Dashboard</h4>
                    </Card>
                    <div>
                        <Typography variant="h1" component="div">
                        </Typography>
                    </div>
                </div>
            </Paper>
        </>
    )
}
