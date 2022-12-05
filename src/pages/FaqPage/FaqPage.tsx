import s from './FaqPage.module.scss'

interface FaqPageProps {}

export const FaqPage: React.FC<FaqPageProps> = () => {
  return (
    <div className={s.FaqPage}>
      <h3>FAQ</h3>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, doloremque quos quaerat
          reiciendis facere provident quod est nostrum ipsam molestias sit nisi, illum illo alias
          deserunt beatae iure dolores nam?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, doloremque quos quaerat
          reiciendis facere provident quod est nostrum ipsam molestias sit nisi, illum illo alias
          deserunt beatae iure dolores nam?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, doloremque quos quaerat
          reiciendis facere provident quod est nostrum ipsam molestias sit nisi, illum illo alias
          deserunt beatae iure dolores nam?
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, doloremque quos quaerat
          reiciendis facere provident quod est nostrum ipsam molestias sit nisi, illum illo alias
          deserunt beatae iure dolores nam?
        </li>
      </ul>
    </div>
  )
}
