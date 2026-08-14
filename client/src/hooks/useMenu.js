import { useEffect, useState } from "react";
import { getMenuItems } from "../services/menuService";

const useMenu = (params = {}) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getMenuItems(params);

        setMenuItems(response.data || []);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
        setError("Unable to load the menu.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [JSON.stringify(params)]);

  return {
    menuItems,
    loading,
    error
  };
};

export default useMenu;