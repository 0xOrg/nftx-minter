import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts'
import {
  Mint,
  Redeem
} from '../generated/nftx/contract'
import { XStore } from '../generated/xstore/XStore';
import { XToken, Minted, Redeemed } from '../generated/schema'

import { loadOrCreateXToken } from './helpers/loadOrCreateXToken'

const xStoreAddress = '0xBe54738723cea167a76ad5421b50cAa49692E7B7'

function getXToken(vaultId: BigInt): XToken {
  const boundXStore = XStore.bind(Address.fromString(xStoreAddress))
  const xTokenAddress = boundXStore.xTokenAddress(vaultId)

  let xToken = loadOrCreateXToken(xTokenAddress)

  return xToken
}

export function handleMint(event: Mint): void {

  // Get the xToken address from the vaultId
  let vaultId = event.params.vaultId
  let xToken = getXToken(vaultId)

  // create the minted entity
  let minted = new Minted(event.transaction.hash.toHex())
  minted.user = event.transaction.from
  minted.xToken = xToken.id
  minted.nftIds = event.params.nftIds
  minted.timestamp = event.block.timestamp

  minted.save()

  // add these mints to the xtoken entity
  xToken.mints.push(minted.id)
  xToken.save()
}

export function handleRedeem(event: Redeem): void {
  // Get the xToken address from the vaultId
  let vaultId = event.params.vaultId
  let xToken = getXToken(vaultId)

  // create the redeemed entity
  let redeemed = new Redeemed(event.transaction.hash.toHex())
  redeemed.user = event.transaction.from
  redeemed.xToken = xToken.id
  redeemed.nftIds = event.params.nftIds
  redeemed.timestamp = event.block.timestamp

  redeemed.save()

  // add these mints to the xtoken entity
  xToken.mints.push(redeemed.id)
  xToken.save()
}

export function handleBlock(block: ethereum.Block): void {}