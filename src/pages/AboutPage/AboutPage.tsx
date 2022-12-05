import s from './AboutPage.module.scss'

interface AboutPageProps {}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className={s.AboutPage}>
      <h3>About</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem adipisci minima
        eos! Debitis atque quae iusto quod. Expedita totam et ex repudiandae in soluta consequatur
        pariatur, neque ullam, blanditiis odio! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Exercitationem adipisci minima eos! Debitis atque quae iusto quod. Expedita totam et
        ex repudiandae in soluta consequatur pariatur, neque ullam, blanditiis odio! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Exercitationem adipisci minima eos! Debitis
        atque quae iusto quod. Expedita totam et ex repudiandae in soluta consequatur pariatur,
        neque ullam, blanditiis odio!
      </p>
    </div>
  )
}
