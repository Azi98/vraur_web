"use client";

import React from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "@/app/components/marketing.module.css";
import { supabase } from "@/lib/supabaseBrowser";

function parseHashParams(hash: string) {
  const normalized = hash.startsWith("#") ? hash.slice(1) : hash;
  return new URLSearchParams(normalized);
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return "Unknown error";
  }
}

export default function ResetPasswordPage() {
  const [ready, setReady] = React.useState(false);
  const [status, setStatus] = React.useState<string>("Preparing reset...");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");

        if (code) {
          setStatus("Validating link...");
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
          window.history.replaceState({}, document.title, "/reset-password");
        } else {
          const hashParams = parseHashParams(window.location.hash);
          const accessToken = hashParams.get("access_token");
          const refreshToken = hashParams.get("refresh_token");

          if (accessToken && refreshToken) {
            setStatus("Validating link...");
            const { error } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });
            if (error) throw error;
            window.history.replaceState({}, document.title, "/reset-password");
          }
        }

        const { data } = await supabase.auth.getSession();
        if (!data.session) {
          setStatus(
            "This reset link is invalid or expired. Please request a new one."
          );
          setReady(false);
          return;
        }

        setStatus("Enter a new password.");
        setReady(true);
      } catch (error: unknown) {
        setStatus(
          getErrorMessage(error) ||
            "Something went wrong. Please request a new reset link."
        );
        setReady(false);
      }
    })();
  }, []);

  const onSubmit = async () => {
    if (!password || password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      setStatus("Password updated. You can go back to the app and sign in.");
      setReady(false);

      await supabase.auth.signOut();
    } catch (error: unknown) {
      alert(getErrorMessage(error) || "Failed to update password.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.authPage}>
      <Header />
      <main className={styles.authMain}>
        <section className={styles.authCard}>
          <h1 className={styles.authTitle}>Reset password</h1>
          <p className={styles.authStatus}>{status}</p>

          {ready && (
            <form
              className={styles.authForm}
              onSubmit={(event) => {
                event.preventDefault();
                void onSubmit();
              }}
            >
              <div className={styles.authField}>
                <label htmlFor="new-password" className={styles.authLabel}>
                  New password
                </label>
                <input
                  id="new-password"
                  className={styles.authInput}
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className={styles.authField}>
                <label htmlFor="repeat-password" className={styles.authLabel}>
                  Repeat new password
                </label>
                <input
                  id="repeat-password"
                  className={styles.authInput}
                  type="password"
                  value={repeatPassword}
                  onChange={(event) => setRepeatPassword(event.target.value)}
                />
              </div>

              <div className={styles.authActions}>
                <button className={styles.authButton} type="submit" disabled={saving}>
                  {saving ? "Updating..." : "Update password"}
                </button>
              </div>
            </form>
          )}

          <p className={styles.authFootnote}>
            Didn&apos;t request a reset? You can safely close this page.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
