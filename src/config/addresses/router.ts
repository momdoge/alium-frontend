import { ChainId } from '@alium-official/sdk'

const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xB0e28C53B7C84741085EFE2e16CFF1d04149848f',
  [ChainId.BSCTESTNET]: '0x9F337DC10F14402287449De5444428A98aC63fc9',
  [ChainId.HECOMAINNET]: '0x87AAc701daFB96F9Fc6E3239FB19e91B455a4BC0',
  [ChainId.HECOTESTNET]: '0x9C55b05b03bFDC000F20Ff108516959711d906c4',
}

export default ROUTER_ADDRESS