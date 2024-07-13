import { FC } from 'react'
import LINKS from '../lib/links'

const FooterLink: FC<(typeof LINKS)[number]> = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    className={`footer-link footer-link_${icon}`}
    rel="author noreferrer"
  >
    <span className="icon" />
    <span className="footer-link__title">{icon}</span>
  </a>
)

const FooterLinks = () => (
  <>
    {LINKS.map((el, index) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <FooterLink key={`key-${index + 1}`} {...el} />
    ))}
  </>
)

export default FooterLinks
