interface HeaderProps {
  date: Date;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <header>
      <h1>To-do List App</h1>
      <p>You can create your today's list here</p>
      <p>{`Today, ${props.date}`}</p>
    </header>
  );
}

export default Header;
