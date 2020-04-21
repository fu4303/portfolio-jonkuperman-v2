import React from 'react';

const TableOfContents = ({ contents }) => {
    return (
        <>
            {contents && (
                <span className="tableOfContents">
                    <h2>Table of Contents</h2>
                    <div dangerouslySetInnerHTML={{ __html: contents }}></div>
                </span>
            )}
        </>
    );
};

export default TableOfContents;