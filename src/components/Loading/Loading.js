import React, { Component } from "react";

import { ProgressBar } from "react-bootstrap";

class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 100,
        };

    }

    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render() {
        const { children, loaded } = this.props;

        return loaded ? children : (
            <React.Fragment>
                <ProgressBar
                    now={this.state.progress}
                    label={`${this.state.progress}%`}
                />
            </React.Fragment>
        );
    }
}

export default Loading;