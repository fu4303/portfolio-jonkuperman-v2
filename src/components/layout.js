import React from 'react';
import { Link } from 'gatsby';
import Footer from './footer';
import Intro from './intro';
import MustReads from './mustReads';
import TableOfContents from './tableOfContents';
import './layout.css';

const Layout = ({ location, title, tableOfContents, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    let header, sidebar;

    if (location.pathname === rootPath) {
        header = <Intro />;
        sidebar = <MustReads />;
    } else {
        header = (
            <h3>
                <Link to={`/`}>{title}</Link>
            </h3>
        );
        sidebar = <TableOfContents contents={tableOfContents} />;
    }

    return (
        <>
            <header className="header">{header}</header>
            <main className="main">
                <section className="content">{children}</section>
                <section className="sidebar">{sidebar}</section>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
