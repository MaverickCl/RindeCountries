import React from "react";

// Componente CountriesCard: Presenta la información de un país en una tarjeta.
// Props:
// - country: Objeto que contiene la información del país.
// - onClick: Función que maneja el evento de clic en la tarjeta.
// - layout: Define el estilo de la tarjeta basado en la disposición seleccionada ('list' o 'grid').
function CountriesCard({ country, onClick, layout }) {
    // Clases de CSS condicionales para ajustar los estilos según el layout (lista o cuadrícula).
    const containerClass = layout === 'list' ? 'flex items-center w-full shadow-lg m-2' : 'max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white';
    const imageContainerClass = layout === 'list' ? 'w-1/4' : 'w-full';
    const contentContainerClass = layout === 'list' ? 'w-3/4 p-4' : 'px-6 py-4';
    const countryNameClass = layout === 'list' ? 'text-2xl font-bold' : 'font-bold text-xl mb-2';
    const infoClass = layout === 'list' ? 'text-sm' : 'text-base';

    return (
      // Contenedor principal de la tarjeta que aplica los estilos basados en el layout seleccionado.
      <div onClick={() => onClick(country)} className={`${containerClass} bg-gray-100 dark:bg-gray-800 dark:text-white cursor-pointer transition-all duration-500 ease-in-out hover:shadow-xl`}>
        <div className={`${imageContainerClass} flex-shrink-0`}>
          {country.flags.svg ? (
            // Muestra la bandera del país si está disponible.
            <img className="h-full w-full object-cover p-1" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
          ) : (
            // Muestra un mensaje si la bandera no está disponible.
            <div className="flex items-center justify-center h-full bg-gray-200">No Flag Available</div>
          )}
        </div>
        <div className={`${contentContainerClass}`}>
          {/* Muestra el nombre del país. */}
          <div className={`${countryNameClass}`}>{country.name.common || 'No Name Available'}</div>
          {/* Muestra la capital del país. */}
          <p className={`${infoClass}`}>Capital: {country.capital || 'N/A'}</p>
          {/* Muestra la población del país. */}
          <p className={`${infoClass}`}>Population: {country.population ? country.population.toLocaleString() : 'N/A'}</p>
          {/* Muestra los idiomas del país. */}
          <p className={`${infoClass}`}>Language(s): {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
        </div>
      </div>
    );
  }
  
export default CountriesCard;

  