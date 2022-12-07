import { faqText } from '../../utils/constans'
import s from './FaqPage.module.scss'

interface FaqPageProps {}

export const FaqPage: React.FC<FaqPageProps> = () => {
  return (
    <div className={s.FaqPage}>
      <h3>FAQ</h3>
      <ul>
        {faqText.map((item) => (
          <li key={item.name}>
            <span>{item.name}</span> - {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
