"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import type { Database } from "@/lib/supabase";
import { useState } from "react";
export default function Home() {
<<<<<<< Updated upstream
  const [name, setName] = useState<string>("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const getName = async () => {
    await supabase.auth.getSession().then((res) => {
      setName(res.data.session?.user.user_metadata.full_name);
    });
  };
  getName();
=======
    const [,] = useState(null);
    const router = useRouter();
    const supabase = createClientComponentClient<Database>();
    const getUser = async () => {
        await supabase.auth.getSession().then((res) => {
            if (res.data.session != undefined) {
                setUser(res.data.session?.user);
            });
    };
>>>>>>> Stashed changes

    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({ provider: "google" });
        router.refresh();
    };

<<<<<<< Updated upstream
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return (
    <main className="flex flex-col items-center">
      <div className="text-5xl mx-auto text-center font-bold mt-28 mb-5">
        <h1>PersonalConnect</h1>
      </div>
      <div className="mt-5 flex flex-col">
        {name ? (
          <div className="flex flex-col mx-auto items-center">
            <p className="text-2xl items-center">Hey {name}!</p>
            <button
              className="rounded-md mt-5 py-2 px-3 bg-slate-900 hover:bg-slate-800 transition duration-300"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <button
            className="rounded-md mt-5 py-2 px-3 bg-slate-900 hover:bg-slate-800 transition duration-300"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        )}
      </div>
    </main>
  );
=======
    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    };
    return (
        <main className="flex flex-col items-center">
            <div className="text-5xl mx-auto text-center font-bold mt-28 mb-5">
                <h1>PersonalConnect</h1>
            </div>
            <div className="mt-5 flex flex-col">
                {name ? (
                    <div className="flex flex-col mx-auto items-center">
                        <p className="text-2xl items-center">Hey {name}!</p>
                        <button
                            className="rounded-md mt-5 py-2 px-3 bg-slate-900 hover:bg-slate-800 transition duration-300"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>
                ) : (
                    <button
                        className="rounded-md mt-5 py-2 px-3 bg-slate-900 hover:bg-slate-800 transition duration-300"
                        onClick={handleSignIn}
                    >
                        Sign in
                    </button>
                )}
            </div>
        </main>
    );
>>>>>>> Stashed changes
}
