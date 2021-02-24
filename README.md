# NFTX Minter

A subgraph to record mints and redeems for various xtokens (MASK, PUNK-BASIC etc) and the NFT IDs that have been minted and redeemed.

Subgraph: https://thegraph.com/explorer/subgraph/0xorg/nftx-minter (not working!)

XToken (MASK): https://etherscan.io/address/0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f
Proxy Contract: https://etherscan.io/address/0xaf93fcce0548d3124a5fc3045adaf1dde4e8bf7e
Proxy Contract Implements NFTXv5: https://etherscan.io/address/0xb67f19b92210ca64c32defad5bed2898cdd58ac4#code

Example `Mint()` transaction logs: https://etherscan.io/tx/0xcb8596a7dcb59d60b4ad6cc64a16ceaeae9930b7bfb38ef94902b7d8de7f59a8#eventlog


## Entities

**XToken**

Stores an array of MintEntities and RedeemEntities

**MintEntity**

Stores the XToken and NFT IDs that were minted using the `Mint()` eventHandler.

**RedeemEntity**

Stores the XToken and NFT IDs that were redeemed using the `Redeem()` eventHandler.
