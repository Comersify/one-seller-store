'use client'

import { useStateContext } from "../../context/contextProvider";
import { FC, useEffect } from "react";
import { redirect } from "next/navigation";

const useWithAuth = <P extends object>(WrappedComponent: FC<P>): FC<P> => {
  return (props: P) => {
    const { profile } = useStateContext();
    console.log('profile', profile)
    useEffect(() => {
      if (!profile.email) {
        redirect('/login');
      }
    }, [profile])

    return <WrappedComponent {...props} />;
  };
};

export default useWithAuth;