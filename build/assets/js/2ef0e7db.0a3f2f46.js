"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[2792],{2458:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var r=i(6070),t=i(1582);const d={title:"Difference between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},c=void 0,o={id:"build-on-morph/build-on-morph/difference-between-morph-and-ethereum",title:"Difference between Morph and Ethereum",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/build-on-morph/build-on-morph/1-difference-between-morph-and-ethereum.md",sourceDirName:"build-on-morph/build-on-morph",slug:"/build-on-morph/build-on-morph/difference-between-morph-and-ethereum",permalink:"/docs/build-on-morph/build-on-morph/difference-between-morph-and-ethereum",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/build-on-morph/1-difference-between-morph-and-ethereum.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Difference between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"}},s={},l=[{value:"EVM Opcodes",id:"evm-opcodes",level:2},{value:"EVM Precompiles",id:"evm-precompiles",level:2},{value:"Precompile Limits",id:"precompile-limits",level:3},{value:"State Account",id:"state-account",level:2},{value:"<strong>Additional Fields</strong>",id:"additional-fields",level:3},{value:"<strong>CodeHash</strong>",id:"codehash",level:3},{value:"Block Time",id:"block-time",level:2},{value:"Transaction Fees",id:"transaction-fees",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"There are several technical differences between Ethereum\u2019s EVM and Morph's optimistic zkEVM."}),"\n",(0,r.jsx)(n.p,{children:"We\u2019ve compiled a list to help you understand these distinctions better."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"For most Solidity developers, these technical details won't significantly impact your development experience."})}),"\n",(0,r.jsx)(n.h2,{id:"evm-opcodes",children:"EVM Opcodes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Opcode"}),(0,r.jsx)(n.th,{children:"Solidity equivalent"}),(0,r.jsx)(n.th,{children:"Morph Behavior"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BLOCKHASH"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"block.blockhash"})}),(0,r.jsxs)(n.td,{children:["Returns ",(0,r.jsx)(n.code,{children:"keccak(chain_id || block_number)"})," for the last 256 blocks."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"COINBASE"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"block.coinbase"})}),(0,r.jsxs)(n.td,{children:["Returns the pre-deployed fee vault contract address. See ",(0,r.jsx)(n.a,{href:"/docs/build-on-morph/developer-resources/contracts",children:"Contracts"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"DIFFICULTY"})," / ",(0,r.jsx)(n.code,{children:"PREVRANDAO"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"block.difficulty"})}),(0,r.jsx)(n.td,{children:"Returns 0."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SELFDESTRUCT"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"selfdestruct"})}),(0,r.jsx)(n.td,{children:"Disabled. If the opcode is triggered, the transaction will be reverted."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BLOBHASH"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"tx.blob_versioned_hashes[index]"})}),(0,r.jsx)(n.td,{children:"Not supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BLOBBASEFEE"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"blob_base_fee = BLOBBASEFEE()"})}),(0,r.jsx)(n.td,{children:"Not supported"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"evm-precompiles",children:"EVM Precompiles"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RIPEMD-160"})," (address ",(0,r.jsx)(n.code,{children:"0x3"}),"), ",(0,r.jsx)(n.code,{children:"blake2f"})," (address ",(0,r.jsx)(n.code,{children:"0x9"}),"), and ",(0,r.jsx)(n.code,{children:"point evaluation"})," (address ",(0,r.jsx)(n.code,{children:"0x0a"}),") precompiles are currently unsupported. Calls to these unsupported precompiled contracts will result in a transaction revert. We plan to implement these precompiles in future hard forks."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"modexp"})," precompile is supported, but it only accepts inputs that are 32 bytes or smaller (i.e., ",(0,r.jsx)(n.code,{children:"u256"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ecPairing"})," precompile is also supported; however, the maximum number of points (sets or pairs) is limited to 4, rather than 6."]}),"\n",(0,r.jsxs)(n.p,{children:["All other EVM precompiles are fully supported: ",(0,r.jsx)(n.code,{children:"ecRecover"}),", ",(0,r.jsx)(n.code,{children:"identity"}),", ",(0,r.jsx)(n.code,{children:"ecAdd"}),", and ",(0,r.jsx)(n.code,{children:"ecMul"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"precompile-limits",children:"Precompile Limits"}),"\n",(0,r.jsx)(n.p,{children:"Due to the bounded size of zkEVM circuits, there is a maximum limit on the number of calls that can be made to certain precompiles. While these transactions won't be reverted, the sequencer will skip them if they exceed the circuit's capacity."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Precompile / Opcode"}),(0,r.jsx)(n.th,{children:"Limit"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"keccak256"})}),(0,r.jsx)(n.td,{children:"3157"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecRecover"})}),(0,r.jsx)(n.td,{children:"119"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"modexp"})}),(0,r.jsx)(n.td,{children:"23"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecAdd"})}),(0,r.jsx)(n.td,{children:"50"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecMul"})}),(0,r.jsx)(n.td,{children:"50"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ecPairing"})}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{title:"Several opcode not available",type:"tip",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"BLOBHASH"})," and ",(0,r.jsx)(n.code,{children:"BLOBBASEFEE"})," are not supported on Morph yet. Additionally, ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-4788",children:"EIP-4788"})," for accessing the Beacon Chain block root is not supported."]})}),"\n",(0,r.jsx)(n.h2,{id:"state-account",children:"State Account"}),"\n",(0,r.jsx)(n.h3,{id:"additional-fields",children:(0,r.jsx)(n.strong,{children:"Additional Fields"})}),"\n",(0,r.jsxs)(n.p,{children:["We have introduced two new fields to the existing ",(0,r.jsx)(n.code,{children:"StateAccount"})," object: ",(0,r.jsx)(n.code,{children:"PoseidonCodehash"})," and ",(0,r.jsx)(n.code,{children:"CodeSize"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"type StateAccount struct {\n\tNonce    uint64\n\tBalance  *big.Int\n\tRoot     common.Hash // merkle root of the storage trie\n\tKeccakCodeHash []byte // still the Keccak codehash\n\t// added fields\n\tPoseidonCodeHash []byte // the Poseidon codehash\n\tCodeSize uint64\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"codehash",children:(0,r.jsx)(n.strong,{children:"CodeHash"})}),"\n",(0,r.jsxs)(n.p,{children:["In this context, we keep two varieties of code hashes for each contract's bytecode: the ",(0,r.jsx)(n.code,{children:"Keccak hash"})," and the ",(0,r.jsx)(n.code,{children:"Poseidon hash"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"KeccakCodeHash"})," is preserved to ensure compatibility with ",(0,r.jsx)(n.code,{children:"EXTCODEHASH"}),", while the ",(0,r.jsx)(n.code,{children:"PoseidonCodeHash"})," is utilized for verifying the accuracy of bytecodes loaded in the zkEVM, as Poseidon hashing offers significantly greater efficiency."]}),"\n",(0,r.jsx)(n.h2,{id:"block-time",children:"Block Time"}),"\n",(0,r.jsx)(n.admonition,{title:"Block Time Subject to Change",type:"tip",children:(0,r.jsx)(n.p,{children:"Blocks are produced every second, with an empty block generated if there are no transactions for 5 seconds. However, this frequency may change in the future."})}),"\n",(0,r.jsx)(n.p,{children:"To compare, Ethereum has a block time of ~12 seconds."}),"\n",(0,r.jsx)(n.p,{children:"Reasons for Faster Block Time in Morph"}),"\n",(0,r.jsx)(n.p,{children:"User Experience:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A faster, consistent block time provides quicker feedback, enhancing the user experience."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Optimization: As we refine the zkEVM circuits in our testnets, we can achieve higher throughput than Ethereum, even with a smaller gas limit per block or batch."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Notice:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TIMESTAMP"})," will return the timestamp of the block. It will update every second."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"BLOCKNUMBER"})," will return an actual block number. It will update every second. The one-to-one mapping between blocks and transactions will no longer apply."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"transaction-fees",children:(0,r.jsx)(n.a,{href:"/docs/build-on-morph/build-on-morph/understand-transaction-cost-on-morph",children:"Transaction Fees"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1582:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var r=i(758);const t={},d=r.createContext(t);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);