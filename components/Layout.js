import React, { Component } from 'react'
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default class Layout extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="root">
                <Head>
                    <title>My Portfolio</title>
                </Head>
                <header>
                    <Link href="/"><a>Home Page</a></Link>
                    <Link href="/about"><a>About me</a></Link>
                    <Link href="/hireme"><a>Hire me</a></Link>
                    <Link href="/blog"><a>Blog</a></Link>
                </header>
                <h1>{this.props.title}</h1>
                {this.props.children}
                <footer>&copy; {new Date().getFullYear()}</footer>

                <style jsx>{`
                    .root{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }

                    header{
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        padding: 1em;
                        font-size: 1rem;
                        background: indigo;
                    }

                    header a{
                        color: darkgray;
                        text-decoration: none;
                    }

                    header a:hover{
                        color: lightgray;
                    }

                    footer{
                        padding: 1em;
                    }

                `}</style>


                <style global jsx>{`
                    body{
                        margin: 0;
                        font-size: 110%;
                        background-color: #f0f0f0;
                    }
                `}</style>
            </div>
        )
    }
}
