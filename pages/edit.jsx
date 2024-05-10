import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { defaultRecordValues } from "@/utils/constants";
import { getFood, updateFood } from "@/utils/foodsFunctions";
import Spinner from "@/components/Spinner";
import Form from "@/components/Form";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(defaultRecordValues);

  const handleGetFood = async (id) => {
    try {
        const response = await getFood(id);

        if (response) {
            setEntry(response);
            setIsLoading(false);
        }
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
  }

  const onSubmit = async (data) => {
    try {
        const response = await updateFood(data);

        if (response) {
            router.push("/");
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
        router.push("/");
    }

    handleGetFood(id);
  }, []);

  if (isLoading) return <Spinner />;

  return <Form entry={entry} onSubmit={onSubmit} />;
};

export default Edit;