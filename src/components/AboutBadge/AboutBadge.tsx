import { aboutText } from '../../utils/constans'
import s from './AboutBadge.module.scss'

export const AboutBadge: React.FC = () => {
  return (
    <div className={s.AboutBadge}>
      <div className="container">
        <div className={s.inner}>
          <h3>About Us</h3>
          <p>{aboutText}</p>
        </div>
      </div>
    </div>
  )
}
