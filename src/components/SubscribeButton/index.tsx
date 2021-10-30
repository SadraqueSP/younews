import { useSession, signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps )  {
  const [ session ] = useSession()
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    if(session.acticeSubscription) {
      router.push('/posts')
    }



    try {
      const res = await api.post('/subscribe')

      const  { sessionId }  = res.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({sessionId})
    } catch (err) {
      console.log(err.message)
      alert(err.message)
    }
  }

  return (
    <button 
      type="button" 
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}