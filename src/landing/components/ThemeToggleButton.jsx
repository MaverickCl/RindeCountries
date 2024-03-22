import { useTheme } from '../../ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

// ThemeToggleButton: Componente para alternar entre los modos de tema claro y oscuro.
// Utiliza el contexto de tema para obtener y modificar el estado del tema actual.
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();  // Accede al tema actual y a la función para cambiarlo.

  return (
    // Label que funciona como contenedor clickeable para el switch de tema.
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        {/* Checkbox oculto que controla el estado del switch. */}
        <input type="checkbox" className="sr-only" onChange={toggleTheme} checked={theme === 'dark'} />
        {/* Estiliza el fondo del switch según el tema actual. */}
        <div className={`block ${theme === 'light' ? 'bg-gray-600' : 'bg-blue-500'} w-14 h-8 rounded-full`}></div>
        {/* El punto del switch que se mueve de un lado a otro. */}
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition transform ${theme === 'dark' ? 'translate-x-6' : ''}`}></div>
      </div>
      {/* Muestra el ícono del sol o la luna según el tema actual. */}
      {theme === 'light' ? (
        <SunIcon className={`ml-3 w-5 h-5 text-yellow-500`} />  // Ícono del sol para el tema claro.
      ) : (
        <MoonIcon className={`ml-3 w-5 h-5 text-blue-300`} />  // Ícono de la luna para el tema oscuro.
      )}
    </label>
  );
};

export default ThemeToggleButton;
