import { aboutText } from '../../utils/constans'
import s from './AboutPage.module.scss'

interface AboutPageProps {}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className={s.AboutPage}>
      <h3>About</h3>
      <p>{aboutText}</p>
    </div>
  )
}
