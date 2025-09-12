import { createContext, useEffect, useState } from "react";

const DataContext = createContext(null);

function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const result = await response.json();
        setData(result.users);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(`ERROR: ${error}`);
          setError(new Error(error));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  async function addUser(newUser) {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const result = await response.json();

      setData((prev) => {
        const lastId =
          prev.length > 0 ? Math.max(...prev.map((u) => u.id)) : 30;
        const newId = lastId + 1;

        const mergedUser = { ...result, role: newUser.role, id: newId };

        return [...prev, mergedUser];
      });
    } catch (error) {
      console.error("Add user failed:", error);
      setError(error);
    }
  }

  async function updateUser(updatedUser) {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/${updatedUser.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        },
      );

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const result = await response.json();

      const mergedUser = { ...result, role: updatedUser.role };

      setData((prev) =>
        prev.map((user) => (user.id === mergedUser.id ? mergedUser : user)),
      );
    } catch (error) {
      console.error("Update user failed:", error);
      setError(error);
    }
  }

  async function removeUser(id) {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const result = await response.json();

      setData((prev) => prev.filter((user) => user.id !== id));

      console.log("Deleted user:", result);
    } catch (error) {
      console.error("Remove user failed:", error);
      setError(error);
    }
  }

  return (
    <DataContext.Provider
      value={{ data, isLoading, error, addUser, updateUser, removeUser }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };
