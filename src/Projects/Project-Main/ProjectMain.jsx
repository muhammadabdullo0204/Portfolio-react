import React, { useState } from 'react'

import right from './right-arrow-svgrepo-com.svg';

import Pagination from './Pagination/Pagination';
import './Pagination/PaginationCss.css';

import Pagination2 from './Pagination/Pagination2';
import Pagination3 from './Pagination/Pagination3';
import { useNavigate } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectMain() {

    const navigate = useNavigate();


    const handleClick = (targetPath) => {
        const button = document.querySelector('.slides-button button.active');
        if (button) {
            button.classList.remove('active');
        }
        const clickedButton = document.activeElement;
        clickedButton.classList.add('active');

        setTimeout(() => {
            navigate(targetPath);
        }, 2500);
    };

    const [currentPage, setCurrentPage] = useState(1);


    const renderPagination = () => {
        switch (currentPage) {
            case 1:
                return <Pagination />;
            case 2:
                return <Pagination2 />;
            case 3:
                return <Pagination3 />;
            default:
                return <Pagination />;
        }
    };


    return (


        <div>

            <div className='container'>

                {renderPagination()}


                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
                                Previous
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(2)}>2</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(3)}>3</button>
                        </li>
                        <li className="page-item">
                            <button className="page-link" onClick={() => setCurrentPage(currentPage < 3 ? currentPage + 1 : 3)}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>




            <div className='slides-button'>

                <button onClick={() => handleClick('/contact')}>
                    <img width="30" height="30" src={right} alt="right--v1" />
                    <span>Contact Me</span>
                </button>
            </div>


        </div>



    )
}

export default ProjectMain