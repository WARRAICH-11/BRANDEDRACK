// Frontend-only mock utilities to simulate Stripe behavior during development
export function createMockPaymentIntent(amount){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ client_secret: 'mock_client_secret_123', amount })
    }, 500)
  })
}

export function confirmMockPayment(clientSecret, card){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.08) resolve({ status: 'succeeded' })
      else reject(new Error('Mock payment failed'))
    }, 900)
  })
}
