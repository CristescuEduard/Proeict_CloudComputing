import Form from "@/components/Form";
import { defaultRecordValues } from "@/utils/constants";
import { createFood, createRecord } from "@/utils/foodsFunctions";
import { useRouter } from "next/router";
import React from "react";

const Create = () => {
  const router = useRouter();
  const entry = defaultRecordValues;

  const onSubmit = async (data) => {
    try {

      console.log(data)

      const response = await createFood(data);

      if (response) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <Form entry={entry} onSubmit={onSubmit} />;
};

export default Create;