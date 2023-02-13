type SocialLinkProps = {
  link: string;
  label: string;
  icon: string;
}

function SocialLink({link, label, icon}: SocialLinkProps): JSX.Element {
  return (
    <li className="socials-item">
      <a className="socials__link" href={link} aria-label={label}>
        <svg className="socials__icon" width="24" height="24" aria-hidden="true">
          <use xlinkHref={icon}></use>
        </svg>
      </a>
    </li>
  )
}

export default SocialLink;
