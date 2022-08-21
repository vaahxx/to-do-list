interface HeaderProps {
  date: Date;
}

function Header(props: HeaderProps): JSX.Element {
  return (
    <header>
      <h3>To-do List App</h3>
      <p>{`Today, ${props.date.toLocaleDateString()}`}</p>
    </header>
  );
}

export default Header;
