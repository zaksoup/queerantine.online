import Layout from '../components/Layout'
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className={styles.header}>Welcome to Queerantine!</h1>
  </Layout>
)

export default IndexPage
