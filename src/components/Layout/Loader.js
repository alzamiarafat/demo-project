import React, { Component } from 'react'

export class Loader extends Component {
    render() {
        return (
            <>
                <div class="spinner-border text-primary position-absolute top-100 start-50" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>

            </>
        )
    }
}

export default Loader
