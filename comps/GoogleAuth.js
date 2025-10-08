import { useEffect, useRef, useState } from "react";

export function GoogleAuth({
    type = "standard",
    theme = "outline",
    size = "large",
    signup,
    text,
    shape,
    logoAlignment,
    width,
    locale,
    ...props
}) {
    const [isOAuthClientLoaded, setIsOAuthClientLoaded] = useState(false);

    const btnContainerRef = useRef(null);
    const onSuccessRef = useRef(null);
    onSuccessRef.current = (token) => signup('google', token, 'CUSTOMER');

    useEffect(() => {
        const scriptTag = document.createElement("script");

        scriptTag.src = "https://accounts.google.com/gsi/client";
        scriptTag.async = true;
        scriptTag.defer = true;

        scriptTag.onload = () => {
            setIsOAuthClientLoaded(true);
        };

        scriptTag.onerror = () => {
            setIsOAuthClientLoaded(false);
        };

        document.body.appendChild(scriptTag);

        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    useEffect(() => {
        if (!isOAuthClientLoaded) {
            return;
        }

        window.google?.accounts.id.initialize({
            client_id:
                process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            scope: "profile email",
            callback: (credentialResponse) => {
                if (!credentialResponse.clientId || !credentialResponse.credential) {
                    return;
                }

                onSuccessRef.current(credentialResponse.credential);
            },
            ...props,
        });

        window.google?.accounts.id.renderButton(btnContainerRef.current, {
            type,
            theme,
            size,
            text,
            shape,
            logo_alignment: logoAlignment,
            width: 'full',
            locale,
        });
    }, [isOAuthClientLoaded]);

    return (
        <div
            className="my-4 w-full"
            ref={btnContainerRef}
        />
    );
}
