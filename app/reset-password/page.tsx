'use client';

import React from 'react';
import { supabase } from '@/lib/supabaseBrowser';

function parseHashParams(hash: string) {
  const h = hash.startsWith('#') ? hash.slice(1) : hash;
  return new URLSearchParams(h);
}

export default function ResetPasswordPage() {
  const [ready, setReady] = React.useState(false);
  const [status, setStatus] = React.useState<string>('Preparing reset…');
  const [p1, setP1] = React.useState('');
  const [p2, setP2] = React.useState('');
  const [saving, setSaving] = React.useState(false);

  function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === 'string') return err;
  try {
    return JSON.stringify(err);
  } catch {
    return 'Unknown error';
  }
}


  React.useEffect(() => {
    (async () => {
      try {
        // 1) PKCE flow: ?code=...
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');

        if (code) {
          setStatus('Validating link…');
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;

          // убрать code из URL
          window.history.replaceState({}, document.title, '/reset-password');
        } else {
          // 2) Implicit flow: #access_token=...&refresh_token=...
          const hashParams = parseHashParams(window.location.hash);
          const access_token = hashParams.get('access_token');
          const refresh_token = hashParams.get('refresh_token');

          if (access_token && refresh_token) {
            setStatus('Validating link…');
            const { error } = await supabase.auth.setSession({ access_token, refresh_token });
            if (error) throw error;

            // убрать токены из URL
            window.history.replaceState({}, document.title, '/reset-password');
          }
        }

        // Проверим, что сессия есть
        const { data } = await supabase.auth.getSession();
        if (!data.session) {
          setStatus('This reset link is invalid or expired. Please request a new one.');
          setReady(false);
          return;
        }

        setStatus('Enter a new password.');
        setReady(true);
      } catch (e: unknown) {
        setStatus(getErrorMessage(e) || 'Something went wrong. Please request a new reset link.');
        setReady(false);
      }
    })();
  }, []);

  const onSubmit = async () => {
    if (!p1 || p1.length < 6) return alert('Password should be at least 6 characters.');
    if (p1 !== p2) return alert('Passwords do not match.');

    setSaving(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: p1 });
      if (error) throw error;

      setStatus('Password updated ✅ You can go back to the app and sign in.');
      setReady(false);

      // можно разлогинить сессию, чтобы чисто:
      await supabase.auth.signOut();
    } catch (e: unknown) {
    alert(getErrorMessage(e) || 'Failed to update password.');
    } finally {
    setSaving(false);
}
  };

  return (
    <div className="container">
      <div className="card">
        <h2 style={{ marginTop: 0 }}>Reset password</h2>

        <p>{status}</p>

        {ready && (
          <>
            <div style={{ marginTop: 12 }}>
              <label className="small">New password</label>
              <input className="input" type="password" value={p1} onChange={(e) => setP1(e.target.value)} />
            </div>

            <div style={{ marginTop: 12 }}>
              <label className="small">Repeat new password</label>
              <input className="input" type="password" value={p2} onChange={(e) => setP2(e.target.value)} />
            </div>

            <div style={{ marginTop: 16 }}>
              <button className="btn" onClick={onSubmit} disabled={saving}>
                {saving ? 'Updating…' : 'Update password'}
              </button>
            </div>
          </>
        )}

        <p className="small" style={{ marginTop: 16 }}>
          Didn’t request a reset? You can safely close this page.
        </p>
      </div>
    </div>
  );
}
