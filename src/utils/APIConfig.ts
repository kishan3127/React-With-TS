class APIConfig{
    async get(url: string) {
        try {
          const response = await fetch(`${url}`, {
            method: 'GET',
            cache: 'no-cache',
            credentials: 'same-origin',
          });
          return response.json();
        } catch (err) {
          console.error(`GET error: ${err}`);
        }
    }
}

export default APIConfig;