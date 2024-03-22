export const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Error fetching country data');
      }
      const data = await response.json();
      return data; // en caso de que sea exitosa la conexion retorna todos los datos
    } catch (error) {
      console.error('Error:', error);
      return []; // Manejo de errores mediante un array vacio
    }
  };
  