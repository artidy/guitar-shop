import Logo from '../logo/logo';
import SocialLink from '../social-link/social-link';
import FooterMenuLink from '../footer-menu-link/footer-menu-link';

const SOCIALS = [
  {
    link: 'https://www.skype.com/',
    label: 'Мы в skype',
    icon: '#icon-skype'
  },
  {
    link: 'https://www.skype.com/',
    label: 'Мы в vsco',
    icon: '#icon-vsco'
  },
  {
    link: 'https://www.pinterest.com/',
    label: 'Мы в pinterest',
    icon: '#icon-pinterest'
  }
]

const MENU_LINKS = [
  {
    link: '#top',
    title: 'Где купить?',
  },
    {
      link: '#top',
      title: 'Блог',
    },
    {
      link: '#top',
      title: 'Вопрос - ответ',
    },
    {
      link: '#top',
      title: 'Возврат',
    },
    {
      link: '#top',
      title: 'Сервис-центры',
    }
]

function Footer(): JSX.Element {
  const socialBlock = SOCIALS.map(({link, label, icon}, index) =>
    <SocialLink key={index} link={link} label={label} icon={icon} />);

  const menuBlock = MENU_LINKS.map(({link, title}, index) =>
    <FooterMenuLink key={index} link={link} title={title} />);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__logo-wrapper">
            <Logo />
            <div className="socials footer__socials">
              <ul className="socials__list">
                {socialBlock}
              </ul>
            </div>
          </div>
          <section className="footer__nav-section footer__nav-section--about">
            <h2 className="footer__nav-title footer__nav-title--about">О нас</h2>
            <p className="footer__nav-text footer__nav-text--about">
              Магазин гитар, музыкальных <br /> инструментов и&nbsp;гитарная мастерская в&nbsp;Санкт-Петербурге.
            </p>
            <p className="footer__nav-text footer__nav-text--about">
              Все инструменты проверены, отстроены и&nbsp;доведены до&nbsp;идеала!
            </p>
          </section>
          <section className="footer__nav-section footer__nav-section--links">
            <h2 className="footer__nav-title footer__nav-title--links">Информация</h2>
            <ul className="footer__nav-list">
              {menuBlock}
            </ul>
          </section>
          <section className="footer__nav-section footer__nav-section--contacts">
            <h2 className="footer__nav-title footer__nav-title--contacts">Контакты</h2>
            <p className="footer__nav-text footer__nav-text--address">
              г. Санкт-Петербург,<br /> м. Невский проспект, ул. Казанская 6.
            </p>
            <a className="link footer__nav-link footer__nav-link--phone" href="tel:88125005050">
              8-812-500-50-50
            </a>
            <p className="footer__nav-text footer__nav-text--work-hours-title">
              Режим работы:
              <span className="footer__nav-text footer__nav-text--work-hours">
                с 11:00 до 20:00
              </span>
            </p>
            <p className="footer__nav-text footer__nav-text--weekends">без выходных</p>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
