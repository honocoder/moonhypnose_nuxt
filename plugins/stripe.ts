import { loadStripe } from '@stripe/stripe-js'

export default defineNuxtPlugin(async () => {
    const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
    return {
        provide: {
            stripe
        }
    }
})