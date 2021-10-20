import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - Younews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>20 de Outubro de 2021</time>
            <strong>Announcing our Series B funding: a game-changing step towards a plant-based future</strong>
            <p>When we launched allplants five years ago, vegans loved us. But if you weren’t veggie, vegan or baulked at the thought of trying to eat less meat, you probably thought we were mad. I get it. I grew up in North London and come from a Greek Cypriot background — where if you turn up as a veggie, you’re offered lamb. Five years ago, as a plant-curious eater, it was easy to feel like you were in a tiny minority.</p>
          </a>
          <a href="">
            <time>20 de Outubro de 2021</time>
            <strong>Announcing our Series B funding: a game-changing step towards a plant-based future</strong>
            <p>When we launched allplants five years ago, vegans loved us. But if you weren’t veggie, vegan or baulked at the thought of trying to eat less meat, you probably thought we were mad. I get it. I grew up in North London and come from a Greek Cypriot background — where if you turn up as a veggie, you’re offered lamb. Five years ago, as a plant-curious eater, it was easy to feel like you were in a tiny minority.</p>
          </a>
          <a href="">
            <time>20 de Outubro de 2021</time>
            <strong>Announcing our Series B funding: a game-changing step towards a plant-based future</strong>
            <p>When we launched allplants five years ago, vegans loved us. But if you weren’t veggie, vegan or baulked at the thought of trying to eat less meat, you probably thought we were mad. I get it. I grew up in North London and come from a Greek Cypriot background — where if you turn up as a veggie, you’re offered lamb. Five years ago, as a plant-curious eater, it was easy to feel like you were in a tiny minority.</p>
          </a>
        </div>
      </main>
    </>
  )
}