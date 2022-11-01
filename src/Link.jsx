export default function Link(props) {
  return (
    <a
      href={props.link.url}
      id={props.link.id}
      title={props.link.title}
      className="app-link"
      target="_blank"
      aria-current="true"
      key={props.index}
    >
      {props.link.name}
    </a>
  );
}
