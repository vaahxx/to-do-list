interface HeaderProps {
  date: Date;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <header style={{ marginBottom: "30px" }}>
      <h3>To-do List App</h3>
      <p>You can create your today's list here</p>
      <p>{`Today, ${props.date.toLocaleDateString()}`}</p>
    </header>
  );
}

export default Header;
