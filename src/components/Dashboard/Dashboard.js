import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SlideBar from '../Layout/SideBar/SideBar';


export default class Dashboard extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <SlideBar />
                    <div class="col py-3">
                        <h3>Welcome Dashboard</h3>
                        <p class="lead">
                            An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
                            menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                    </div>
                </div>
            </div>
        )
    }
}
