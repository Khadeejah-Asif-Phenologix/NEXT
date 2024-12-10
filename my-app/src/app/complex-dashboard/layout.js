// Parallel routes handle each route independently.
// Which means each route have its own loading and error states.

// Each slot of our dashboard can essentially function as a mini-application 
// completes with it's own navigation and state management

export default function RootLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}> {notifications} </div>
      </div>
    </>
  ) : (
    login
  );
}
