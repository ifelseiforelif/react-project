import { useEffect, useState } from "react";
import type { CategoryType } from "@/types/CategoryType";
import Category from "@/components/categories/Category";
import Categories from "@/utils/Category";


const CategoriesList = () => {
    const [categories, setCategories] = useState<CategoryType[]|null>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const loadCategories = async () => {
            try {
                const data = await Categories.GetAllCategories() ;
                if(data!==null)
                    setCategories(data);
            }
            catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        };

        loadCategories();

    }, []);

    if (loading) {
        return (
            <div className="text-center text-2xl">
                Loading...
            </div>
        );
    }

    if (categories?.length === 0) {
        return (
            <p className="text-center text-gray-500 text-lg mt-10">
                List is empty
            </p>
        );
    }

    return (
        <div className="mx-auto max-w-7xl p-6">
            <h1 className="mb-6 text-3xl font-bold">
                Categories

            </h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categories?.map((category:CategoryType) => {
                    if(category.parentId === null)
                        return ( <Category
                            key={category.id}
                            category={category}
                        />)
                }
                )}
            </div>
        </div>
    );
};

export default CategoriesList;