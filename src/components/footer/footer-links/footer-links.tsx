import { FC } from 'react'
import LINKS from '../lib/links'

const FooterLink: FC<(typeof LINKS)[number]> = ({ href, icon }) => (
  <a
    target="_blank"
    href={href}
    className="footer-link"
    rel="author noreferrer"
  >
    <div className={`footer-link__link-${icon}`} />
    <span className="footer-link__link-title">{icon}</span>
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
