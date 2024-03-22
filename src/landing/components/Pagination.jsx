import React from "react";

// Componente Pagination: Proporciona una barra de paginación para navegar a través de las páginas.
// Props:
// - pageCount: Número total de páginas.
// - paginate: Función que maneja el cambio de página.
// - currentPage: Página actual.
function Pagination({ pageCount, paginate, currentPage }) {
    // Calcula las páginas que se mostrarán en el medio de la paginación.
    let middlePages = [];
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(pageCount, currentPage + 1); i++) {
      middlePages.push(i);
    }
  
    return (
      // Contenedor de la paginación.
      <div className="flex items-center justify-center space-x-1">
        {/* Botón para navegar a la página anterior. */}
        <button
          className={`flex items-center justify-center h-8 w-8 rounded-full ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white dark:bg-gray-700 dark:text-white`}
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>&lt;</span> {/* Símbolo de "menor que" para indicar "anterior". */}
        </button>
        
        {/* Siempre muestra la primera página si no está entre las páginas del medio. */}
        {!middlePages.includes(1) && (
          <>
            <button
              className="h-8 w-8 rounded-full text-blue-700 bg-white dark:bg-gray-800 dark:text-blue-300"
              onClick={() => paginate(1)}
            >
              1
            </button>
            {/* Muestra puntos suspensivos cuando hay más páginas entre las actuales y la primera. */}
            {currentPage > 3 && <span className="flex items-center justify-center h-8 text-gray-500 dark:text-gray-400">...</span>}
          </>
        )}
        
        {/* Renderiza las páginas del medio. */}
        {middlePages.map((page) => (
          <button
            key={page}
            className={`h-8 w-8 rounded-full ${currentPage === page ? 'bg-blue-500 text-white' : 'text-blue-700 bg-white dark:bg-gray-800 dark:text-blue-300'}`}
            onClick={() => paginate(page)}
          >
            {page}
          </button>
        ))}
        
        {/* Siempre muestra la última página si no está entre las páginas del medio. */}
        {!middlePages.includes(pageCount) && (
          <>
            {/* Muestra puntos suspensivos cuando hay más páginas entre las actuales y la última. */}
            {currentPage < pageCount - 2 && <span className="flex items-center justify-center h-8 text-gray-500 dark:text-gray-400">...</span>}
            <button
              className="h-8 w-8 rounded-full text-blue-700 bg-white dark:bg-gray-800 dark:text-blue-300"
              onClick={() => paginate(pageCount)}
            >
              {pageCount}
            </button>
          </>
        )}
  
        {/* Botón para navegar a la página siguiente. */}
        <button
          className={`flex items-center justify-center h-8 w-8 rounded-full ${currentPage === pageCount ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white dark:bg-gray-700 dark:text-white`}
          onClick={() => currentPage < pageCount && paginate(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          <span>&gt;</span> {/* Símbolo de "mayor que" para indicar "siguiente". */}
        </button>
      </div>
    );
  }
  
  export default Pagination;
