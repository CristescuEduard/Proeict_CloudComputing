import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "@/components/Header";

const Form = (props) => {
  const router = useRouter();
  const { entry, onSubmit } = props;
  const [data, setData] = useState(entry);

  const handleChange = (type, value) => {
    setData({ ...data, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  return (
    <div>
    <Header title={'Manage Food Items'}/>
    <div className="p-4">
      
      <div className="flex flex-col mx-auto max-w-80 border p-4 shadow-sm gap-4 w-full">
        <div className="text-center font-bold text-xl">{entry._id ? 'Update' : 'Add'} Food Item </div>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name placeholder"
            required
          />
        </div>

        <div>
          <label
            htmlFor="Grams"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Grame
          </label>
          <input
            id="Grams"
            rows="4"
            value={data.Grams}
            onChange={(e) => handleChange("Grams", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div>
          <label
            htmlFor="Calorii"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Calorii
          </label>
          <input
            id="Calorii"
            rows="4"
            value={data.Calorii}
            onChange={(e) => handleChange("Calorii", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div>
          <label
            htmlFor="Proteine"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Proteine
          </label>
          <input
            id="Proteine"
            rows="4"
            value={data.Proteine}
            onChange={(e) => handleChange("Proteine", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div>
          <label
            htmlFor="Grasimi"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Grasimi
          </label>
          <input
            id="Grasimi"
            rows="4"
            value={data.Grasimi}
            onChange={(e) => handleChange("Grasimi", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div>
          <label
            htmlFor="GrasimiSaturate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Grasimi Saturate
          </label>
          <input
            id="GrasimiSaturate"
            rows="4"
            value={data.GrasimiSaturate}
            onChange={(e) => handleChange("GrasimiSaturate", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div>
          <label
            htmlFor="Carbohidrati"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Carbohidrati
          </label>
          <input
            id="Carbohidrati"
            rows="4"
            value={data.Carbohidrati}
            onChange={(e) => handleChange("Carbohidrati", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div>
          <label
            htmlFor="Fibre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fibre
          </label>
          <input
            id="Fibre"
            rows="4"
            value={data.Fibre}
            onChange={(e) => handleChange("Fibre", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div>
          <label
            htmlFor="Colesterol"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Colesterol
          </label>
          <input
            id="Colesterol"
            rows="4"
            value={data.Colesterol}
            onChange={(e) => handleChange("Colesterol", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Insert the number here..."
            type="number"
          ></input>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleCancel}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(data)}
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {entry?._id ? "Update" : "Add"}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Form;