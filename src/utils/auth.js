export function getAuth() {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : null;
}

export function isLoggedIn() {
  return !!getAuth();
}

export function isAdmin() {
  const auth = getAuth();
  return auth?.role === "admin";
}
