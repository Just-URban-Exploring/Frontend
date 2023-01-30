import React from "react";

export function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>Logo</div>
      <form>
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">
            E-Mail:
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">
            Passwort:
          </label>
          <input type="password" className="form-control" id="InputPassword1" />
        </div>
        <button type="submit" className="btn-primary">
          Anmelden
        </button>
        <div className="forgot-pw">
          <a href="/forgot-pw">Passwort vergessen?</a>
        </div>
        <button type="submit" className="btn-google">
          Mit Google anmelden
        </button>
      </form>
    </div>
  );
}
