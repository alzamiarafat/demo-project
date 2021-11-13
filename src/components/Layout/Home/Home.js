import React from 'react';
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import Test from '../../../test';

const Home = () => {

    return (
        <div>
            <NavBar />
            <div class="container-fluid container">
                <div class="row flex-nowrap">
                    <div class="col py-3">
                        <h3>Welcome Home</h3>
                        <p class="lead">
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