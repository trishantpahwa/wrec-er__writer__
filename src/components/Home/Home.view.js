export default function HomeView(props) {
  return (
    <div className="HomeView">
      <div className="password-area">
        <h1>Password</h1>
        <input
          type="password"
          className="password"
          onChange={props.onPasswordInput}
          value={props.password}
          onKeyPress={props.submit}
        />
      </div>
    </div>
  );
}
