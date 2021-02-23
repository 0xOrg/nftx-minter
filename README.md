# Example mint TX

<https://etherscan.io/tx/0xd0b50602ae33e81eddd247cbb7e7a2d5703032dcd40bee2e0fad9504c0b2f720>

<https://etherscan.io/address/0xbe54738723cea167a76ad5421b50caa49692e7b7#readContract>

This calls a proxy contract that implements <https://etherscan.io/address/0xb67f19b92210ca64c32defad5bed2898cdd58ac4#contracts>

File 28 of 50: NFTX.sol runs the `mint(uint256 vaultId, uint256[] memory nftIds, uint256 d2Amount)` function which can be used to get the data for indexing

File 28 of 50: NFTX.sol `_redeem(uint256 vaultId, uint256 numNFTs, bool isDualOp)`

This helps - <https://github.com/pooltogether/pooltogether-subgraph>

## How it works

- `mint()` gets the XToken address from the call's vaulId
- creates XToken entity
- creates a Minted entity
- adds Minted entity to XToken entity

Now you can query XTokens for all their mints (and redeems)