"use strict";(self.webpackChunkmorph_doc=self.webpackChunkmorph_doc||[]).push([[7220],{929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var n=r(3274),o=r(2333);const s={title:"Development Setup",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},i="Start Developing on Morph",h={id:"build-on-morph/build-on-morph/development-setup",title:"Development Setup",description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!",source:"@site/docs/build-on-morph/build-on-morph/2-development-setup.md",sourceDirName:"build-on-morph/build-on-morph",slug:"/build-on-morph/build-on-morph/development-setup",permalink:"/docs/build-on-morph/build-on-morph/development-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/morph-l2/morph-doc/tree/main/docs/build-on-morph/build-on-morph/2-development-setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Development Setup",lang:"en-US",keywords:["morph","ethereum","rollup","layer2","validity proof","optimistic zk-rollup"],description:"Upgrade your blockchain experience with Morph - the secure decentralized, cost0efficient, and high-performing optimistic zk-rollup solution. Try it now!"},sidebar:"DevSidebar",previous:{title:"Difference between Morph and Ethereum",permalink:"/docs/build-on-morph/build-on-morph/difference-between-morph-and-ethereum"},next:{title:"Bridge between Morph and Ethereum",permalink:"/docs/build-on-morph/build-on-morph/bridge-between-morph-and-ethereum"}},l={},d=[{value:"Step 1: Network Configuration",id:"step-1-network-configuration",level:2},{value:"Step 2: Set up your developing framework",id:"step-2-set-up-your-developing-framework",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Foundry",id:"foundry",level:3},{value:"ethers.js",id:"ethersjs",level:3},{value:"Step 3: Acquire Ether",id:"step-3-acquire-ether",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"start-developing-on-morph",children:"Start Developing on Morph"}),"\n",(0,n.jsx)(t.p,{children:"Developing on Morph is as easy as developing on Ethereum \u2014 literally!"}),"\n",(0,n.jsx)(t.p,{children:"To deploy contracts onto a MorphL2 chain, simply set the RPC endpoint of your target MorphL2 chain and deploy using your preferred Ethereum development framework :"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://hardhat.org/",children:"Hardhat"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/foundry-rs/foundry",children:"Foundry"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://eth-brownie.readthedocs.io/en/stable/",children:"Brownie"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.alchemy.com/reference/alchemy-sdk-quickstart",children:"Alchemy"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"...it all just works!"}),"\n",(0,n.jsx)(t.h1,{id:"holesky-testnet",children:"Holesky Testnet:"}),"\n",(0,n.jsx)(t.h2,{id:"step-1-network-configuration",children:"Step 1: Network Configuration"}),"\n",(0,n.jsx)(t.p,{children:"Before you start, ensure you are connected to the following networks:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Network Name"}),(0,n.jsx)(t.th,{children:"Morph Holesky Testnet"}),(0,n.jsx)(t.th,{children:"Holesky Testnet"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RPC URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://rpc-holesky.morphl2.io",children:"https://rpc-holesky.morphl2.io"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://ethereum-holesky-rpc.publicnode.com/",children:"https://ethereum-holesky-rpc.publicnode.com/"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Chain ID"}),(0,n.jsx)(t.td,{children:"2810"}),(0,n.jsx)(t.td,{children:"17000"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Currency Symbol"}),(0,n.jsx)(t.td,{children:"ETH"}),(0,n.jsx)(t.td,{children:"ETH"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Block Explorer URL"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://explorer-holesky.morphl2.io/",children:"https://explorer-holesky.morphl2.io/"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://holesky.etherscan.io/",children:"https://holesky.etherscan.io/"})})]})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"Websocket Connection",type:"tip",children:(0,n.jsx)(t.p,{children:"wss://rpc-holesky.morphl2.io:8443/"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-set-up-your-developing-framework",children:"Step 2: Set up your developing framework"}),"\n",(0,n.jsx)(t.h3,{id:"hardhat",children:"Hardhat"}),"\n",(0,n.jsx)(t.p,{children:"Modify your Hardhat config file hardhat.config.ts to point at the Morph public RPC."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:'const config: HardhatUserConfig = {\n  ...\n  networks: {\n    morphTestnet: {\n      url: process.env.MORPH_TESTNET_URL || "",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n  },\n};\n\n'})}),"\n",(0,n.jsx)(t.h3,{id:"foundry",children:"Foundry"}),"\n",(0,n.jsx)(t.p,{children:"To deploy using Morph Public RPC, run:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"forge create ... --rpc-url= --legacy\n"})}),"\n",(0,n.jsx)(t.h3,{id:"ethersjs",children:"ethers.js"}),"\n",(0,n.jsx)(t.p,{children:"Setting up a Morph  provider in an ethers script:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { ethers } from 'ethers';\n\nconst provider = new ethers.providers.JsonRpcProvider(\n  'https://\n);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-acquire-ether",children:"Step 3: Acquire Ether"}),"\n",(0,n.jsx)(t.p,{children:"To start building on Morph, you may need some testnet ETH. Use a faucet to acquire holesky Ether,  then bridge the test Ethereum Ether to the Morph testnet."}),"\n",(0,n.jsx)(t.p,{children:"Each faucet has its own rules and requirements, so you may need to try a few before finding one that works for you."}),"\n",(0,n.jsx)(t.p,{children:"Here are some Holesky ETH faucet websites:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://stakely.io/en/faucet/ethereum-holesky-testnet-eth",children:"https://stakely.io/en/faucet/ethereum-holesky-testnet-eth"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://faucet.quicknode.com/ethereum/holesky",children:"https://faucet.quicknode.com/ethereum/holesky"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://holesky-faucet.pk910.de/",children:"https://holesky-faucet.pk910.de/"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you receive ETH on holesky, you should see it in your wallet on the\xa0",(0,n.jsx)(t.em,{children:"holesky Network"}),". It may take a few seconds for them to appear, but you can check the status by looking for a transaction to your address on a\xa0",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://holesky.etherscan.io/",children:"Holesky Block Explorer"})}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2333:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>h});var n=r(9474);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);