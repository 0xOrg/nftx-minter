# NFTX Minter

A subgraph to record mints and redeems for various xtokens (MASK, PUNK-BASIC etc) and the NFT IDs that have been minted and redeemed.

Subgraph: https://thegraph.com/explorer/subgraph/0xorg/nftx-minter (not working!)

## Entities

**XToken**

Stores an array of MintEntities and RedeemEntities

**MintEntity**

Stores the XToken and NFT IDs that were minted using the `Mint()` eventHandler.

**RedeemEntity**

Stores the XToken and NFT IDs that were redeemed using the `Redeem()` eventHandler.
