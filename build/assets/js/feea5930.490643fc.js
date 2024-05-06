"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[7393],{4373:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=i(3274),n=i(2333);const r={title:"Why Responsive Validity Proof?",lang:"en-US",keywords:["morph","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},s=void 0,a={id:"how-morph-works/responsive-validity-proof/why-rvp",title:"Why Responsive Validity Proof?",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/how-morph-works/responsive-validity-proof/2-why-rvp.md",sourceDirName:"how-morph-works/responsive-validity-proof",slug:"/how-morph-works/responsive-validity-proof/why-rvp",permalink:"/docs/how-morph-works/responsive-validity-proof/why-rvp",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/how-morph-works/responsive-validity-proof/2-why-rvp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Why Responsive Validity Proof?",lang:"en-US",keywords:["morph","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"HowSidebar",previous:{title:"Overview",permalink:"/docs/how-morph-works/responsive-validity-proof/overview"},next:{title:"How does RVP Applied in Morph",permalink:"/docs/how-morph-works/responsive-validity-proof/how-rvp-applied"}},l={},h=[{value:"Why is RVP a better solution for optimistic rollup than interactive fraud proof?",id:"why-is-rvp-a-better-solution-for-optimistic-rollup-than-interactive-fraud-proof",level:2},{value:"What is RVP?",id:"what-is-rvp",level:3},{value:"What are the advantages of RVP compared to interactive fraud proof?",id:"what-are-the-advantages-of-rvp-compared-to-interactive-fraud-proof",level:3},{value:"How can RVP shorten the challenge period of optimistic rollup?",id:"how-can-rvp-shorten-the-challenge-period-of-optimistic-rollup",level:3},{value:"- A more concise and direct challenge process.",id:"--a-more-concise-and-direct-challenge-process",level:4},{value:"- Ensure that the normal challenge process is not affected by the malicious behavior of the sequencer.",id:"--ensure-that-the-normal-challenge-process-is-not-affected-by-the-malicious-behavior-of-the-sequencer",level:4},{value:"Why is the operating cost lower for L2 based on RVP?",id:"why-is-the-operating-cost-lower-for-l2-based-on-rvp",level:3},{value:"RVP is friendly to challengers",id:"rvp-is-friendly-to-challengers",level:3},{value:"Why do sequencers have to take on the responsibility of submitting ZK-proofs?",id:"why-do-sequencers-have-to-take-on-the-responsibility-of-submitting-zk-proofs",level:3},{value:"Why not ZK-rollup, given that several zkEVM projects have already launched the mainnet?",id:"why-not-zk-rollup-given-that-several-zkevm-projects-have-already-launched-the-mainnet",level:2},{value:"The cost of ZK-rollup is too high",id:"the-cost-of-zk-rollup-is-too-high",level:3},{value:"The time of block finalization in current ZK-rollups is close to the optimized challenge period",id:"the-time-of-block-finalization-in-current-zk-rollups-is-close-to-the-optimized-challenge-period",level:3},{value:"RVP-based rollup can switch to ZK-rollup seamlessly",id:"rvp-based-rollup-can-switch-to-zk-rollup-seamlessly",level:3}];function c(e){const t={a:"a",admonition:"admonition",del:"del",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.p,{children:["This part is also published as Medium post, ",(0,o.jsx)(t.a,{href:"https://medium.com/@morphlayer2/responsive-validity-proof-optimistic-zk-rollup-5ce4ab71fa4b",children:"check here"})," if you want to view it in Medium."]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Responsive Validity Proof will be referred to as RVP in the following text."}),"\n",(0,o.jsx)(t.li,{children:"The sequencer mentioned in the text is equivalent to the rollup operator."}),"\n"]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"RVP",src:i(6259).A+"",width:"2000",height:"1000"})}),"\n",(0,o.jsxs)(t.p,{children:["The industry's definition of rollup is currently divided into two types: ",(0,o.jsx)(t.strong,{children:"optimistic rollup"})," and ",(0,o.jsx)(t.strong,{children:"ZK-rollup"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The definition of optimistic rollup is that Layer 2 (L2) optimistically believes that the state changes submitted by the sequencer are valid and does not actively verify the authenticity of the state changes. Instead, a challenge period is added before the state changes are finally confirmed on Layer 1 (L1)."}),"\n",(0,o.jsx)(t.p,{children:"During the challenge period, external challengers will verify the sequencer's submissions based on their own synchronized network status. If the verification fails, challengers have the right to trigger a challenge process on L1 to prevent incorrect states from being confirmed."}),"\n",(0,o.jsx)(t.p,{children:"So how exactly is the challenge triggered? While all optimistic rollups claim to have implemented fraud proofs, in reality, only Arbitrum has implemented fraud proofs on the mainnet, and the challengers are limited to several whitelisted addresses."}),"\n",(0,o.jsx)(t.p,{children:"And the fraud proof mechanism used in the current optimistic rollup projects can be divided into two categories:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Non-interactive fraud proof"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"When a new state submitted by the sequencer is challenged, L1 executes all corresponding L2 transactions to generate a valid state for comparison with the state submitted by the sequencer in order to determine if there is any fraudulent behavior."}),"\n",(0,o.jsx)(t.p,{children:"In the case of fraudulent behavior, non-interactive fraud proofs require L1 to fully re-execute the transactions in the relevant batch, resulting in significant high gas costs."}),"\n",(0,o.jsx)(t.p,{children:"In addition, because L2 and L1 are not completely equivalent in some cases, some transactions may result in different outcomes when executed in L2 and L1, or L1 may not be able to execute L2 transactions, which pose many problems for actual implementations."}),"\n",(0,o.jsx)(t.p,{children:"Optimism (OP) once used this approach to implement fraud proof, but it was abandoned later due to the above issues, which is one of the reasons why the 1.3B TVL L2 network runs without an available fraud proof system."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"Interactive fraud proof"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To address the issues with non-interactive fraud proofs, multi-round interactive fraud proofs have been introduced. The core idea is to determine the specific instruction execution that caused incorrectness (in the EVM, transaction execution is divided into multiple EVM instructions to complete state transitions) through multiple rounds of interaction between the sequencer and the challenger and then confirm whether there is fraud by executing the corresponding instructions on L1."}),"\n",(0,o.jsx)(t.p,{children:"The benefit of this approach is that L1 only needs to perform a tiny operation, significantly reducing computational costs. At the same time, since the execution of L1 is refined to the EVM instruction level, the issue of incongruent outcomes in L1 and L2 will be notably diminished."}),"\n",(0,o.jsx)(t.p,{children:"However, the problems are also obvious. As can be seen from the above description, the logic of interactive fraud proof is much more complex than that of non-interactive, which means:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Implementation at a higher difficulty level"}),"\n",(0,o.jsx)(t.li,{children:"Longer challenge period (sufficient time needs to be reserved to ensure that all complex interactions can be completed)"}),"\n",(0,o.jsx)(t.li,{children:"Raised standards impact challengers' motivation."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Regarding the first point, as of the time of writing this article, only Arbitrum has implemented a complete interactive fraud proof mechanism on its mainnet among all the optimistic rollup projects, while OP, as another giant in the optimistic rollup, has been operating without a fraud proof mechanism for more than a year, and its Cannon framework, which is currently under development, has not yet determined its final launch time. In comparison, several ZK-rollup projects have already launched on the mainnet."}),"\n",(0,o.jsx)(t.p,{children:"For the second and third points, we need to consider the characteristics of interactive fraud proof in crypto economics. In the following text, we will introduce why such problems occur and how our solutions can do better."}),"\n",(0,o.jsx)(t.h2,{id:"why-is-rvp-a-better-solution-for-optimistic-rollup-than-interactive-fraud-proof",children:"Why is RVP a better solution for optimistic rollup than interactive fraud proof?"}),"\n",(0,o.jsx)(t.p,{children:"Due to the problems with non-interactive/interactive fraud proofs mentioned earlier, there is still much room for improvement for the current optimistic rollups. On the one hand, many projects lack core mechanisms to ensure the safety of user assets on the mainnet due to engineering difficulties. On the other hand, interlayer asset transfers (withdrawals) for users require confirmation that takes at least a week, which is far from an ideal Ethereum scaling solution.\nTo address these issues, Morph proposes a new solution - Responsive Validity Proof (RVP)."}),"\n",(0,o.jsx)(t.h3,{id:"what-is-rvp",children:"What is RVP?"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"RVP",src:i(2745).A+"",width:"2880",height:"1800"})}),"\n",(0,o.jsx)(t.p,{children:"In short, we integrate ZK-based validity proof into the optimistic rollup. When challengers discover that the sequencer has submitted incorrect data, they will initiate a challenge request to the sequencer on L1. At this time, the sequencer needs to generate the corresponding ZK-proof within the specified time (challenge period) and pass the verification of the L1 contract.\nIf the verification passes, the challenge fails; otherwise, the challenge succeeds.\nOf course, the specific process is much more complicated than described here. In our next article, we will discuss the detailed process of RVP, while in this article, we will mainly discuss why we should use RVP."}),"\n",(0,o.jsx)(t.h3,{id:"what-are-the-advantages-of-rvp-compared-to-interactive-fraud-proof",children:"What are the advantages of RVP compared to interactive fraud proof?"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Shorten the challenge period. Under the matching crypto economics design, RVP can shorten the challenge period from 7 days to 1-3 days."}),"\n",(0,o.jsx)(t.li,{children:"Greatly reduce the L2 submission cost. Based on validity proof, L2 does not need to include most transaction bytes."}),"\n",(0,o.jsx)(t.li,{children:"More friendly to challengers. In addition to basic maintenance and identification of L2 status, only the responsibility of triggering the challenge needs to be assumed, sequencers need to prove they are right (by generating and verifying the corresponding ZK-proof)."}),"\n",(0,o.jsx)(t.li,{children:"Regarding architectural design, a seamless transition to complete ZK-rollup is super easy. The only necessary change is to adjust the sequencer's ZK-proof submission methods from responsive to active."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"how-can-rvp-shorten-the-challenge-period-of-optimistic-rollup",children:"How can RVP shorten the challenge period of optimistic rollup?"}),"\n",(0,o.jsx)(t.p,{children:"First, let's go back to its origin. Why do optimistic rollups need a challenge period (withdrawal period)?"}),"\n",(0,o.jsx)(t.p,{children:"The answer is simple. We need to give challengers enough time to identify the sequencer's malicious submissions, conduct fraud proof process, and complete the challenge process to ensure that malicious submissions are not accepted."}),"\n",(0,o.jsx)(t.p,{children:'In the design of the entire "withdrawal period", there are two main factors that affect the length of it:'}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"How long does it take for both parties to complete the challenge process?"}),"\n",(0,o.jsx)(t.li,{children:"Whether it can ensure that there is enough time to eliminate the influence of malicious behavior when malicious behavior affects the regular progress of the challenge process (such as sequencers maliciously blocking the challenger's transactions on L1)."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"To address these two factors, we can propose two solutions:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"A more concise and direct challenge process."}),"\n",(0,o.jsx)(t.li,{children:"Ensure that the normal challenge process is not affected by the malicious behavior of the sequencer."}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"--a-more-concise-and-direct-challenge-process",children:"- A more concise and direct challenge process."}),"\n",(0,o.jsx)(t.p,{children:"For multi-round interactive fraud proof, assuming that the entire challenge process requires 10 rounds of interaction, then we need at least 20 blocks of time to complete the challenge."}),"\n",(0,o.jsx)(t.p,{children:"Considering that waiting for the other party to respond and process results are required between each interaction, the actual interaction time could be much longer."}),"\n",(0,o.jsx)(t.p,{children:"For the RVP, the entire challenge requires only one interaction - the sequencer uploads the ZK-proof of the batch and verifies it on L1. This solves a major problem that previously affected the length of the challenge period: whether the challenger has enough time to detect and prove the incorrectness of the batch rolled up by the sequencer."}),"\n",(0,o.jsx)(t.h4,{id:"--ensure-that-the-normal-challenge-process-is-not-affected-by-the-malicious-behavior-of-the-sequencer",children:"- Ensure that the normal challenge process is not affected by the malicious behavior of the sequencer."}),"\n",(0,o.jsx)(t.p,{children:"In the interactive fraud-proof system, the challenged party may have the means and motivation to interfere with the challenge's progress. For example, they may launch a DoS attack on L1 in an attempt to prevent the challenger from interacting with L1 and submitting proof."}),"\n",(0,o.jsx)(t.p,{children:"However, in RVP, since the challenger only needs to trigger the challenge, the sequencer has no chance to attack the challenge process. From the moment the challenge is triggered, the sequencer has no choice but to prove its correctness through the ZK-proof."}),"\n",(0,o.jsx)(t.h3,{id:"why-is-the-operating-cost-lower-for-l2-based-on-rvp",children:"Why is the operating cost lower for L2 based on RVP?"}),"\n",(0,o.jsx)(t.p,{children:"One major advantage of ZK-rollups over optimistic rollups is the ability to compress transactions submitted to L1 more effectively."}),"\n",(0,o.jsx)(t.p,{children:"For example, the length of an Ethereum transaction is ~110 bytes, of which the signature occupies ~68 bytes. For optimistic rollups, since the transaction needs to be replayed ultimately, the transaction's signature must be submitted to ensure the validity of the L1 replayed transaction."}),"\n",(0,o.jsx)(t.p,{children:"However, for ZK-rollups, since the validity of the transaction is confirmed through the submitted ZK-proof, only the basic information of the transaction needs to be retained, thereby greatly reducing the cost of L2 submissions."}),"\n",(0,o.jsx)(t.p,{children:"RVP also uses ZK-proof to provide the validity of transactions, so the ZK-rollup advantage can be utilized to compress transactions during batch data submission."}),"\n",(0,o.jsx)(t.p,{children:"Furthermore, when there are no challenges, the sequencer does not need to consider the cost of submitting and verifying ZK-proofs."}),"\n",(0,o.jsx)(t.p,{children:"As a result, the cost of rollup based on RVP is lower than that of existing optimistic rollup and ZK-rollup from the original design."}),"\n",(0,o.jsx)(t.h3,{id:"rvp-is-friendly-to-challengers",children:"RVP is friendly to challengers"}),"\n",(0,o.jsx)(t.p,{children:"The essence of RVP is validity proof, which ultimately proves that the challenged data is valid."}),"\n",(0,o.jsx)(t.p,{children:"Therefore, in RVP, the sequencer bears the responsibility of generating and verifying proofs, and the challenger's only job is to initiate a challenge through staking."}),"\n",(0,o.jsx)(t.p,{children:"For fraud proof, especially interactive fraud proof, challengers need to complete the challenge through a series of interactions with the sequencer. This process is often cumbersome and complex, placing high requirements on the challenger."}),"\n",(0,o.jsx)(t.p,{children:'For L2 projects, sequencers have sufficient motivation to cheat. If cheating is successful, there is a high return. However, for challengers, their direct benefits are much lower than sequencers (therefore, in some project designs, L2\'s  "stakeholders" - such as the operator of the fast bridge - will act as challengers), leading to a lack of motivation for challengers.'}),"\n",(0,o.jsx)(t.p,{children:"Therefore, it is more reasonable to lower the threshold for challengers and increase the responsibility of sequencers."}),"\n",(0,o.jsx)(t.p,{children:"Of course, in this situation, challengers may increase the cost of sequencers by initiating unnecessary challenges. In the event that a challenge is unsuccessful, the challenger will not receive any benefits and will be required to compensate the sequencer for the cost incurred in creating the ZK-proof. As such, being overly concerned with potential malicious challenges is unnecessary."}),"\n",(0,o.jsx)(t.h3,{id:"why-do-sequencers-have-to-take-on-the-responsibility-of-submitting-zk-proofs",children:"Why do sequencers have to take on the responsibility of submitting ZK-proofs?"}),"\n",(0,o.jsx)(t.p,{children:"A proposal suggests that challengers can demonstrate the falsehood of a sequencer's submission by submitting their own submission and corresponding ZK-proof. The two submissions can then be compared to identify any fraudulent activity by the sequencer."}),"\n",(0,o.jsx)(t.p,{children:"Nonetheless, we have concerns about this proposition. Challengers are required to produce ZK-proofs using the transactions provided by the sequencer. If the sequencer submits invalid transactions, challengers cannot create ZK-proofs that can be authenticated on L1.\nThat's why it has to be sequencers to prove its correctness."}),"\n",(0,o.jsx)(t.h2,{id:"why-not-zk-rollup-given-that-several-zkevm-projects-have-already-launched-the-mainnet",children:"Why not ZK-rollup, given that several zkEVM projects have already launched the mainnet?"}),"\n",(0,o.jsx)(t.p,{children:"While it is true that forcibly verifying the validity of every state submission by sequencer through a significant number of cryptographic calculations, as seen in the current ZK-rollups, offers a higher level of security in theory, it comes with certain challenges. We think that the approach has the following drawbacks."}),"\n",(0,o.jsx)(t.h3,{id:"the-cost-of-zk-rollup-is-too-high",children:"The cost of ZK-rollup is too high"}),"\n",(0,o.jsx)(t.p,{children:"Currently, projects such as zkSync and Polygon zkEVM have already launched on the mainnet, indicating that generating and verifying ZK-proofs is no longer the most pressing issue. However, the current ZK-proofs are still constrained by their cost and efficiency issues and cannot fully shoulder the responsibility of scaling Ethereum for the time being."}),"\n",(0,o.jsxs)(t.p,{children:["Taking zkSync Era as an example, the average transaction cost on its network is currently between 0.5",(0,o.jsx)(t.del,{children:"1 USD. When the gas fees of L1 increase significantly, a transaction can even cost 3"}),"10 USD, which is much higher than the transaction costs of optimistic rollup projects such as Arbitrum and Optimism."]}),"\n",(0,o.jsx)(t.p,{children:"In contrast, in the case of RVP, it is not necessary to bear this high cost under normal network operation. Instead, it can compress submitted transaction data by leveraging ZK-proofs' characteristics. Only when challenged does it need to bear this cost, and in actual operation, normal network operation accounts for more than 99.9%, approaching 100%."}),"\n",(0,o.jsx)(t.h3,{id:"the-time-of-block-finalization-in-current-zk-rollups-is-close-to-the-optimized-challenge-period",children:"The time of block finalization in current ZK-rollups is close to the optimized challenge period"}),"\n",(0,o.jsx)(t.p,{children:"Theoretically, there is no withdrawal period for ZK-rollup because the entire L2 state transition verification process through ZK-proof should be completed in a few minutes or even seconds."}),"\n",(0,o.jsx)(t.p,{children:"However, the key issue here is that due to technical limitations, the time required for ZK-proof to be finally verified on L1 is much slower than expected. For example, in the case of zkSync Era, the time for L2 blocks to be finalized is about 20-24 hours, which is not significantly different from the optimized withdrawal period."}),"\n",(0,o.jsx)(t.h3,{id:"rvp-based-rollup-can-switch-to-zk-rollup-seamlessly",children:"RVP-based rollup can switch to ZK-rollup seamlessly"}),"\n",(0,o.jsx)(t.p,{children:"L2 scaling solutions incorporating RVP technology can be designed using the ZK-rollup framework. This makes seamlessly transitioning from RVP-based L2 to standard ZK-rollup L2 easy. The only necessary change is to adjust the sequencer's ZK-proof submission methods from responsive to active. Based on RVP, L2 can easily switch to ZK-rollup when ZK technology matures in the future."})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},6259:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/banner-d344b7401086a0cbd1d88c97a2758d23.jpg"},2745:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/compare3-07b913d095877cf4d7c75639f518833b.png"},2333:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var o=i(9474);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);