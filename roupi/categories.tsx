"use client";

import { useEffect, useState } from "react";
import { useGET } from "./utils";

export const useGetcategories = () => {
    const [categories, setcategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        useGET(`categories/`, {}).then((res) => {
            if (res?.type == "success") {
                setcategories(res?.data);
            }
            setLoading(false);
        });
    }, []);
    return { categories, loading };
};
