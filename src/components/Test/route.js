import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import List from './list';


export class route extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="list" element={<List />} />
                </Routes>
            </div>
        )
    }
}

export default route
