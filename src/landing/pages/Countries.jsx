import React, { useState, useEffect } from 'react';
import CountriesCard from '../components/CountriesCard';
import CountryModal from '../components/CountryModal';
import CountryFilter from '../components/CountryFilter';
import Pagination from '../components/Pagination';
import { fetchCountries } from '../../services/countryService';
import FilterButton from '../components/FilterButton';
import LayoutToggleButton from '../components/LayoutToggleButton';
import ThemeToggleButton from '../components/ThemeToggleButton';

// Componente Countries: Muestra una lista de países con capacidad de filtrado, cambio de layout y paginación.
function Countries() {
  // Estados para almacenar los países, el país seleccionado, la paginación y los filtros.
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [layout, setLayout] = useState('list');
  const [sortOrder, setSortOrder] = useState('');

  // Efecto para cargar y ordenar los países según el criterio seleccionado.
  useEffect(() => {
    const getCountries = async () => {
      let data = await fetchCountries();
      if (sortOrder === 'asc') {
        data = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      } else if (sortOrder === 'desc') {
        data = data.sort((a, b) => b.name.common.localeCompare(a.name.common));
      }
      setCountries(data);
    };

    getCountries();
  }, [sortOrder]);

  // Funciones para manejar los cambios de layout, filtros y paginación.
  const handleLayoutChange = () => {
    setLayout(layout === 'grid' ? 'list' : 'grid');
  };

  const resetFilters = () => {
    setSearchTerm('');
    setRegion('');
    setSortOrder('');
    setCurrentPage(1);
  };

  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Filtrado de los países según el nombre y la región.
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (region ? country.region === region : true)
  );
  // Obtener los países actuales para la página después de aplicar los filtros
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  // Cálculo del número total de páginas basado en los países filtrados.
  const pageCount = Math.ceil(filteredCountries.length / countriesPerPage);

  return (
    <div className={`bg-gray-50 dark:bg-blue-950 min-h-screen`}>
      <div className="container mx-auto px-4">
        {/* Header con botones para filtrado, cambio de layout y cambio de tema. */}
        <header className="text-center py-5 flex justify-between items-center">
          <FilterButton setIsSidebarOpen={setIsSidebarOpen} />
          <LayoutToggleButton layout={layout} setLayout={setLayout} />
          <ThemeToggleButton />
        </header>
        
        {/* Componente CountryFilter para aplicar filtros. */}
        <CountryFilter
          searchTerm={searchTerm}
          onSearchChange={(e) => setSearchTerm(e.target.value)}
          region={region}
          onRegionChange={(e) => setRegion(e.target.value)}
          sortOrder={sortOrder}
          onSortChange={(e) => setSortOrder(e.target.value)}
          onResetFilters={resetFilters}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Listado de países */}
        <main className={`flex ${layout === 'grid' ? 'flex-wrap' : 'flex-col'} justify-center`}>
          {currentCountries.map((country) => (
            <CountriesCard key={country.cca3} country={country} layout={layout} onClick={handleCardClick} />
          ))}
        </main>
        
        {/* Modal para mostrar información detallada del país seleccionado. */}
        {selectedCountry && (
          <CountryModal country={selectedCountry} isOpen={isModalOpen} onClose={handleCloseModal} />
        )}
        
        {/* Paginación */}
        <footer className="py-5">
          <Pagination pageCount={pageCount} currentPage={currentPage} paginate={setCurrentPage} />
        </footer>
      </div>
    </div>
  );
}

export default Countries;
