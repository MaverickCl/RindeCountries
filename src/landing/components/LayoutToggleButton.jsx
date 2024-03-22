import { ViewListIcon, ViewGridIcon } from '@heroicons/react/solid';
import { useTheme } from '../../ThemeContext';

// Componente LayoutToggleButton: Un botón para alternar entre vistas de lista y cuadrícula.
// Props:
// - layout: El layout actual ('list' o 'grid').
// - setLayout: Función para cambiar el estado del layout.
const LayoutToggleButton = ({ layout, setLayout }) => {
    // Accediendo al tema actual para aplicar estilos condicionales.
    const { theme } = useTheme();

    return (
        // Botón que al hacer clic alterna el layout entre lista y cuadrícula.
        <button
          onClick={() => setLayout(layout === 'grid' ? 'list' : 'grid')}
          className={`py-2 px-4 ${theme === 'light' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'} text-white font-semibold rounded-lg shadow-md flex items-center`}
        >
          {layout === 'grid' ? (
            // Muestra el ícono y el texto para la vista de lista si el layout actual es 'grid'.
            <>
              <ViewListIcon className="h-5 w-5 mr-2" />
              List View
            </>
          ) : (
            // Muestra el ícono y el texto para la vista de cuadrícula si el layout actual es 'list'.
            <>
              <ViewGridIcon className="h-5 w-5 mr-2" />
              Grid View
            </>
          )}
        </button>
    );
};

export default LayoutToggleButton;