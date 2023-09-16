import React from 'react'
import { useTranslation } from 'react-i18next'

function AboutPage () {
  const { t } = useTranslation()

  return (
    <h2>{t('О сайте')}</h2>
  )
}

export default AboutPage
