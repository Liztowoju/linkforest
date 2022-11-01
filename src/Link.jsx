export default function Link(props) {
    return (
        <a href={props.link.url} className="app-link" target='_blank' aria-current="true" key={props.index}>
        {props.link.name}
      </a>
    )
}