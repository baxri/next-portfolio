import React, { Component } from 'react'
import Layout from "../components/Layout";
import Link from "next/link";

export default class Blog extends Component {
    render() {
        return (
            <Layout title="My Blog">
                <ul>
                    <li>
                        <Link as="post-react" href="/post?title=React"><a>React post</a></Link>
                    </li>
                    <li>
                        <Link as="post-angular" href="/post?title=Angular"><a>Angular</a></Link>
                    </li>
                    <li>
                        <Link as="post-vue" href="/post?title=Vue"><a>Vue</a></Link>
                    </li>
                </ul>
            </Layout>
        )
    }
}
