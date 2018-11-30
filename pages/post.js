import React, { Component } from 'react'
import Layout from "../components/Layout";
import { withRouter } from "next/router";

class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        // const { router } = this.props;

        return (
            <Layout title="sdfsdf">
                <p>Cupidatat reprehenderit qui cillum cillum laborum esse aute est ullamco ipsum ea.
                Elit aliquip sunt mollit qui ad ullamco ea mollit tempor cillum anim nostrud exercitation
                officia. Pariatur et aliquip officia non duis ipsum reprehenderit qui eu irure.</p>
            </Layout>
        )
    }
}

export default withRouter(Post);
