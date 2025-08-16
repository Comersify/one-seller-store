import { useStateContext } from "./context/contextProvider";
import { FC } from "react";
import { redirect } from "next/navigation";

const useWithAuth = <P extends object>(WrappedComponent: FC<P>): FC<P> => {
  return (props: P) => {
    const { profile } = useStateContext();

    if (profile?.email) {
      return <WrappedComponent {...props} />;
    }

    redirect('/login');
    return <></>
  };
};

export default useWithAuth;