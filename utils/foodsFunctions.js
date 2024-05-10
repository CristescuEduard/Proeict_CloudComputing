export const getFoods = async () => {
    try {
      const response = await fetch("/api/foods", {
        method: "GET",
      });
  
      const data = await response.json();
  
      if (!data) {
        return [];
      }
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getFood = async (id) => {
    try {
      const response = await fetch(`/api/foods?id=${id}`, {
        method: "GET",
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const createFood = async (entry) => {
    try {
      const response = await fetch("/api/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const updateFood = async (entry) => {
      try {
          const response = await fetch('/api/foods', {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(entry)
          });
  
          const data = await response.json();
  
          return data;
      } catch (error) {
          console.log(error)
      }
  }
  
  export const deleteFood = async (id) => {
    try {
      const response = await fetch(`/api/foods?id=${id}`, {
        method: "DELETE",
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };