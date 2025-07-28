import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
export const meta = () => {
  return [
    { title: "Login & Signup - Access Your Resume Analysis | Resumind" },
    {
      name: "description",
      content: "Sign in to Resumind to access your personalized resume analysis, ATS scores, and AI-powered feedback. Create an account to start optimizing your resumes today.",
    },
    { name: "keywords", content: "resume login, signup, account access, resume analysis login, career tools authentication" },
    { property: "og:title", content: "Login to Resumind - Access Your Resume Analysis" },
    { property: "og:description", content: "Sign in to access your personalized resume analysis and AI feedback." },
    { property: "og:url", content: "https://resumind.com/auth" },
    { name: "robots", content: "noindex, nofollow" }, // Auth pages should not be indexed
  ];
};

const auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1] || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10 ">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>LogIn to Continue Your Job Journey </h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing You in...</p>
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p>LogOut</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>LogIn</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
