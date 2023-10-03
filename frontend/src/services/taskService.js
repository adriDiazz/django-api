export const createTask = async (task) => {
  try {
    const response = await fetch(import.meta.env.VITE_URL_API, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    return error.message;
  }
};
