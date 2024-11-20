"use client"

import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <div className="m-3">
            {user ? <p>Hello, Welcome to my website</p> : <p>Please Sign In</p>}
            { user ? 
            <div>
                <Link href="/week-10/shopping-list">Continue to Shopping List</Link><br />
                <button onClick={firebaseSignOut}>Sign Out</button>
                </div> : 
                <button onClick={gitHubSignIn}>Sign In</button>}
        </div>
    )
}