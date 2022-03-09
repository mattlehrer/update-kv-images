export const abi = {
	guessFromInterface: false,
	iface: [
		'constructor()',
		'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
		'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
		'event Claimed(uint256 index, address account, uint256 amount)',
		'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
		'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
		'function EXPERIMENTAL_UNAUDITED_NO_ROADMAP_ABSOLUTELY_NO_PROMISES_BUT_I_ACKNOWLEDGE_AND_WANT_TO_MINT_ANYWAY() payable',
		'function approve(address to, uint256 tokenId)',
		'function balanceOf(address owner) view returns (uint256)',
		'function claimable() view returns (bool)',
		'function getApproved(uint256 tokenId) view returns (address)',
		'function insight(uint256 tokenID) view returns (uint256)',
		'function insightMap(uint256) view returns (uint256 savedXP, uint256 lastSaveBlock)',
		'function isApprovedForAll(address owner, address operator) view returns (bool)',
		'function metadataAddress() view returns (address)',
		'function name() view returns (string)',
		'function owner() view returns (address)',
		'function ownerOf(uint256 tokenId) view returns (address)',
		'function renounceOwnership()',
		'function safeTransferFrom(address from, address to, uint256 tokenId)',
		'function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)',
		'function setApprovalForAll(address operator, bool approved)',
		'function setClaimability(bool claimability)',
		'function setMaxMultiplier(uint256 multiplier)',
		'function setMetadataAddress(address addr)',
		'function setTradability(bool tradability)',
		'function supportsInterface(bytes4 interfaceId) view returns (bool)',
		'function symbol() view returns (string)',
		'function tokenByIndex(uint256 index) view returns (uint256)',
		'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
		'function tokenURI(uint256 tokenID) view returns (string)',
		'function totalSupply() view returns (uint256)',
		'function tradable() view returns (bool)',
		'function transferFrom(address from, address to, uint256 tokenId)',
		'function transferOwnership(address newOwner)',
		'function withdrawAvailableBalance()',
	],
	abi: [
		{
			inputs: <any>[],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'approved',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'Approval',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: 'approved',
					type: 'bool',
				},
			],
			name: 'ApprovalForAll',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'index',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'Claimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
				{
					indexed: true,
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			inputs: [],
			name: 'EXPERIMENTAL_UNAUDITED_NO_ROADMAP_ABSOLUTELY_NO_PROMISES_BUT_I_ACKNOWLEDGE_AND_WANT_TO_MINT_ANYWAY',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			],
			name: 'approve',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
			name: 'balanceOf',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'claimable',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
			name: 'getApproved',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: 'tokenID', type: 'uint256' }],
			name: 'insight',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			name: 'insightMap',
			outputs: [
				{ internalType: 'uint256', name: 'savedXP', type: 'uint256' },
				{ internalType: 'uint256', name: 'lastSaveBlock', type: 'uint256' },
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'address', name: 'operator', type: 'address' },
			],
			name: 'isApprovedForAll',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'metadataAddress',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'name',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'owner',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
			name: 'ownerOf',
			outputs: [{ internalType: 'address', name: '', type: 'address' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
				{ internalType: 'bytes', name: '_data', type: 'bytes' },
			],
			name: 'safeTransferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'operator', type: 'address' },
				{ internalType: 'bool', name: 'approved', type: 'bool' },
			],
			name: 'setApprovalForAll',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'bool', name: 'claimability', type: 'bool' }],
			name: 'setClaimability',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'uint256', name: 'multiplier', type: 'uint256' },
			],
			name: 'setMaxMultiplier',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: 'addr', type: 'address' }],
			name: 'setMetadataAddress',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'bool', name: 'tradability', type: 'bool' }],
			name: 'setTradability',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
			name: 'supportsInterface',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
			name: 'tokenByIndex',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'owner', type: 'address' },
				{ internalType: 'uint256', name: 'index', type: 'uint256' },
			],
			name: 'tokenOfOwnerByIndex',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'uint256', name: 'tokenID', type: 'uint256' }],
			name: 'tokenURI',
			outputs: [{ internalType: 'string', name: '', type: 'string' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'tradable',
			outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{ internalType: 'address', name: 'from', type: 'address' },
				{ internalType: 'address', name: 'to', type: 'address' },
				{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			],
			name: 'transferFrom',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'withdrawAvailableBalance',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
	source: {
		language: 'Solidity',
		sources: {
			'contracts/Corruptions.sol': {
				content:
					'// SPDX-License-Identifier: Unlicense\n\n/*\n    $$8$$$8$$$$$$$88$$$$$$$$8$8$$$$\n    8...................8..8......$\n    $.8......88.......8.......8...$\n    $..88.......8CC8CC............$\n    $8.........C88OOO8CC......8..8$\n    $8.8.....88OOR8RRR8OCC8....8..$\n    $.......C.ORRRRRRRRRO.C....8..$\n    $....8.C.88RRUUUUURRRO.C.8....$\n    $8...8C.8RR.UP8PPPU.RRO.C.....$\n    $.8..8.OR8.88.T88.PU.RRO.88...$\n    $...8CO8R.UPTTI8I8TP8.RROC.8.8$\n    $...CO8R.UPT.IOOO8.TPU.RROC..8$\n    $.88CORRUP8.IO8N8OI.TPURR8C8..$\n    $..C8RR8P.TION.8.8OIT.P8RROC..$\n    $.8COR8UP8ION..8..NOIT8URROC..$\n    8..CORRUPTION..8..NOI8PURRO8..$\n    $.88ORRUP8ION.....8OITPU8ROC..$\n    $..CORRUP.TION...NOIT.PURR8C..$\n    $...COR8UPT.I8N8NOI.TP8RROC..8$\n    $...COR8.U8T8IOO8I.TPU8RROC...$\n    $8...C88R.UPTTIII8888.RROC..8.$\n    $8.8.C.ORR.8P.TT88PU.RRO.C8...$\n    $.8...C.ORR.UPP8PP8.R8O.C...8.$\n    $......C.8R88UUUU8RRRO.C8....8$\n    8.......C.OR8RRRRRRRO.C.......$\n    $....8.8.CCOORRRR888CC...88...$\n    $..........CCOO8OOCC..........$\n    $........88..CCC8C..8.........$\n    88.8......8.............88....$\n    $.....................88..88..$\n    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n\n    unfine art by dom\n\n    1/ 4,196 corruptions\n    1/ corruptions gain insight over time\n    1/ insight accelerates if a corruption is stabilized (left alone)\n    1/ insight decelerates if a corruption is destabilized (moved)\n*/\n\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";\nimport "@openzeppelin/contracts/access/Ownable.sol";\nimport "@openzeppelin/contracts/security/ReentrancyGuard.sol";\nimport "./CorruptionsMetadata.sol";\n\ncontract Corruptions is ERC721Enumerable,  ReentrancyGuard, Ownable {\n    event Claimed(uint256 index, address account, uint256 amount);\n\n    address public metadataAddress;\n\n    bool public tradable;\n    bool public claimable;\n\n    uint256 private maxMultiplier;\n\n    struct XP {\n        uint256 savedXP;\n        uint256 lastSaveBlock;\n    }\n\n    mapping (uint256 => XP) public insightMap;\n\n    uint256 private balance;\n\n    modifier onlyWhenTradable() {\n        require(tradable, "Corruptions: cannot trade");\n        _;\n    }\n\n    constructor() ERC721("Corruptions", "CORRUPT") Ownable() {\n        tradable = true;\n        maxMultiplier = 24;\n    }\n\n    function setMetadataAddress(address addr) public onlyOwner {\n        metadataAddress = addr;\n    }\n\n    function setTradability(bool tradability) public onlyOwner {\n        tradable = tradability;\n    }\n\n    function setClaimability(bool claimability) public onlyOwner {\n        claimable = claimability;\n    }\n\n    function setMaxMultiplier(uint256 multiplier) public onlyOwner {\n        maxMultiplier = multiplier;\n    }\n\n    function insight(uint256 tokenID) public view returns (uint256) { \n        uint256 lastBlock = insightMap[tokenID].lastSaveBlock;\n        if (lastBlock == 0) {\n            return 0;\n        }\n        uint256 delta = block.number - lastBlock;\n        uint256 multiplier = delta / 200000;\n        if (multiplier > maxMultiplier) {\n            multiplier = maxMultiplier;\n        }\n        uint256 total = insightMap[tokenID].savedXP + (delta * (multiplier + 1) / 10000);\n        if (total < 1) total = 1;\n\n        return total;\n    }\n\n    function save(uint256 tokenID) private {\n        insightMap[tokenID].savedXP = insight(tokenID);\n        insightMap[tokenID].lastSaveBlock = block.number;\n    }\n\n    function tokenURI(uint256 tokenID) override public view returns (string memory) {\n        require(metadataAddress != address(0), "Corruptions: no metadata address");\n        require(tokenID < totalSupply(), "Corruptions: token doesn\'t exist");\n        return ICorruptionsMetadata(metadataAddress).tokenURI(tokenID, insight(tokenID));\n    }\n\n    function transferFrom(address from, address to, uint256 tokenId) public override onlyWhenTradable {\n        super.transferFrom(from, to, tokenId);\n    }\n\n    function safeTransferFrom(address from, address to, uint256 tokenId) public override onlyWhenTradable {\n        super.safeTransferFrom(from, to, tokenId);\n    }\n\n    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public override onlyWhenTradable {\n        super.safeTransferFrom(from, to, tokenId, _data);\n    }\n\n    function approve(address to, uint256 tokenId) public override onlyWhenTradable {\n        super.approve(to, tokenId);\n    }\n\n    function setApprovalForAll(address operator, bool approved) public override onlyWhenTradable {\n        super.setApprovalForAll(operator, approved);\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override {\n        super._beforeTokenTransfer(from, to, tokenId);\n\n        save(tokenId);\n    }\n\n    function EXPERIMENTAL_UNAUDITED_NO_ROADMAP_ABSOLUTELY_NO_PROMISES_BUT_I_ACKNOWLEDGE_AND_WANT_TO_MINT_ANYWAY() payable public nonReentrant {\n        require(msg.value == 0.08 ether, "Corruptions: 0.08 ETH to mint");\n        require(claimable || _msgSender() == owner(), "Corruptions: cannot claim");\n        require(totalSupply() < 4196, "Corruptions: all claimed");\n        _mint(_msgSender(), totalSupply());\n\n        balance += 0.08 ether;\n    }\n\n    function withdrawAvailableBalance() public nonReentrant onlyOwner {\n        uint256 b = balance;\n        balance = 0;\n        payable(msg.sender).transfer(b);\n    }\n}',
			},
			'@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol': {
				content:
					"// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport \"../ERC721.sol\";\nimport \"./IERC721Enumerable.sol\";\n\n/**\n * @dev This implements an optional extension of {ERC721} defined in the EIP that adds\n * enumerability of all the token ids in the contract as well as all token ids owned by each\n * account.\n */\nabstract contract ERC721Enumerable is ERC721, IERC721Enumerable {\n    // Mapping from owner to list of owned token IDs\n    mapping(address => mapping(uint256 => uint256)) private _ownedTokens;\n\n    // Mapping from token ID to index of the owner tokens list\n    mapping(uint256 => uint256) private _ownedTokensIndex;\n\n    // Array with all token ids, used for enumeration\n    uint256[] private _allTokens;\n\n    // Mapping from token id to position in the allTokens array\n    mapping(uint256 => uint256) private _allTokensIndex;\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(IERC165, ERC721) returns (bool) {\n        return interfaceId == type(IERC721Enumerable).interfaceId || super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-tokenOfOwnerByIndex}.\n     */\n    function tokenOfOwnerByIndex(address owner, uint256 index) public view virtual override returns (uint256) {\n        require(index < ERC721.balanceOf(owner), \"ERC721Enumerable: owner index out of bounds\");\n        return _ownedTokens[owner][index];\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-totalSupply}.\n     */\n    function totalSupply() public view virtual override returns (uint256) {\n        return _allTokens.length;\n    }\n\n    /**\n     * @dev See {IERC721Enumerable-tokenByIndex}.\n     */\n    function tokenByIndex(uint256 index) public view virtual override returns (uint256) {\n        require(index < ERC721Enumerable.totalSupply(), \"ERC721Enumerable: global index out of bounds\");\n        return _allTokens[index];\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning.\n     *\n     * Calling conditions:\n     *\n     * - When `from` and `to` are both non-zero, ``from``'s `tokenId` will be\n     * transferred to `to`.\n     * - When `from` is zero, `tokenId` will be minted for `to`.\n     * - When `to` is zero, ``from``'s `tokenId` will be burned.\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual override {\n        super._beforeTokenTransfer(from, to, tokenId);\n\n        if (from == address(0)) {\n            _addTokenToAllTokensEnumeration(tokenId);\n        } else if (from != to) {\n            _removeTokenFromOwnerEnumeration(from, tokenId);\n        }\n        if (to == address(0)) {\n            _removeTokenFromAllTokensEnumeration(tokenId);\n        } else if (to != from) {\n            _addTokenToOwnerEnumeration(to, tokenId);\n        }\n    }\n\n    /**\n     * @dev Private function to add a token to this extension's ownership-tracking data structures.\n     * @param to address representing the new owner of the given token ID\n     * @param tokenId uint256 ID of the token to be added to the tokens list of the given address\n     */\n    function _addTokenToOwnerEnumeration(address to, uint256 tokenId) private {\n        uint256 length = ERC721.balanceOf(to);\n        _ownedTokens[to][length] = tokenId;\n        _ownedTokensIndex[tokenId] = length;\n    }\n\n    /**\n     * @dev Private function to add a token to this extension's token tracking data structures.\n     * @param tokenId uint256 ID of the token to be added to the tokens list\n     */\n    function _addTokenToAllTokensEnumeration(uint256 tokenId) private {\n        _allTokensIndex[tokenId] = _allTokens.length;\n        _allTokens.push(tokenId);\n    }\n\n    /**\n     * @dev Private function to remove a token from this extension's ownership-tracking data structures. Note that\n     * while the token is not assigned a new owner, the `_ownedTokensIndex` mapping is _not_ updated: this allows for\n     * gas optimizations e.g. when performing a transfer operation (avoiding double writes).\n     * This has O(1) time complexity, but alters the order of the _ownedTokens array.\n     * @param from address representing the previous owner of the given token ID\n     * @param tokenId uint256 ID of the token to be removed from the tokens list of the given address\n     */\n    function _removeTokenFromOwnerEnumeration(address from, uint256 tokenId) private {\n        // To prevent a gap in from's tokens array, we store the last token in the index of the token to delete, and\n        // then delete the last slot (swap and pop).\n\n        uint256 lastTokenIndex = ERC721.balanceOf(from) - 1;\n        uint256 tokenIndex = _ownedTokensIndex[tokenId];\n\n        // When the token to delete is the last token, the swap operation is unnecessary\n        if (tokenIndex != lastTokenIndex) {\n            uint256 lastTokenId = _ownedTokens[from][lastTokenIndex];\n\n            _ownedTokens[from][tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token\n            _ownedTokensIndex[lastTokenId] = tokenIndex; // Update the moved token's index\n        }\n\n        // This also deletes the contents at the last position of the array\n        delete _ownedTokensIndex[tokenId];\n        delete _ownedTokens[from][lastTokenIndex];\n    }\n\n    /**\n     * @dev Private function to remove a token from this extension's token tracking data structures.\n     * This has O(1) time complexity, but alters the order of the _allTokens array.\n     * @param tokenId uint256 ID of the token to be removed from the tokens list\n     */\n    function _removeTokenFromAllTokensEnumeration(uint256 tokenId) private {\n        // To prevent a gap in the tokens array, we store the last token in the index of the token to delete, and\n        // then delete the last slot (swap and pop).\n\n        uint256 lastTokenIndex = _allTokens.length - 1;\n        uint256 tokenIndex = _allTokensIndex[tokenId];\n\n        // When the token to delete is the last token, the swap operation is unnecessary. However, since this occurs so\n        // rarely (when the last minted token is burnt) that we still do the swap here to avoid the gas cost of adding\n        // an 'if' statement (like in _removeTokenFromOwnerEnumeration)\n        uint256 lastTokenId = _allTokens[lastTokenIndex];\n\n        _allTokens[tokenIndex] = lastTokenId; // Move the last token to the slot of the to-delete token\n        _allTokensIndex[lastTokenId] = tokenIndex; // Update the moved token's index\n\n        // This also deletes the contents at the last position of the array\n        delete _allTokensIndex[tokenId];\n        _allTokens.pop();\n    }\n}\n",
			},
			'@openzeppelin/contracts/access/Ownable.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "../utils/Context.sol";\n\n/**\n * @dev Contract module which provides a basic access control mechanism, where\n * there is an account (an owner) that can be granted exclusive access to\n * specific functions.\n *\n * By default, the owner account will be the one that deploys the contract. This\n * can later be changed with {transferOwnership}.\n *\n * This module is used through inheritance. It will make available the modifier\n * `onlyOwner`, which can be applied to your functions to restrict their use to\n * the owner.\n */\nabstract contract Ownable is Context {\n    address private _owner;\n\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n    /**\n     * @dev Initializes the contract setting the deployer as the initial owner.\n     */\n    constructor() {\n        _setOwner(_msgSender());\n    }\n\n    /**\n     * @dev Returns the address of the current owner.\n     */\n    function owner() public view virtual returns (address) {\n        return _owner;\n    }\n\n    /**\n     * @dev Throws if called by any account other than the owner.\n     */\n    modifier onlyOwner() {\n        require(owner() == _msgSender(), "Ownable: caller is not the owner");\n        _;\n    }\n\n    /**\n     * @dev Leaves the contract without owner. It will not be possible to call\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\n     *\n     * NOTE: Renouncing ownership will leave the contract without an owner,\n     * thereby removing any functionality that is only available to the owner.\n     */\n    function renounceOwnership() public virtual onlyOwner {\n        _setOwner(address(0));\n    }\n\n    /**\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\n     * Can only be called by the current owner.\n     */\n    function transferOwnership(address newOwner) public virtual onlyOwner {\n        require(newOwner != address(0), "Ownable: new owner is the zero address");\n        _setOwner(newOwner);\n    }\n\n    function _setOwner(address newOwner) private {\n        address oldOwner = _owner;\n        _owner = newOwner;\n        emit OwnershipTransferred(oldOwner, newOwner);\n    }\n}\n',
			},
			'@openzeppelin/contracts/security/ReentrancyGuard.sol': {
				content:
					"// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Contract module that helps prevent reentrant calls to a function.\n *\n * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n * available, which can be applied to functions to make sure there are no nested\n * (reentrant) calls to them.\n *\n * Note that because there is a single `nonReentrant` guard, functions marked as\n * `nonReentrant` may not call one another. This can be worked around by making\n * those functions `private`, and then adding `external` `nonReentrant` entry\n * points to them.\n *\n * TIP: If you would like to learn more about reentrancy and alternative ways\n * to protect against it, check out our blog post\n * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\n */\nabstract contract ReentrancyGuard {\n    // Booleans are more expensive than uint256 or any type that takes up a full\n    // word because each write operation emits an extra SLOAD to first read the\n    // slot's contents, replace the bits taken up by the boolean, and then write\n    // back. This is the compiler's defense against contract upgrades and\n    // pointer aliasing, and it cannot be disabled.\n\n    // The values being non-zero value makes deployment a bit more expensive,\n    // but in exchange the refund on every call to nonReentrant will be lower in\n    // amount. Since refunds are capped to a percentage of the total\n    // transaction's gas, it is best to keep them low in cases like this one, to\n    // increase the likelihood of the full refund coming into effect.\n    uint256 private constant _NOT_ENTERED = 1;\n    uint256 private constant _ENTERED = 2;\n\n    uint256 private _status;\n\n    constructor() {\n        _status = _NOT_ENTERED;\n    }\n\n    /**\n     * @dev Prevents a contract from calling itself, directly or indirectly.\n     * Calling a `nonReentrant` function from another `nonReentrant`\n     * function is not supported. It is possible to prevent this from happening\n     * by making the `nonReentrant` function external, and make it call a\n     * `private` function that does the actual work.\n     */\n    modifier nonReentrant() {\n        // On the first call to nonReentrant, _notEntered will be true\n        require(_status != _ENTERED, \"ReentrancyGuard: reentrant call\");\n\n        // Any calls to nonReentrant after this point will fail\n        _status = _ENTERED;\n\n        _;\n\n        // By storing the original value once again, a refund is triggered (see\n        // https://eips.ethereum.org/EIPS/eip-2200)\n        _status = _NOT_ENTERED;\n    }\n}\n",
			},
			'contracts/CorruptionsMetadata.sol': {
				content:
					'// SPDX-License-Identifier: Unlicense\n\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/access/Ownable.sol";\nimport "./Base64.sol";\n\ninterface ICorruptionsMetadata {\n    function tokenURI(uint256 tokenId, uint256 amount) external view returns (string memory);\n}\n\ncontract CorruptionsMetadata is Ownable, ICorruptionsMetadata {\n    string public description;\n\n    struct RandParts {\n        string border;\n        string corruptor;\n        string phrase;\n    }\n\n    constructor() Ownable() {\n        description = "Unknown";\n    }\n\n    function setDescription(string memory desc) public onlyOwner {\n        description = desc;\n    }\n\n    function _blank(string[32] memory canvas) public pure returns (string[32] memory) {\n        for (uint8 i = 0; i < 32; i++) {\n            canvas[i] = "...............................";\n        }\n        return canvas;\n    }\n\n    function _box(string[32] memory canvas, string memory char, uint256 x, uint256 y, uint256 w, uint256 h) public pure returns (string[32] memory) {\n        bytes1 byteChar = bytes(char)[0];\n        for (uint256 iy = 0; iy < h; iy++) {\n            for (uint256 ix = 0; ix < w; ix++) {\n                bytes(canvas[iy + y])[ix + x] = byteChar;\n            }\n        }\n        return canvas;\n    }\n\n    function _drawCircle(string[32] memory canvas, string memory char, uint256 xc, uint256 yc, uint256 x, uint256 y) public pure returns (string[32] memory) { \n        bytes1 byteChar = bytes(char)[0];\n        bytes(canvas[yc + y])[xc + x] = byteChar;\n        bytes(canvas[yc + y])[xc - x] = byteChar;\n        bytes(canvas[yc - y])[xc + x] = byteChar;\n        bytes(canvas[yc - y])[xc - x] = byteChar;\n        bytes(canvas[yc + x])[xc + y] = byteChar;\n        bytes(canvas[yc + x])[xc - y] = byteChar;\n        bytes(canvas[yc - x])[xc + y] = byteChar;\n        bytes(canvas[yc - x])[xc - y] = byteChar;\n\n        return canvas;\n    }\n\n    function _circle(string[32] memory canvas, string memory char, uint256 xc, uint256 yc, int8 r) public pure returns (string[32] memory) {\n        // https://www.geeksforgeeks.org/bresenhams-circle-drawing-algorithm/\n\n        int256 x = 0;\n        int256 y = int256(r);\n        int256 d = 3 - 2 * r;\n        canvas = _drawCircle(canvas, char, xc, yc, uint256(x), uint256(y));\n        while (y >= x) {\n            x++;\n\n            if (d > 0) {\n                y--;\n                d = d + 4 * (x - y) + 10;\n            } else {\n                d = d + 4 * x + 6;\n            }\n            canvas = _drawCircle(canvas, char, xc, yc, uint256(x), uint256(y));\n        }\n\n        return canvas;\n    }\n\n    function _text(string[32] memory canvas, string memory message, uint256 messageLength, uint256 x, uint256 y) public pure returns (string[32] memory) {\n        for (uint256 i = 0; i < messageLength; i++) {\n            bytes(canvas[y])[x + i] = bytes(message)[i];\n        }\n\n        return canvas;\n    }\n\n    function draw(uint256 tokenId, uint256 amount) public pure returns (string memory) {\n        string[31] memory lookup = [\n            "20",\n            "30",\n            "40",\n            "50",\n            "60",\n            "70",\n            "80",\n            "90",\n            "100",\n            "110",\n            "120",\n            "130",\n            "140",\n            "150",\n            "160",\n            "170",\n            "180",\n            "190",\n            "200",\n            "210",\n            "220",\n            "230",\n            "240",\n            "250",\n            "260",\n            "270",\n            "280",\n            "290",\n            "300",\n            "310",\n            "320"\n        ];\n\n        string[33] memory randomStrings = [\n            "/",\n            "$",\n            "|",\n            "8",\n            "_",\n            "?",\n            "#",\n            "%",\n            "^",\n            "~",\n            ":",\n\n            "#022FB7",\n            "#262A36",\n            "#A802B7",\n            "#3CB702",\n            "#B76F02",\n            "#B70284",\n\n            "#0D1302",\n            "#020A13",\n            "#130202",\n            "#1A1616",\n            "#000000",\n            "#040A27",\n            \n            "GENERATION",\n            "INDIVIDUAL",\n            "TECHNOLOGY",\n            "EVERYTHING",\n            "EVERYWHERE",\n            "UNDERWORLD",\n            "ILLUMINATI",\n            "TEMPTATION",\n            "REVELATION",\n            "CORRUPTION"\n        ];\n\n        RandParts memory randParts;\n\n        randParts.border = randomStrings[uint256(keccak256(abi.encodePacked("BORDER", tokenId))) % 11];\n        randParts.corruptor = randomStrings[uint256(keccak256(abi.encodePacked("CORRUPTOR", tokenId))) % 11];\n        randParts.phrase = randomStrings[23 + uint256(keccak256(abi.encodePacked("PHRASE", tokenId))) % 10];\n\n        string[32] memory canvas;\n        canvas = _blank(canvas);\n\n        canvas = _box(canvas, randParts.border, 0, 0, 31, 1);\n        canvas = _box(canvas, randParts.border, 0, 30, 31, 1);\n        canvas = _box(canvas, randParts.border, 0, 0, 1, 31);\n        canvas = _box(canvas, randParts.border, 30, 0, 1, 31);\n\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[0])), 15, 15, 12);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[1])), 15, 15, 11);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[2])), 15, 15, 10);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[3])), 15, 15, 9);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[4])), 15, 15, 8);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[5])), 15, 15, 7);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[6])), 15, 15, 6);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[7])), 15, 15, 5);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[8])), 15, 15, 4);\n        canvas = _circle(canvas, string(abi.encodePacked(bytes(randParts.phrase)[9])), 15, 15, 3);\n\n        uint256 iterations = uint256(keccak256(abi.encodePacked("CORRUPTION", tokenId))) % 1024;\n        for (uint256 i = 0; i < iterations; i++) {\n            canvas = _box(canvas, randParts.corruptor, uint256(keccak256(abi.encodePacked("X", i, tokenId))) % 30, uint256(keccak256(abi.encodePacked("Y", i, tokenId))) % 30, 1, 1);\n        }\n\n        uint256 length = 8 + bytes(toString(amount)).length;\n        canvas = _text(canvas, string(abi.encodePacked("INSIGHT ", toString(amount))), length, 31 - length, 30); \n\n        string memory output;\n        for (uint8 i = 0; i < 31; i++) {\n            output = string(abi.encodePacked(\n                output, \'<text x="10" y="\', lookup[i], \'" class="base">\', canvas[i], \'</text>\'\n            ));\n        }\n\n        string[7] memory parts;\n        parts[0] = \'<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 205 335"><style>.base { fill: \';\n        parts[1] = randomStrings[11 + uint256(keccak256(abi.encodePacked("BGCOLOR", tokenId))) % 6];\n        parts[2] = \'; font-family: monospace; font-size: 10px; }</style><rect width="100%" height="100%" fill="\';\n        parts[3] = randomStrings[27 + uint256(keccak256(abi.encodePacked("FGCOLOR", tokenId))) % 6];\n        parts[4] = \'" />\';\n        parts[5] = output;\n        parts[6] = \'</svg>\';\n\n        return Base64.encode(abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6]));\n    }\n\n    function tokenURI(uint256 tokenId, uint256 amount) override external view returns (string memory) {\n        string memory json = Base64.encode(bytes(string(abi.encodePacked(\'{"name": "0x\', toHexString(tokenId), \'", "description": "\', description, \'", "image": "data:image/svg+xml;base64,\', draw(tokenId, amount), \'", "attributes": [{"trait_type": "Insight", "value": "\', toString(amount), \'"}]}\'))));\n        return string(abi.encodePacked("data:application/json;base64,", json));\n    }\n\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT license\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    function toHexString(uint i) internal pure returns (string memory) {\n        // https://stackoverflow.com/a/69302348/424107\n        \n        if (i == 0) return "0";\n        uint j = i;\n        uint length;\n        while (j != 0) {\n            length++;\n            j = j >> 4;\n        }\n        uint mask = 15;\n        bytes memory bstr = new bytes(length);\n        uint k = length;\n        while (i != 0) {\n            uint curr = (i & mask);\n            bstr[--k] = curr > 9 ?\n                bytes1(uint8(55 + curr)) :\n                bytes1(uint8(48 + curr)); // 55 = 65 - 10\n            i = i >> 4;\n        }\n        return string(bstr);\n    }\n}',
			},
			'@openzeppelin/contracts/token/ERC721/ERC721.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "./IERC721.sol";\nimport "./IERC721Receiver.sol";\nimport "./extensions/IERC721Metadata.sol";\nimport "../../utils/Address.sol";\nimport "../../utils/Context.sol";\nimport "../../utils/Strings.sol";\nimport "../../utils/introspection/ERC165.sol";\n\n/**\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\n * {ERC721Enumerable}.\n */\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\n    using Address for address;\n    using Strings for uint256;\n\n    // Token name\n    string private _name;\n\n    // Token symbol\n    string private _symbol;\n\n    // Mapping from token ID to owner address\n    mapping(uint256 => address) private _owners;\n\n    // Mapping owner address to token count\n    mapping(address => uint256) private _balances;\n\n    // Mapping from token ID to approved address\n    mapping(uint256 => address) private _tokenApprovals;\n\n    // Mapping from owner to operator approvals\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\n\n    /**\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\n     */\n    constructor(string memory name_, string memory symbol_) {\n        _name = name_;\n        _symbol = symbol_;\n    }\n\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\n        return\n            interfaceId == type(IERC721).interfaceId ||\n            interfaceId == type(IERC721Metadata).interfaceId ||\n            super.supportsInterface(interfaceId);\n    }\n\n    /**\n     * @dev See {IERC721-balanceOf}.\n     */\n    function balanceOf(address owner) public view virtual override returns (uint256) {\n        require(owner != address(0), "ERC721: balance query for the zero address");\n        return _balances[owner];\n    }\n\n    /**\n     * @dev See {IERC721-ownerOf}.\n     */\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\n        address owner = _owners[tokenId];\n        require(owner != address(0), "ERC721: owner query for nonexistent token");\n        return owner;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-name}.\n     */\n    function name() public view virtual override returns (string memory) {\n        return _name;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-symbol}.\n     */\n    function symbol() public view virtual override returns (string memory) {\n        return _symbol;\n    }\n\n    /**\n     * @dev See {IERC721Metadata-tokenURI}.\n     */\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\n        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");\n\n        string memory baseURI = _baseURI();\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";\n    }\n\n    /**\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\n     * by default, can be overriden in child contracts.\n     */\n    function _baseURI() internal view virtual returns (string memory) {\n        return "";\n    }\n\n    /**\n     * @dev See {IERC721-approve}.\n     */\n    function approve(address to, uint256 tokenId) public virtual override {\n        address owner = ERC721.ownerOf(tokenId);\n        require(to != owner, "ERC721: approval to current owner");\n\n        require(\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\n            "ERC721: approve caller is not owner nor approved for all"\n        );\n\n        _approve(to, tokenId);\n    }\n\n    /**\n     * @dev See {IERC721-getApproved}.\n     */\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\n        require(_exists(tokenId), "ERC721: approved query for nonexistent token");\n\n        return _tokenApprovals[tokenId];\n    }\n\n    /**\n     * @dev See {IERC721-setApprovalForAll}.\n     */\n    function setApprovalForAll(address operator, bool approved) public virtual override {\n        require(operator != _msgSender(), "ERC721: approve to caller");\n\n        _operatorApprovals[_msgSender()][operator] = approved;\n        emit ApprovalForAll(_msgSender(), operator, approved);\n    }\n\n    /**\n     * @dev See {IERC721-isApprovedForAll}.\n     */\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\n        return _operatorApprovals[owner][operator];\n    }\n\n    /**\n     * @dev See {IERC721-transferFrom}.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) public virtual override {\n        //solhint-disable-next-line max-line-length\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n\n        _transfer(from, to, tokenId);\n    }\n\n    /**\n     * @dev See {IERC721-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) public virtual override {\n        safeTransferFrom(from, to, tokenId, "");\n    }\n\n    /**\n     * @dev See {IERC721-safeTransferFrom}.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) public virtual override {\n        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");\n        _safeTransfer(from, to, tokenId, _data);\n    }\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n     *\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\n     *\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _safeTransfer(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) internal virtual {\n        _transfer(from, to, tokenId);\n        require(_checkOnERC721Received(from, to, tokenId, _data), "ERC721: transfer to non ERC721Receiver implementer");\n    }\n\n    /**\n     * @dev Returns whether `tokenId` exists.\n     *\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\n     *\n     * Tokens start existing when they are minted (`_mint`),\n     * and stop existing when they are burned (`_burn`).\n     */\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\n        return _owners[tokenId] != address(0);\n    }\n\n    /**\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\n        require(_exists(tokenId), "ERC721: operator query for nonexistent token");\n        address owner = ERC721.ownerOf(tokenId);\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\n    }\n\n    /**\n     * @dev Safely mints `tokenId` and transfers it to `to`.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must not exist.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _safeMint(address to, uint256 tokenId) internal virtual {\n        _safeMint(to, tokenId, "");\n    }\n\n    /**\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\n     */\n    function _safeMint(\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) internal virtual {\n        _mint(to, tokenId);\n        require(\n            _checkOnERC721Received(address(0), to, tokenId, _data),\n            "ERC721: transfer to non ERC721Receiver implementer"\n        );\n    }\n\n    /**\n     * @dev Mints `tokenId` and transfers it to `to`.\n     *\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\n     *\n     * Requirements:\n     *\n     * - `tokenId` must not exist.\n     * - `to` cannot be the zero address.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _mint(address to, uint256 tokenId) internal virtual {\n        require(to != address(0), "ERC721: mint to the zero address");\n        require(!_exists(tokenId), "ERC721: token already minted");\n\n        _beforeTokenTransfer(address(0), to, tokenId);\n\n        _balances[to] += 1;\n        _owners[tokenId] = to;\n\n        emit Transfer(address(0), to, tokenId);\n    }\n\n    /**\n     * @dev Destroys `tokenId`.\n     * The approval is cleared when the token is burned.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _burn(uint256 tokenId) internal virtual {\n        address owner = ERC721.ownerOf(tokenId);\n\n        _beforeTokenTransfer(owner, address(0), tokenId);\n\n        // Clear approvals\n        _approve(address(0), tokenId);\n\n        _balances[owner] -= 1;\n        delete _owners[tokenId];\n\n        emit Transfer(owner, address(0), tokenId);\n    }\n\n    /**\n     * @dev Transfers `tokenId` from `from` to `to`.\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\n     *\n     * Requirements:\n     *\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must be owned by `from`.\n     *\n     * Emits a {Transfer} event.\n     */\n    function _transfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {\n        require(ERC721.ownerOf(tokenId) == from, "ERC721: transfer of token that is not own");\n        require(to != address(0), "ERC721: transfer to the zero address");\n\n        _beforeTokenTransfer(from, to, tokenId);\n\n        // Clear approvals from the previous owner\n        _approve(address(0), tokenId);\n\n        _balances[from] -= 1;\n        _balances[to] += 1;\n        _owners[tokenId] = to;\n\n        emit Transfer(from, to, tokenId);\n    }\n\n    /**\n     * @dev Approve `to` to operate on `tokenId`\n     *\n     * Emits a {Approval} event.\n     */\n    function _approve(address to, uint256 tokenId) internal virtual {\n        _tokenApprovals[tokenId] = to;\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\n    }\n\n    /**\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\n     * The call is not executed if the target address is not a contract.\n     *\n     * @param from address representing the previous owner of the given token ID\n     * @param to target address that will receive the tokens\n     * @param tokenId uint256 ID of the token to be transferred\n     * @param _data bytes optional data to send along with the call\n     * @return bool whether the call correctly returned the expected magic value\n     */\n    function _checkOnERC721Received(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes memory _data\n    ) private returns (bool) {\n        if (to.isContract()) {\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\n                return retval == IERC721Receiver.onERC721Received.selector;\n            } catch (bytes memory reason) {\n                if (reason.length == 0) {\n                    revert("ERC721: transfer to non ERC721Receiver implementer");\n                } else {\n                    assembly {\n                        revert(add(32, reason), mload(reason))\n                    }\n                }\n            }\n        } else {\n            return true;\n        }\n    }\n\n    /**\n     * @dev Hook that is called before any token transfer. This includes minting\n     * and burning.\n     *\n     * Calling conditions:\n     *\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\n     * transferred to `to`.\n     * - When `from` is zero, `tokenId` will be minted for `to`.\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\n     * - `from` and `to` are never both zero.\n     *\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\n     */\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual {}\n}\n',
			},
			'@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "../IERC721.sol";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Enumerable is IERC721 {\n    /**\n     * @dev Returns the total amount of tokens stored by the contract.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns a token ID owned by `owner` at a given `index` of its token list.\n     * Use along with {balanceOf} to enumerate all of ``owner``\'s tokens.\n     */\n    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256 tokenId);\n\n    /**\n     * @dev Returns a token ID at a given `index` of all the tokens stored by the contract.\n     * Use along with {totalSupply} to enumerate all tokens.\n     */\n    function tokenByIndex(uint256 index) external view returns (uint256);\n}\n',
			},
			'@openzeppelin/contracts/token/ERC721/IERC721.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "../../utils/introspection/IERC165.sol";\n\n/**\n * @dev Required interface of an ERC721 compliant contract.\n */\ninterface IERC721 is IERC165 {\n    /**\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\n     */\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\n\n    /**\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\n     */\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\n\n    /**\n     * @dev Returns the number of tokens in ``owner``\'s account.\n     */\n    function balanceOf(address owner) external view returns (uint256 balance);\n\n    /**\n     * @dev Returns the owner of the `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function ownerOf(uint256 tokenId) external view returns (address owner);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Transfers `tokenId` token from `from` to `to`.\n     *\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address from,\n        address to,\n        uint256 tokenId\n    ) external;\n\n    /**\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\n     * The approval is cleared when the token is transferred.\n     *\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\n     *\n     * Requirements:\n     *\n     * - The caller must own the token or be an approved operator.\n     * - `tokenId` must exist.\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address to, uint256 tokenId) external;\n\n    /**\n     * @dev Returns the account approved for `tokenId` token.\n     *\n     * Requirements:\n     *\n     * - `tokenId` must exist.\n     */\n    function getApproved(uint256 tokenId) external view returns (address operator);\n\n    /**\n     * @dev Approve or remove `operator` as an operator for the caller.\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\n     *\n     * Requirements:\n     *\n     * - The `operator` cannot be the caller.\n     *\n     * Emits an {ApprovalForAll} event.\n     */\n    function setApprovalForAll(address operator, bool _approved) external;\n\n    /**\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\n     *\n     * See {setApprovalForAll}\n     */\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\n\n    /**\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\n     *\n     * Requirements:\n     *\n     * - `from` cannot be the zero address.\n     * - `to` cannot be the zero address.\n     * - `tokenId` token must exist and be owned by `from`.\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\n     *\n     * Emits a {Transfer} event.\n     */\n    function safeTransferFrom(\n        address from,\n        address to,\n        uint256 tokenId,\n        bytes calldata data\n    ) external;\n}\n',
			},
			'@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @title ERC721 token receiver interface\n * @dev Interface for any contract that wants to support safeTransfers\n * from ERC721 asset contracts.\n */\ninterface IERC721Receiver {\n    /**\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n     * by `operator` from `from`, this function is called.\n     *\n     * It must return its Solidity selector to confirm the token transfer.\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n     *\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\n     */\n    function onERC721Received(\n        address operator,\n        address from,\n        uint256 tokenId,\n        bytes calldata data\n    ) external returns (bytes4);\n}\n',
			},
			'@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "../IERC721.sol";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://eips.ethereum.org/EIPS/eip-721\n */\ninterface IERC721Metadata is IERC721 {\n    /**\n     * @dev Returns the token collection name.\n     */\n    function name() external view returns (string memory);\n\n    /**\n     * @dev Returns the token collection symbol.\n     */\n    function symbol() external view returns (string memory);\n\n    /**\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\n     */\n    function tokenURI(uint256 tokenId) external view returns (string memory);\n}\n',
			},
			'@openzeppelin/contracts/utils/Address.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Collection of functions related to the address type\n */\nlibrary Address {\n    /**\n     * @dev Returns true if `account` is a contract.\n     *\n     * [IMPORTANT]\n     * ====\n     * It is unsafe to assume that an address for which this function returns\n     * false is an externally-owned account (EOA) and not a contract.\n     *\n     * Among others, `isContract` will return false for the following\n     * types of addresses:\n     *\n     *  - an externally-owned account\n     *  - a contract in construction\n     *  - an address where a contract will be created\n     *  - an address where a contract lived, but was destroyed\n     * ====\n     */\n    function isContract(address account) internal view returns (bool) {\n        // This method relies on extcodesize, which returns 0 for contracts in\n        // construction, since the code is only stored at the end of the\n        // constructor execution.\n\n        uint256 size;\n        assembly {\n            size := extcodesize(account)\n        }\n        return size > 0;\n    }\n\n    /**\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\n     * `recipient`, forwarding all available gas and reverting on errors.\n     *\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\n     * imposed by `transfer`, making them unable to receive funds via\n     * `transfer`. {sendValue} removes this limitation.\n     *\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\n     *\n     * IMPORTANT: because control is transferred to `recipient`, care must be\n     * taken to not create reentrancy vulnerabilities. Consider using\n     * {ReentrancyGuard} or the\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\n     */\n    function sendValue(address payable recipient, uint256 amount) internal {\n        require(address(this).balance >= amount, "Address: insufficient balance");\n\n        (bool success, ) = recipient.call{value: amount}("");\n        require(success, "Address: unable to send value, recipient may have reverted");\n    }\n\n    /**\n     * @dev Performs a Solidity function call using a low level `call`. A\n     * plain `call` is an unsafe replacement for a function call: use this\n     * function instead.\n     *\n     * If `target` reverts with a revert reason, it is bubbled up by this\n     * function (like regular Solidity function calls).\n     *\n     * Returns the raw returned data. To convert to the expected return value,\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\n     *\n     * Requirements:\n     *\n     * - `target` must be a contract.\n     * - calling `target` with `data` must not revert.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionCall(target, data, "Address: low-level call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\n     * `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, 0, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but also transferring `value` wei to `target`.\n     *\n     * Requirements:\n     *\n     * - the calling contract must have an ETH balance of at least `value`.\n     * - the called Solidity function must be `payable`.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value\n    ) internal returns (bytes memory) {\n        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\n     *\n     * _Available since v3.1._\n     */\n    function functionCallWithValue(\n        address target,\n        bytes memory data,\n        uint256 value,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(address(this).balance >= value, "Address: insufficient balance for call");\n        require(isContract(target), "Address: call to non-contract");\n\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\n        return functionStaticCall(target, data, "Address: low-level static call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a static call.\n     *\n     * _Available since v3.3._\n     */\n    function functionStaticCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal view returns (bytes memory) {\n        require(isContract(target), "Address: static call to non-contract");\n\n        (bool success, bytes memory returndata) = target.staticcall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\n        return functionDelegateCall(target, data, "Address: low-level delegate call failed");\n    }\n\n    /**\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\n     * but performing a delegate call.\n     *\n     * _Available since v3.4._\n     */\n    function functionDelegateCall(\n        address target,\n        bytes memory data,\n        string memory errorMessage\n    ) internal returns (bytes memory) {\n        require(isContract(target), "Address: delegate call to non-contract");\n\n        (bool success, bytes memory returndata) = target.delegatecall(data);\n        return verifyCallResult(success, returndata, errorMessage);\n    }\n\n    /**\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\n     * revert reason using the provided one.\n     *\n     * _Available since v4.3._\n     */\n    function verifyCallResult(\n        bool success,\n        bytes memory returndata,\n        string memory errorMessage\n    ) internal pure returns (bytes memory) {\n        if (success) {\n            return returndata;\n        } else {\n            // Look for revert reason and bubble it up if present\n            if (returndata.length > 0) {\n                // The easiest way to bubble the revert reason is using memory via assembly\n\n                assembly {\n                    let returndata_size := mload(returndata)\n                    revert(add(32, returndata), returndata_size)\n                }\n            } else {\n                revert(errorMessage);\n            }\n        }\n    }\n}\n',
			},
			'@openzeppelin/contracts/utils/Context.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Provides information about the current execution context, including the\n * sender of the transaction and its data. While these are generally available\n * via msg.sender and msg.data, they should not be accessed in such a direct\n * manner, since when dealing with meta-transactions the account sending and\n * paying for execution may not be the actual sender (as far as an application\n * is concerned).\n *\n * This contract is only required for intermediate, library-like contracts.\n */\nabstract contract Context {\n    function _msgSender() internal view virtual returns (address) {\n        return msg.sender;\n    }\n\n    function _msgData() internal view virtual returns (bytes calldata) {\n        return msg.data;\n    }\n}\n',
			},
			'@openzeppelin/contracts/utils/Strings.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev String operations.\n */\nlibrary Strings {\n    bytes16 private constant _HEX_SYMBOLS = "0123456789abcdef";\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\n     */\n    function toString(uint256 value) internal pure returns (string memory) {\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\n\n        if (value == 0) {\n            return "0";\n        }\n        uint256 temp = value;\n        uint256 digits;\n        while (temp != 0) {\n            digits++;\n            temp /= 10;\n        }\n        bytes memory buffer = new bytes(digits);\n        while (value != 0) {\n            digits -= 1;\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\n            value /= 10;\n        }\n        return string(buffer);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\n     */\n    function toHexString(uint256 value) internal pure returns (string memory) {\n        if (value == 0) {\n            return "0x00";\n        }\n        uint256 temp = value;\n        uint256 length = 0;\n        while (temp != 0) {\n            length++;\n            temp >>= 8;\n        }\n        return toHexString(value, length);\n    }\n\n    /**\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\n     */\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\n        bytes memory buffer = new bytes(2 * length + 2);\n        buffer[0] = "0";\n        buffer[1] = "x";\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\n            value >>= 4;\n        }\n        require(value == 0, "Strings: hex length insufficient");\n        return string(buffer);\n    }\n}\n',
			},
			'@openzeppelin/contracts/utils/introspection/ERC165.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\nimport "./IERC165.sol";\n\n/**\n * @dev Implementation of the {IERC165} interface.\n *\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\n * for the additional interface id that will be supported. For example:\n *\n * ```solidity\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\n * }\n * ```\n *\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\n */\nabstract contract ERC165 is IERC165 {\n    /**\n     * @dev See {IERC165-supportsInterface}.\n     */\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\n        return interfaceId == type(IERC165).interfaceId;\n    }\n}\n',
			},
			'@openzeppelin/contracts/utils/introspection/IERC165.sol': {
				content:
					'// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.0;\n\n/**\n * @dev Interface of the ERC165 standard, as defined in the\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\n *\n * Implementers can declare support of contract interfaces, which can then be\n * queried by others ({ERC165Checker}).\n *\n * For an implementation, see {ERC165}.\n */\ninterface IERC165 {\n    /**\n     * @dev Returns true if this contract implements the interface defined by\n     * `interfaceId`. See the corresponding\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n     * to learn more about how these ids are created.\n     *\n     * This function call must use less than 30 000 gas.\n     */\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\n}\n',
			},
			'contracts/Base64.sol': {
				content:
					'/// SPDX-License-Identifier: MIT\n/// @title Base64\n/// @notice Provides a function for encoding some bytes in base64\n/// @author Brecht Devos <brecht@loopring.org>\n\npragma solidity ^0.8.0;\n\nlibrary Base64 {\n    bytes internal constant TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\n    /// @notice Encodes some bytes to the base64 representation\n    function encode(bytes memory data) internal pure returns (string memory) {\n        uint256 len = data.length;\n        if (len == 0) return "";\n\n        // multiply by 4/3 rounded up\n        uint256 encodedLen = 4 * ((len + 2) / 3);\n\n        // Add some extra buffer at the end\n        bytes memory result = new bytes(encodedLen + 32);\n\n        bytes memory table = TABLE;\n\n        assembly {\n            let tablePtr := add(table, 1)\n            let resultPtr := add(result, 32)\n\n            for {\n                let i := 0\n            } lt(i, len) {\n\n            } {\n                i := add(i, 3)\n                let input := and(mload(add(data, i)), 0xffffff)\n\n                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))\n                out := shl(8, out)\n                out := add(out, and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF))\n                out := shl(8, out)\n                out := add(out, and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF))\n                out := shl(8, out)\n                out := add(out, and(mload(add(tablePtr, and(input, 0x3F))), 0xFF))\n                out := shl(224, out)\n\n                mstore(resultPtr, out)\n\n                resultPtr := add(resultPtr, 4)\n            }\n\n            switch mod(len, 3)\n            case 1 {\n                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))\n            }\n            case 2 {\n                mstore(sub(resultPtr, 1), shl(248, 0x3d))\n            }\n\n            mstore(result, encodedLen)\n        }\n\n        return string(result);\n    }\n}',
			},
		},
		settings: {
			optimizer: { enabled: true, runs: 200 },
			outputSelection: {
				'*': {
					'*': [
						'evm.bytecode',
						'evm.deployedBytecode',
						'devdoc',
						'userdoc',
						'metadata',
						'abi',
					],
				},
			},
			libraries: {},
		},
	},
	info: {
		ContractName: 'Corruptions',
		CompilerVersion: 'v0.8.1+commit.df193b15',
		OptimizationUsed: '1',
		Runs: '200',
		ConstructorArguments: '',
		EVMVersion: 'Default',
		Library: '',
		LicenseType: '',
		Proxy: '0',
		Implementation: '',
		SwarmSource: '',
	},
};
