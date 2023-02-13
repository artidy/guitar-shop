import { Link } from 'react-router-dom';

type FooterMenuLinkProps = {
  link: string;
  title: string;
}

function FooterMenuLink({ link, title }: FooterMenuLinkProps): JSX.Element {
  return (
    <li className="footer__nav-list-item">
      <Link className="link footer__nav-link" to={link}>{ title }</Link>
    </li>
  )
}

export default FooterMenuLink;
