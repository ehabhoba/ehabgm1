export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData)
  }
}

export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName,
    timestamp: new Date().toISOString()
  })
}

export const trackPageView = (url) => {
  trackEvent('page_view', {
    page_path: url
  })
}
