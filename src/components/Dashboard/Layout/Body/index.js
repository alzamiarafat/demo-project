import React from 'react';
import GroupIcon from '@mui/icons-material/Group';
import { Card, Typography, Paper } from '@mui/material';

export default function index() {
    return (
        <>
            <Paper elevation={5} sx={{ marginTop: "20px" }}>
                <div>
                    <Card>
                        <h4><GroupIcon /> Users</h4>
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
