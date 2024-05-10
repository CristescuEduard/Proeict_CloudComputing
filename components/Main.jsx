import { deleteFood, getFoods } from "@/utils/foodsFunctions";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFoods = async () => {
    try {
      const response = await getFoods();

      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDeleteFood = async (id) => {
    try {
      const response = await deleteFood(id);

      if (response?.acknowledged) {
        const newData = data.filter((el) => el._id !== id);

        setData(newData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFood = (id) => {
    router.push(`/edit?id=${id}`);
  }

  const handleAddFood = () => {
    router.push("/create");
  }

  const handleGoToChat = () => {
    router.push("/chat");
  }

  useEffect(() => {
    fetchFoods();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className="p-4 flex flex-wrap gap-4">
      <div>
      <div className="p-4 flex flex-wrap gap-4">
      {data?.map((Food) => (
        <div
          key={Food._id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Food.name} - {Food.Grams}g
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Calorii: {Food.Calorii} (100g) - {Food.Calorii * Food.Grams / 100} (item)
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Proteine: {Food.Proteine}g (100g) - {Food.Proteine * Food.Grams / 100}g (item)
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Grasimi: {Food.Grasimi}g (100g) - {Food.Grasimi * Food.Grams / 100}g (item)
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Grasimi Saturate: {Food.GrasimiSaturate}g (100g) - {Food.GrasimiSaturate * Food.Grams / 100}g (item)
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Fibre: {Food.Fibre}g (100g) - {Food.Fibre * Food.Grams / 100}g (item)
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Colesterol: {Food.Colesterol}mg (100g) - {Food.Colesterol * Food.Grams / 100}mg (item)
          </p>
          <button
            type="button"
            onClick={() => handleEditFood(Food._id)}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Update
          </button>
          <button
            type="button"
            onClick={() => handleDeleteFood(Food._id)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Delete
          </button>
        </div>
      ))}
      </div>
      <div className="p-4 flex flex-wrap gap-4 text-align:center">
          <button
            type="button"
            onClick={() => handleAddFood()}
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add Foods
          </button>

          <button
            type="button"
            onClick={() => handleGoToChat()}
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            To Chat GPT
          </button>
          </div>
      </div>
    </div>
  );
};

export default Main;