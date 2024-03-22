import { FilterIcon } from '@heroicons/react/solid';
import { useTheme } from '../../ThemeContext';

// FilterButton Component: A button designed to show the filter sidebar.
// Props:
// - setIsSidebarOpen: A function to set the sidebar's open/close state.
const FilterButton = ({ setIsSidebarOpen }) => {
    // Accessing the theme from the context to apply conditional styling.
    const { theme } = useTheme();

    return (
        // The button element that triggers the sidebar to open. It adjusts its background color based on the current theme.
        <button
            onClick={() => setIsSidebarOpen(true)}
            className={`py-2 px-4 ${theme === 'light' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'} text-white font-semibold rounded-lg shadow-md flex items-center`}
        >
            <FilterIcon className="h-5 w-5 mr-2" /> {/* Icon for visual representation */}
            Show Filters {/* Button text */}
        </button>
    );
};

export default FilterButton;