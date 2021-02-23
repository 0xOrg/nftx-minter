import { BigInt, Address } from "@graphprotocol/graph-ts"
import { Minted, Redeemed } from '../../generated/schema'
import {
  XToken
} from '../../generated/schema'

export function loadOrCreateXToken(address: Address): XToken {

  let xToken = XToken.load(address.toHex())

  if (!xToken) {
    xToken = new XToken(address.toHex())
    xToken.address = address
    xToken.mints = new Array<string>()
    xToken.redeems = new Array<string>()

    xToken.save()
  }

  return xToken as XToken
}