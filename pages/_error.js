import React, { Component } from 'react'
import Layout from "../components/Layout";

export default class Error extends Component {
    render() {
        return (
            <Layout title="Error!!!">
                <p>Could't get this page, sorry!</p>
            </Layout>
        )
    }
}
