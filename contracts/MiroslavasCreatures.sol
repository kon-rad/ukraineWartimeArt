//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol"; 

contract MiroslavasCreatures is ERC721Enumerable, Ownable, ReentrancyGuard {
    
    string public baseURI;
    uint256 public mintedCount = 0;
    uint256 public earlyCount = 0;
    uint256 public MAX_CREATURES = 2500;
    uint256 public MAX_PER_MINT = 50;
    uint256 public EARLY_MINT = 50;
    uint256 public earlyPrice = 5 ether;
    uint256 public price = 150 ether;
    bool public active;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _uri
    ) ERC721(_name, _symbol) {
        baseURI = _uri;
        active = true;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _uri) external onlyOwner {
        baseURI = _uri;
    }

    function toggleActive() external onlyOwner {
        active = !active;
    }

    modifier whenActive() {
        require(active, "Mint is not active");
        _;
    }

    function mintCreature(uint256 quantity) external payable whenActive nonReentrant {
        require(mintedCount + quantity <= MAX_CREATURES, "Minting would exceed max supply");
        require(quantity <= MAX_PER_MINT, "Requested quantity exceeds max per mint");
        require(quantity > 0, "Must mint at least one creature");

        uint256 actualMintPrice = (earlyCount + quantity) < EARLY_MINT ? earlyPrice : price;

        uint256 costToMint = actualMintPrice * quantity;
        require(costToMint <= msg.value, "Value sent is not correct");
        
        for (uint256 i = 0; i < quantity; i++) {
            if (mintedCount < MAX_CREATURES) {
                mintedCount++;
                _safeMint(msg.sender, mintedCount);
            }
        }
        
        // if sent too much, return to sender left over ether
        if (msg.value > costToMint) {
            Address.sendValue(payable(msg.sender), msg.value - costToMint);
        }
    }

    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        Address.sendValue(payable(owner()), balance);
    }

    function getBalance() external view returns (uint256) {
       return address(this).balance;
    }

    receive() external payable {}

    function selfDestruct() public onlyOwner {
        selfdestruct(payable(address(owner())));
    }
    
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, Strings.toString(tokenId), ".json")) : "";
    }
}
