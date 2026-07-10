import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router";
import type { CategoryType } from "@/types/CategoryType";

const CategoryDetail = () => {
    const { id } = useParams(); //витягуємо id з маршрута

    const [category, setCategory] = useState<CategoryType | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); //для кнопки Назад
    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/category/${id}`)
            .then(res => res.json())
            .then((data: CategoryType) => {
                setCategory(data);
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="text-center text-2xl">
                Loading...
            </div>
        );
    }

    if (!category) {
        return (
            <div className="text-center text-red-600 text-2xl">
                Category not found
            </div>
        );
    }

    const imageUrl =
        "http://localhost:5000/categories/" + category.url;

    return (
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-lg">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-300"
            >
                ← Назад
            </button>
            <div className="grid gap-10 md:grid-cols-2">

                <img
                    src={imageUrl}
                    alt={category.name}
                    className="h-96 w-full rounded-xl object-cover"
                />

                <div>

                    <h1 className="mb-6 text-5xl font-bold">
                        {category.name}
                    </h1>

                    <div className="space-y-4 text-lg">

                        <p>
                            <span className="font-semibold">Id:</span> {category.id}
                        </p>

                        <p>
                            <span className="font-semibold">Slug:</span> {category.slug}
                        </p>

                        <p>
                            <span className="font-semibold">Parent:</span>{" "}
                            {category.parentId ?? "Root category"}
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CategoryDetail;