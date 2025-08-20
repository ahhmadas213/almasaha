import styles from './style.module.scss';
import { FaTiktok, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

export default function index() {
  return (
    <div className={styles.footer}>
       <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
          <FaTiktok size={20} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black  border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-almost_black  border border-white/30 rounded-full text-white hover:bg-almost_black/60 hover:scale-110 transition-all duration-300">
          <FaSnapchatGhost size={20} />
        </a>
    </div>
  )
}
