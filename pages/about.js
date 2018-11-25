import React, { Component } from 'react'
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "../pages/_error";

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/baxri');
        const statusCode = res.status == 200 ? true : false;
        const user = await res.json(res);

        return { user, statusCode };
    }

    render() {

        const { user, statusCode } = this.props;

        console.log(statusCode);

        if (statusCode == false) {
            return <Error />
        }

        return (
            <Layout title="About me">
                <p>{user.name}</p>
                <img src={user.avatar_url} height="200" />

            </Layout>
        )
    }
}
