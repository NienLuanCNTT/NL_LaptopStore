import React from 'react'

const Pagination = ({ products, paginate }) => {
    const totalPosts = products.length;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / 5); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href='!#' className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
