export async function apiFetch(apiUrl) {
    const token = '';
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error; // Re-throw the error for further handling
    }
}
