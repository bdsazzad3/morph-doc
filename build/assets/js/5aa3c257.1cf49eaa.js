"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[7362],{1591:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(3274),n=t(2333);const i={title:"Communication between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},a=void 0,o={id:"how-morph-works/general-protocol-design/communicate-between-morph-and-ethereum",title:"Communication between Morph and Ethereum",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/how-morph-works/general-protocol-design/2-communicate-between-morph-and-ethereum.md",sourceDirName:"how-morph-works/general-protocol-design",slug:"/how-morph-works/general-protocol-design/communicate-between-morph-and-ethereum",permalink:"/docs/how-morph-works/general-protocol-design/communicate-between-morph-and-ethereum",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/how-morph-works/general-protocol-design/2-communicate-between-morph-and-ethereum.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Communication between Morph and Ethereum",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"HowSidebar",previous:{title:"Rollup",permalink:"/docs/how-morph-works/general-protocol-design/rollup"},next:{title:"Transactions Life Cycle",permalink:"/docs/how-morph-works/general-protocol-design/transactions-life-cycle"}},h={},d=[{value:"The Basics of Morph - Ethereum Bridge\u200b",id:"the-basics-of-morph---ethereum-bridge",level:2},{value:"Understanding the Gateway",id:"understanding-the-gateway",level:2},{value:"Deposit (L1 to L2 message)",id:"deposit-l1-to-l2-message",level:2},{value:"Constructing a Deposit Request Through the Gateway",id:"constructing-a-deposit-request-through-the-gateway",level:3},{value:"Passing the Message Through the CrossDomainMessenger",id:"passing-the-message-through-the-crossdomainmessenger",level:3},{value:"Executing the Message on Layer 2",id:"executing-the-message-on-layer-2",level:3},{value:"Finalizing the Deposit Message",id:"finalizing-the-deposit-message",level:3},{value:"Withdraw (L2 -&gt; L1 message)",id:"withdraw-l2---l1-message",level:2},{value:"Finalizing a Withdrawal",id:"finalizing-a-withdrawal",level:3},{value:"Understanding the Withdraw Tree",id:"understanding-the-withdraw-tree",level:3},{value:"Understanding the Challenge Period &amp; Batch Finalization",id:"understanding-the-challenge-period--batch-finalization",level:3},{value:"Cross-layer (Bridge) Errors",id:"cross-layer-bridge-errors",level:2},{value:"Cross-layer (Bridge) Failure Scenarios:",id:"cross-layer-bridge-failure-scenarios",level:3},{value:"Handling Cross-layer (Bridge) Failures:",id:"handling-cross-layer-bridge-failures",level:3}];function c(e){const s={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Although Morph is a Layer 2 solution built atop Ethereum, it remains as a separate and distinct blockchain. Thus, it\u2019s essential to establish a communication channel between Morph and Ethereum to facilitate the smooth transfer of assets and messages. The communication can occur in two directions: from Ethereum to Morph and from Morph to Ethereum."}),"\n",(0,r.jsx)(s.h2,{id:"the-basics-of-morph---ethereum-bridge",children:"The Basics of Morph - Ethereum Bridge\u200b"}),"\n",(0,r.jsx)(s.p,{children:"Transferring assets between Ethereum and Morph involves the following process:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:'Asset Locking and Wrapping: To initiate the transfer, a user must lock their asset on the cross-layer bridge. When the lock is confirmed, Morph mints a Wrapped Token that represents the value of the locked asset, in a procedure referred to as a "deposit".'}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Asset Reception: Following the minting, the user or intended recipient will receive the asset on Morph, reflecting the value of the originally locked asset."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:'Reverse Process: Conversely, to transfer assets back to Ethereum, the bridge can unlock the original asset on Ethereum by burning the Wrapped Token on Morph. This is referred to as "withdraw".'}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Furthermore, the bridge\u2019s utility extends beyond asset transfers. It employs the same foundational principle for message transfers, enabling the conveyance of data payloads across two network layers."}),"\n",(0,r.jsx)(s.h2,{id:"understanding-the-gateway",children:"Understanding the Gateway"}),"\n",(0,r.jsx)(s.p,{children:"The Gateway serves as the primary entry point for users to interact with the entire bridge system. While the core process of transferring assets across layers still relies on message transmission, we recommend using the Gateway approach for efficient cross-layer transactions."}),"\n",(0,r.jsx)(s.p,{children:"Catering to diverse cross-layer asset transfer needs, we have designed distinct Gateways such as the ETH Gateway, standard ERC20 Gateway, and others."}),"\n",(0,r.jsx)(s.p,{children:"Furthermore, we have implemented the Gateway Router to call on different Gateways based on the type of assets you have., This facilitates seamless interaction with the Gateway Router contract."}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"L1 Gateway Contract"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L1GatewayRouter"})}),(0,r.jsx)(s.td,{children:"The gateway router supports the deposit of ETH and ERC20 tokens."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L1ETHGateway"})}),(0,r.jsx)(s.td,{children:"The gateway to deposit ETH."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L1StandardERC20Gateway"})}),(0,r.jsx)(s.td,{children:"The gateway for standard ERC20 token deposits."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L1CustomERC20Gateway"})}),(0,r.jsx)(s.td,{children:"The gateway for custom ERC20 token deposits."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L1WETHGateway"})}),(0,r.jsx)(s.td,{children:"The gateway for Wrapped ETH deposits."})]})]})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"L2 Gateway Contract"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L2GatewayRouter"})}),(0,r.jsx)(s.td,{children:"The gateway router supports the withdraw of ETH and ERC20 tokens."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L2ETHGateway"})}),(0,r.jsx)(s.td,{children:"The gateway to withdraw ETH."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L2StandardERC20Gateway"})}),(0,r.jsx)(s.td,{children:"The gateway for standard ERC20 token withdraw."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L2CustomERC20Gateway"})}),(0,r.jsx)(s.td,{children:"The gateway for custom ERC20 token withdraw."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"L2WETHGateway"})}),(0,r.jsx)(s.td,{children:"The gateway for Wrapped ETH withdraw."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"deposit-l1-to-l2-message",children:"Deposit (L1 to L2 message)"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Deposit Process",src:t(9301).A+"",width:"903",height:"1171"})}),"\n",(0,r.jsx)(s.h3,{id:"constructing-a-deposit-request-through-the-gateway",children:"Constructing a Deposit Request Through the Gateway"}),"\n",(0,r.jsx)(s.p,{children:"A bridge request, whether it is for ETH, ERC20, or ERC721, is essentially a cross-layer message, which necessitates the initial construction of a message."}),"\n",(0,r.jsx)(s.p,{children:"Generally, the message structure remains consistent, especially for ETH & ERC20 Gateways."}),"\n",(0,r.jsxs)(s.p,{children:["Employing a token gateway compiles a standard token gateway message and relays it to the ",(0,r.jsx)(s.code,{children:"CrossDomainMessenger"})]}),"\n",(0,r.jsx)(s.h3,{id:"passing-the-message-through-the-crossdomainmessenger",children:"Passing the Message Through the CrossDomainMessenger"}),"\n",(0,r.jsx)(s.p,{children:"The ```CrossDomainMessenger`` serves as the core unit of cross-layer communication,\nwith corresponding messenger contracts on both Layer 1 and Layer 2."}),"\n",(0,r.jsx)(s.p,{children:"For a deposit, the L1 messenger sends a message to the L2 messenger, akin to a contract call on Layer 1, which means custom messages (contract interactions) can be constructed to perform various types of cross-layer interactions."}),"\n",(0,r.jsx)(s.h3,{id:"executing-the-message-on-layer-2",children:"Executing the Message on Layer 2"}),"\n",(0,r.jsxs)(s.p,{children:["The cross-domain message is delivered to the ",(0,r.jsx)(s.code,{children:"L1MessageQueueWithGasPriceOracle"}),", which then triggers an event called ",(0,r.jsx)(s.code,{children:"QueueTransaction"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"The Sequencer will monitor this event and include a Layer 2 transaction in its next block."}),"\n",(0,r.jsxs)(s.admonition,{title:"How to make sure Sequencer doesn't fake a deposit transaction?",type:"tip",children:[(0,r.jsx)(s.p,{children:"Sequencers may have the motivation to forge a non-existent deposit transaction, such as minting a large amount of Layer 2 tokens and transferring these to an address they own."}),(0,r.jsx)(s.p,{children:"Morph prevents these risks with two measures:"}),(0,r.jsx)(s.p,{children:"Due to Morph\u2019s decentralized Sequencer architecture, forging transactions would require control of at least two-thirds of the Sequencers, a challenging feat."}),(0,r.jsx)(s.p,{children:"Morph's optimistic zkEVM framework allows challengers to detect such malicious behavior and initiate challenges to correct the misconduct."})]}),"\n",(0,r.jsx)(s.p,{children:"A Layer 2 executor, holding the cross-layer message, interacts with the L2 messenger to execute the message, which may include transferring L2 ETH or ERC20 tokens to the recipient."}),"\n",(0,r.jsx)(s.h3,{id:"finalizing-the-deposit-message",children:"Finalizing the Deposit Message"}),"\n",(0,r.jsx)(s.p,{children:"The completion of the deposit process involves more than just executing the request on Layer 2. There is a possibility that the Layer 2 execution and its corresponding state update could be reverted due to incorrect batch data being identified through the challenge process."}),"\n",(0,r.jsx)(s.p,{children:"Therefore, a deposit request is only considered complete once the corresponding batch of the deposit execution transaction is finalized."}),"\n",(0,r.jsx)(s.p,{children:"Typically, this follows a simple workflow:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The deposit execution transactions are compiled into a batch and submitted to Layer 1 by batch submitters."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Following the challenge period, valid batches are finalized by subsequent batch submissions using ",(0,r.jsx)(s.code,{children:"rollup.commitBatch"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["During finalization, the ",(0,r.jsx)(s.code,{children:"L1MessageQueueAndGasPriceOracle"})," removes(pop) the deposit message from the queue, marking the completion of  the deposit process."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"withdraw-l2---l1-message",children:"Withdraw (L2 -> L1 message)"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Withdraw Process",src:t(4985).A+"",width:"1104",height:"1112"})}),"\n",(0,r.jsx)(s.h3,{id:"finalizing-a-withdrawal",children:"Finalizing a Withdrawal"}),"\n",(0,r.jsx)(s.p,{children:"Unlike Deposits, a withdrawal request must undergo 2 process for execution:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Prove that a withdraw request actually happened on Layer 2 by verifying a Merkle tree proof against the withdrawal tree root committed by sequencers."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Wait for the challenge period to end and finalize the withdraw tree root, addressing the risk of sequencer submitting incorrect batch data, including the withdraw tree root."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Typically, these 2 processes happen at the same time. Once the withdraw tree root is finalized, users can call the ",(0,r.jsx)(s.code,{children:"proveAndRelayMessage"})," method within the ",(0,r.jsx)(s.code,{children:"L1CrossDomainMessenger"})," contract to execute the withdrawal message."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function proveAndRelayMessage(\n        address _from,\n        address _to,\n        uint256 _value,\n        uint256 _nonce,\n        bytes memory _message,\n        bytes32[32] calldata _withdrawalProof,\n        bytes32 _withdrawalRoot\n    )\n\n"})}),"\n",(0,r.jsx)(s.p,{children:"This function serves two primary purposes:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"It checks if the withdraw tree root associated with this message has been finalized through the rollup contract."}),"\n",(0,r.jsx)(s.li,{children:"It verifies whether the withdraw request actually occurred by validating the provided Merkel proof."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Upon successful completion of both processes, this method will execute the corresponding action, such as releasing the user's ETH on Layer 1 for a standard ETH withdrawal request."}),"\n",(0,r.jsx)(s.h3,{id:"understanding-the-withdraw-tree",children:"Understanding the Withdraw Tree"}),"\n",(0,r.jsx)(s.p,{children:"Withdrawal actions involve interacting with L1 assets/contracts as a result of a Layer 2 transaction. Consequently, it\u2019s imperative to verify the existence of a Layer 2 transaction that triggers a withdrawal request, in a manner that is verifiable on Layer 1."}),"\n",(0,r.jsx)(s.p,{children:"To achieve this, we introduce a structure known as a Withdraw Tree, which records every L2 withdrawal transaction within a Merkel tree. Thus, a Merkel tree's properties can be leveraged to confirm a withdrawal request\u2019s occurrence."}),"\n",(0,r.jsx)(s.p,{children:"The term Withdraw Tree refers to an append-only Sparse Merkle Tree (SMT) with leaf nodes that capture information on assets being transferred out of the network.\neach leaf in the Withdraw Tree, known as a Withdraw leaf, falls into two categories: type 0 for recording asset(s) information and type 1 for recording messaging information."}),"\n",(0,r.jsx)(s.p,{children:"A withdraw leaf, in particular, is a Keccak256 hash of the ABI encoded packed structure with cross domain message:"}),"\n",(0,r.jsx)(s.p,{children:"The Withdraw Tree is instrumental in cataloging withdrawal transactions and ascertaining the legitimacy of withdrawal requests."}),"\n",(0,r.jsx)(s.p,{children:"Morph has pre-deployed a Simple Merkle Tree contract dedicated to constructing the Layer 2 withdraw tree."}),"\n",(0,r.jsx)(s.p,{children:"This tree incorporates three methods:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"getTreeroot"})," - Retrieves the current tree's root hash"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"appendMessageHash"})," - Appends a new leaf node to the tree"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"verifyMerkleProof"})," - Verifies if a leaf node exists in the tree, indicating the validity of the bridge request it represents"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"understanding-the-challenge-period--batch-finalization",children:"Understanding the Challenge Period & Batch Finalization"}),"\n",(0,r.jsx)(s.p,{children:"The Optimistic zkEVM architecture mandates that each L2 transaction be submitted to Layer 1 and undergo a challenge period before finalization."}),"\n",(0,r.jsx)(s.p,{children:"This process is vital to validate the Layer 2 state, eventually validating the authenticity of the withdraw request."}),"\n",(0,r.jsx)(s.p,{children:"The withdraw tree root, integral for withdrawal request verification, is also submitted by sequencers once the challenge period, batches, and states have been finalized."}),"\n",(0,r.jsx)(s.h2,{id:"cross-layer-bridge-errors",children:"Cross-layer (Bridge) Errors"}),"\n",(0,r.jsx)(s.p,{children:"With the design of cross-layer bridges, the cross-layer message for deposits needs to be executed and have its Layer 2 states updated. Sending a cross-chain request successfully does not guarantee its successful execution on L2."}),"\n",(0,r.jsx)(s.p,{children:"Prior to this, there is a possibility of the cross-layer message failing during execution on Layer 2.\nThis section outlines the potential scenarios and solutions for handling failed cross-layer deposit messages."}),"\n",(0,r.jsx)(s.h3,{id:"cross-layer-bridge-failure-scenarios",children:"Cross-layer (Bridge) Failure Scenarios:"}),"\n",(0,r.jsx)(s.p,{children:"Two primary types of failures can occur in cross-layer (bridge) communications:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Gas Failure: Cross-layer messages sent from the L1 to the L2 might fail during execution on the L2 due to limitations in gasLimit or code logic."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Skipped Message: Some data executions may trigger overflows in the circuits of L2 nodes, leading to the omission or skipping of cross-layer messages."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"handling-cross-layer-bridge-failures",children:"Handling Cross-layer (Bridge) Failures:"}),"\n",(0,r.jsx)(s.p,{children:"For Gas Failures:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["When the ",(0,r.jsx)(s.code,{children:"L1CrossDomainMessenger"})," contract on L1 dispatches a cross-layer message, it records the corresponding message hash but does not incorporate the gasLimit in this record. Post-execution on L2, the ",(0,r.jsx)(s.code,{children:"L2CrossDomainMessenger"})," performs an equivalent calculation, storing the contract call result in ",(0,r.jsx)(s.code,{children:"mapping(isL1MessageExecuted)"}),". This measure prevents multiple executions of the same message and facilitates the adjustment of gasLimit parameters for replaying failed messages."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Replay Message: If gasLimit is insufficient, causing a failed execution on the L2, a new cross-layer message with a revised gasLimit parameter can be sent by calling ",(0,r.jsx)(s.code,{children:"L1CrossDomainMessenger.replayMessage"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"For Skipped Messages:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Messages dropped due to potential circuit overflow on the L2 are skipped and not executed. Custom cross-layer calling contracts need to implement the\n",(0,r.jsx)(s.code,{children:"onDropMessage"})," method to consider such cases."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"The gateway contract includes the onDropMessage method, designed to refund the initiator of the cross-layer message."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Calling ",(0,r.jsx)(s.code,{children:"L1CrossDomainMessenger.dropMessage"})," discards the cross-layer message and triggers the onDropMessage method in the originating contract, passing the transaction's value and message as msg.value and method parameters, accordingly."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9301:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/deposit-ebff96d678db15c12d265d749f39439d.png"},4985:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/withdraw-2f1d313f2f68f551d96655fc293379fb.png"},2333:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var r=t(9474);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);