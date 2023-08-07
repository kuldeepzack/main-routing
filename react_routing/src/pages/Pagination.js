import React, { useState } from 'react';
import "./Showhide.css"

const itemsPerPage = 10;
const totalItems = 50; 

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const getCurrentPageItems = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
  
//     const sampleData = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
//     return sampleData.slice(startIndex, endIndex);
//   };


const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const sampleData = Array.from({ length: totalItems }, (_, i) => {
      return i % 2 === 0 ? `ODD ${i + 1}` : `even ${i + 1}`;
    });
    return sampleData.slice(startIndex, endIndex);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  
  const pageOptions = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      {getCurrentPageItems().map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <div className="pagination">
           <button className='btn btn-danger' onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
          Previous
             </button>
           {pageOptions.map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
          ))}
           <button className='btn btn-danger' onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
