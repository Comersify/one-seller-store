"use client";

import { useEffect, useState } from "react";
import { useGET, usePOST } from "./utils";
import { useRouter } from "next/navigation";
import { useStateContext } from "../context/contextProvider";

interface Profile {
  fullName?: string,
  email: string,
  id: string,
  phoneNumber?: string,
  image?: string,
  oldPassword?: string,
  password?: string,
  passwordConfermation?: string,
}


export const useSettings = () => {
  const { setProfile } = useStateContext()
  const [settings, setSettings] = useState<Profile | null>(null); 
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    usePOST("account/update/", {
      data: settings,
    }).then((res) => {
      if (res?.type == "success") {
        setRefresh(!refresh);
      }
    });
  };
  useEffect(() => {
    useGET("account/info/", {}).then((res) => {
      if (res?.type == "success") {
        setSettings({
          ...settings,
          fullName: res.data.first_name,
          id: res.data.id,
          email: res.data.email,
          phoneNumber: res.data.phone_number,
          image: res.data.image,
        });

        setProfile({
          id: res.data.id,
          fullName: res.data.full_name,
          email: res.data.email,
          phoneNumber: res.data.phone_number,
          image: res.data.image,
        })
      }
    });
    return;
  }, [refresh]);
  return { settings, handleSubmit, setSettings };
};

export const useLogin = () => {
  const { setProfile } = useStateContext()
  const [auth, setAuth] = useState<object>({ username: "", password: "" });
  const router = useRouter();
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const res = usePOST("login/", {
      data: auth,
    }).then((res) => {
      if (res?.type == "success") {
        setProfile({
          fullName: res.data.full_name,
          email: res.data.email,
          image: res.data.image,
          phoneNumber: res.data.phone_number,
        })
        router.replace("/products");
      }
    });
  };
  return { handleSubmit, setAuth, auth };
};

export const useSignup = () => {
  const router = useRouter();
  const [form, setForm] = useState<Partial<Profile>>({});
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const res = usePOST("signup/", {
      data: form,
    }).then((res) => {

      if (res.type == "success") {
        router.replace("/login");
      }
    });
  };
  return { handleSubmit, form, setForm };
};
