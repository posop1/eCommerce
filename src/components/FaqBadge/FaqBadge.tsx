import { faqText } from '../../utils/constans'
import s from './FaqBadge.module.scss'

export const FaqBadge: React.FC = () => {
  return (
    <div className={s.FaqBadge}>
      <div className="container">
        <div className={s.inner}>
          <h3>FAQ</h3>
          <ul>
            {faqText.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span> - {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
