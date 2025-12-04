function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#0b5ed7", color: "white" }}>
      <a href="/" style={{ color: "white", marginRight: "15px" }}>Home</a>
      <a href="/symptom" style={{ color: "white", marginRight: "15px" }}>Symptom Checker</a>
      <a href="/login" style={{ color: "white" }}>Login</a>
    </div>
  );
}

export default Navbar;
