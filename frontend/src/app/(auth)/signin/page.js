import React from "react";
import {LoginForm} from "@/features/users";
import {auth} from "@/features/lib/auth";

export default async function SignIn() {
    const session = await auth();
    return (
        <>
            <LoginForm />
            <p>Session: {JSON.stringify(session?.user)}</p>
        </>
    );
}
