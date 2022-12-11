import { motion } from 'framer-motion'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import s from './GoToCart.module.scss'

export const GoToCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={s.GoToCart}
    >
      <Link
        to="/cart"
        className={s.goToCart__link}
      >
        <BsCart2 size={20} />
      </Link>
    </motion.div>
  )
}
