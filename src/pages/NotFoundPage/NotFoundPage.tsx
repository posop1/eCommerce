import s from './NotFoundPage.module.scss'

interface NotFoundPageProps {}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={s.NotFoundPage}>
      <h2>Not Found</h2>
    </div>
  )
}
