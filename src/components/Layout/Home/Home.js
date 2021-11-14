import React from 'react';
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

const Home = () => {

    return (
        <div>
            <NavBar />
            <div className="container-fluid container">
                <div className="row flex-nowrap">
                    <div className="col py-3">
                        <h3>Welcome Home</h3>
                        <p className="lead">
                            An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
                            menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;