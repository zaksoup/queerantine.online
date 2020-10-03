import Layout from '../components/Layout'
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout title="Queerantine Online | Home">

    <h1 className={styles.header}>Home Page!</h1>
    <ul>
      <li><a href="https://dnd.queerantine.online">the DND Game</a></li>
    </ul>
  </Layout>
)

export default IndexPage
