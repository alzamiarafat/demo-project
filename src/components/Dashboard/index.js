import React, { Component } from 'react'
import SlideBar from '../Layout/SideBar/SideBar';


export default class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SlideBar />
                    <div className="col py-3">
                        <h3>Welcome Dashboard</h3>
                        <p className="lead">
                            An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
                            menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                    </div>
                </div>
            </div>
        )
    }
}
