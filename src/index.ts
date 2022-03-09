import { ethers } from 'ethers';
import { abi } from './abi';

const CORRUPTIONS_CONTRACT_ADDR = '0x5BDf397bB2912859Dbd8011F320a222f79A28d2E';
// const CORRUPTIONS_DEPLOYMENT_BLOCK = 13604427; // actual
const CORRUPTIONS_DEPLOYMENT_BLOCK = 13605000; // rounded and after all mints
const numBlocksToSkip = 6500;
const ALCHEMY_FETCHES_IN_PARALLEL = 100;

export async function handleRequest(request: Request, env: Bindings) {
	const { CORRUPTIONS, ALCHEMY_URL } = env;
	try {
		const json = await request.json<{ tokenid: number; count: number }>();
		if (typeof json !== 'object' || json === null) {
			return new Response('Invalid JSON', { status: 400 });
		}
		const { tokenid, count } = json;
		const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);
		const latestBlock = await provider.getBlockNumber();
		// console.log(latestBlock);
		// const latestBlock =
		// 	Math.floor((await provider.getBlockNumber()) / numBlocksToSkip) *
		// 	numBlocksToSkip;
		const corruptionsContract = new ethers.Contract(
			CORRUPTIONS_CONTRACT_ADDR,
			abi.abi,
			provider,
		);
		const res: string = await corruptionsContract.tokenURI(tokenid, {
			// https://docs.ethers.io/v5/api/providers/types/#providers-BlockTag
			blockTag: latestBlock,
		});

		return new Response(res);
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
		return new Response(JSON.stringify(error, null, 2), { status: 400 });
	}
}

const worker: ExportedHandler<Bindings> = { fetch: handleRequest };

// Make sure we export the Counter Durable Object class
export default worker;
