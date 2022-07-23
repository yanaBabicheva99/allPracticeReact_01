import React from 'react';
import _ from 'lodash';
const Pagination = ({countPosts, sizePage, changeCurrent, current}) => {
const countPages = Math.ceil(countPosts/sizePage);
    // if (countPages === 1) {
    //     return null;
    // }
const arrPages = _.range(1, countPages + 1);

    return (
        <nav className='m-2'>
            <ul className="pagination">
                {arrPages.map(page =>
                    <li onClick={() => changeCurrent(page)}
                        key={'page'+ page}
                        className="page-item">
                        <a className="page-link">
                            {page}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;