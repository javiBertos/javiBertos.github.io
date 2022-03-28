import './Footer.css';

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="uk-grid uk-grid-collapse uk-child-width-expand@s">
        <div className="uk-padding-small">
          &copy; {props.site.year} {props.site.name} · Designed with ♥ by&nbsp;<a href={ props.author.site} className="uk-link-text" target="_blank" rel="noreferrer">{ props.author.name }</a>
        </div>

        <div className="uk-padding-small uk-text-right">
          <a href={props.site.cookies} className="uk-link-text" target="_blank" rel="noreferrer">Política de cookies</a>&nbsp;&nbsp;&nbsp;
          <a href={ props.site.privacy} className="uk-link-text" target="_blank" rel="noreferrer">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}
