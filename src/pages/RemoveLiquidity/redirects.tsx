import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { ROUTES } from 'routes'

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/

export const RedirectOldRemoveLiquidityPathStructure = () => {
  const { tokens } = useParams<{ tokens: string }>()
  if (!OLD_PATH_STRUCTURE.test(tokens)) {
    return <Redirect to="/pool" />
  }
  const [currency0, currency1] = tokens.split('-')

  return <Redirect to={ROUTES.removeByMultiple(currency0, currency1)} />
}
