import React from "react";
import { XIcon } from '@heroicons/react/outline';

// CountryModal: Componente que muestra un modal con información detallada de un país.
// Props:
// - country: Objeto que contiene la información del país a mostrar.
// - isOpen: Estado booleano que indica si el modal está abierto o cerrado.
// - onClose: Función para manejar el evento de cierre del modal.
function CountryModal({ country, isOpen, onClose }) {
    // No renderiza nada si el modal no está abierto o no hay información de país.
    if (!isOpen || !country) return null;

    return (
      // Contenedor principal del modal, con estilo para ser fijo y cubrir toda la pantalla.
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
        {/* Contenedor interno para centrar el contenido y aplicar estilos de fondo y sombra. */}
        <div className="relative top-20 mx-auto p-5 border w-auto max-w-xl shadow-lg rounded-md bg-white dark:bg-gray-800 m-1">
          <div className="text-center">
            {/* Título del modal, mostrando el nombre del país. */}
            <h3 className="text-xl leading-6 font-bold text-gray-900 dark:text-white mb-4">{country.name?.common || 'No Name Available'}</h3>
            <div className="flex justify-around my-4">
              {/* Imágenes de la bandera y el escudo del país, si están disponibles. */}
              {country.flags.svg && (
                <img className="max-h-24" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
              )}
              {country.coatOfArms.svg && (
                <img className="max-h-24" src={country.coatOfArms.svg} alt={`Coat of arms of ${country.name?.common}`} />
              )}
            </div>
            {/* Información detallada del país presentada en un layout de grid. */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-left">
              <p className="text-base font-medium">Capital: <span className="font-normal">{country.capital || 'N/A'}</span></p>
              <p className="text-base font-medium">Languages: <span className="font-normal">{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</span></p>
              <p className="text-base font-medium">Population: <span className="font-normal">{country.population ? country.population.toLocaleString() : 'N/A'}</span></p>
              <p className="text-base font-medium">Continent: <span className="font-normal">{country.continents ? country.continents.join(', ') : 'N/A'}</span></p>
              <p className="text-base font-medium col-span-2">Currency: <span className="font-normal">{country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</span></p>
            </div>
            {/* Mapa incrustado que muestra la ubicación del país. */}
            <div className="my-4">
              <iframe
                title="countryLocation"
                width="100%"
                height="150"
                frameBorder="1"
                style={{ border:0 }}
                src={`https://www.google.com/maps?q=${country.latlng ? country.latlng.join(',') : '0,0'}&z=4&output=embed`}
                allowFullScreen>
              </iframe>
            </div>
            {/* Botón para cerrar el modal. */}
            <div className="flex justify-center mt-4">
              <button onClick={onClose} className="bg-red-500 hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 text-white rounded px-4 py-2 flex items-center">
                <XIcon className="h-5 w-5 mr-2" />
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CountryModal;
