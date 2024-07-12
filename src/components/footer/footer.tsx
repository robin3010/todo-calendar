import FooterLinks from './footer-links/footer-links'
import './footer.scss'
import getCopyrightSig from './lib/utils'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <span className="footer__copyright-signature">{getCopyrightSig()}</span>
        <span className="footer__copyright-dev-name">by Aleksey Klimov</span>
      </div>
      <div className="footer-links">
        <FooterLinks />
      </div>
    </footer>
  )
}

export default Footer
