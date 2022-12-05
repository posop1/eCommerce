import s from './NotFoundPage.module.scss'

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={s.NotFoundPage}>
      <h2>Not Found</h2>
    </div>
  )
}

export default NotFoundPage
