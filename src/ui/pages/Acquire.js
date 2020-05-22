import React, { useEffect, useState } from 'react'

import { H2, Subtitle, Text, HR, Gap, LabelGrey, Click } from '../components'
import { AcquireTable } from './acquire-web3'
import { TokenTable } from './tokens'

import '../../App.css';
// import { Button as ButtonD } from 'antd';

const Acquire = () => {

	const [safari, setSafari] = useState(null)

	useEffect(() => {
		var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
		setSafari(isSafari)
	}, [])

	return (
		<div>
			<Gap />
			<H2>ACQUIRE VETHER</H2><br />
			<Subtitle>Acquire a share of today’s emission by burning assets, such as Ether or ERC-20 tokens.</Subtitle>
			{safari &&
				<div>
					<br/>
					<LabelGrey>Sending Ethereum transactions requires Chrome and Metamask</LabelGrey>
					<br/>
					<Click><a href='https://metamask.io' rel="noopener noreferrer" title="Metamask Link" target="_blank" style={{ color: "#D09800", fontSize: 12 }}>Download Metamask</a></Click>
				</div>
			}
			{!safari &&
				<div>
					<AcquireTable></AcquireTable>
					<HR />
					<Gap />
					<H2>BURN TOKENS</H2><br />
					<Subtitle>Burn the tokens on your wallet to get VETHER.</Subtitle><br />
					<Text>Note: If there are any errors in your MetaMask, do not proceed, the token is not compatible with Vether.</Text>
					<br /><br />
					<TokenTable></TokenTable>
				</div>
			}

			<HR />
			
			<Gap />
			<H2>MINE VETHER</H2><br />
			<Subtitle>Run the mining client to continuously mine Vether. </Subtitle>
			<br /><br />
			<Click><a href='https://github.com/vetherasset/vether-miner' rel="noopener noreferrer" title="Metamask Link" target="_blank" style={{ color: "#D09800", fontSize: 16 }}>GET THE CLIENT -></a></Click>
			<Gap />
		</div>
	)
}
export default Acquire
