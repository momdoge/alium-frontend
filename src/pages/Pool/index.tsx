import dynamic from 'next/dynamic'
import React from 'react'

const WrapSwapComponent = dynamic(() => import('views/Swap/SwapContainter'), {
  ssr: false,
})

const Pool = dynamic(() => import('views/Pool'), { ssr: false })

const PoolPage = () => {
  return (
    <WrapSwapComponent>
      <Pool />
    </WrapSwapComponent>
  )
}

export default PoolPage
