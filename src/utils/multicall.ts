import { getChainId } from '@alium-official/uikit'
import { Interface } from '@ethersproject/abi'
import { MULTICALL_FUNC_ABI, MULTICALL_FUNC_NETWORKS } from 'constants/multicall'
import { getWeb3NoAccount } from 'utils/web3'
import { AbiItem } from 'web3-utils'

interface Call {
  address: string // Address of the contract
  name: string // Function name on the contract (example: balanceOf)
  params?: any[] // Function params
}

const multicall = async (abi: any[], calls: Call[]) => {
  const web3 = getWeb3NoAccount()
  const chainId = getChainId()
  const multi = new web3.eth.Contract(MULTICALL_FUNC_ABI as unknown as AbiItem, MULTICALL_FUNC_NETWORKS[chainId])
  const itf = new Interface(abi)

  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  const returnData = await multi.methods.aggregate(calldata).call()
  // const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

  return returnData
}

export default multicall
