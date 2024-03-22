import React from 'react';
import { SearchIcon, GlobeAltIcon, SortAscendingIcon, RefreshIcon, XIcon } from '@heroicons/react/outline';

// Componente CountryFilter: Proporciona una interfaz para filtrar países por nombre, región y orden.
// Props:
// - searchTerm: Término de búsqueda actual para filtrar países por nombre.
// - onSearchChange: Función para manejar cambios en el término de búsqueda.
// - region: Región seleccionada para el filtro.
// - onRegionChange: Función para manejar cambios en la selección de región.
// - sortOrder: Orden seleccionado para la lista de países.
// - onSortChange: Función para manejar cambios en la selección de orden.
// - onResetFilters: Función para restablecer todos los filtros.
// - isSidebarOpen: Indica si el sidebar debe estar visible.
// - toggleSidebar: Función para alternar la visibilidad del sidebar.

const CountryFilter = ({ searchTerm, onSearchChange, region, onRegionChange, sortOrder, onSortChange, onResetFilters, isSidebarOpen, toggleSidebar }) => {
  return (
    // Contenedor principal que aparece como un sidebar deslizable.
    <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-white dark:bg-gray-800 shadow-md overflow-y-auto transition-transform duration-300 ease-in-out z-10 flex flex-col justify-center p-5`}>
      
      {/* Campo de búsqueda con ícono */}
      <div className="mb-6 flex items-center">
        <SearchIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        <input
          type="text"
          className="form-input flex-1 py-3 ml-3 text-base font-normal text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 bg-clip-padding border border-solid border-gray-300 dark:border-gray-600 rounded transition ease-in-out focus:text-gray-700 dark:focus:text-gray-300 focus:bg-white dark:focus:bg-gray-700 focus:border-blue-600 dark:focus:border-blue-400 outline-none"
          value={searchTerm}
          onChange={onSearchChange}
          placeholder=" Search country"
        />
      </div>

       {/* Selector de región con ícono */}
      <div className="mb-6">
        <div className="flex items-center">
          <GlobeAltIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <select
            className="ml-3 flex-1 px-3 py-2 text-base font-normal text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-solid border-gray-300 dark:border-gray-600 rounded transition ease-in-out"
            value={region}
            onChange={onRegionChange}
          >

      {/* Opciones de región */}
            <option value="">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      {/* Selector de orden de clasificación con ícono */}
      <div className="mb-6">
        <div className="flex items-center">
          <SortAscendingIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          <select
            className="ml-3 flex-1 px-3 py-2 text-base font-normal text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-solid border-gray-300 dark:border-gray-600 rounded transition ease-in-out"
            onChange={onSortChange}
            value={sortOrder}
          >
      {/* Opciones de orden de clasificación */}
            <option value="">Sort by</option>
            <option value="asc">Name (A-Z)</option>
            <option value="desc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Botones para restablecer filtros y cerrar el sidebar */}

      <div className="flex justify-between space-x-4">
        <button
          className="flex items-center justify-center px-4 py-2 font-bold text-white bg-blue-600 dark:bg-blue-400 rounded hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:shadow-outline w-full"
          onClick={onResetFilters}
        >
          <RefreshIcon className="h-5 w-5 mr-2" />
          Reset Filters
        </button>
        <button
          className="flex items-center justify-center px-4 py-2 text-white bg-red-500 dark:bg-red-400 rounded hover:bg-red-600 dark:hover:bg-red-500 focus:outline-none focus:shadow-outline w-full"
          onClick={toggleSidebar}
        >
          <XIcon className="h-5 w-5 mr-2" />
          Close
        </button>
      </div>
    </div>
  );
};

export default CountryFilter;
