"use client";

import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetcategories = () => {
    const [categories, setcategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        useGET(`v2/categories/`, {}).then((res) => {
            setcategories(res);
            setLoading(false);
        });
    }, []);
    return { categories, loading };
};
