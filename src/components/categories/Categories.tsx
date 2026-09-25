import { categoryStore } from "@/store/categoryStore";
import { useEffect } from "react";

export const Categories = () => {
  const categories = categoryStore((state) => state.categories);
  const loading = categoryStore((state) => state.loading);
  const error = categoryStore((state) => state.error);
  const getCategories = categoryStore((state) => state.getCategories);
  useEffect(() => {
    console.log("use effect");
    getCategories();
  }, []);
  if (loading) {
    return <>Loading...</>;
  }
  if (error != null) {
    console.log(error);
  }
  return (
    <>
      Data
      {categories.map((c) => {
        return (
          <p key={c.id}>
            {c.name} {c.slug}
          </p>
        );
      })}
    </>
  );
};
