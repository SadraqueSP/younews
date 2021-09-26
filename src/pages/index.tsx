import { GetStaticProps } from 'next'
import Head from 'next/head'
import { stripe } from '../services/stripe'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    ammount: number;
  }
}

export default function Home({ product }: HomeProps) {
  console.log(product)

  return (
    <>
      <Head>
        <title>Home - Younews</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications <b />
            <span>for { product.ammount } month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1Je3ycFqrPTwfyFYKkjnjR1t')

  const product = {
    priceId: price.id,
    ammount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 hour
  }
}
