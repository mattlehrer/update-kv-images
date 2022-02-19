import { ethers } from 'ethers';

const numBlocksToSkip = 6500;

export async function handleRequest(request: Request, env: Bindings) {
	const { CORRUPTIONS, ALCHEMY_URL } = env;
	try {
		const json = await request.json<{ tokenid: number; count: number }>();
		if (typeof json !== 'object' || json === null) {
			return new Response('Invalid JSON', { status: 400 });
		}
		const provider = new ethers.providers.JsonRpcProvider(ALCHEMY_URL);
		const latestBlock = await provider.getBlockNumber();
		// console.log(latestBlock);
		// const latestBlock =
		// 	Math.floor((await provider.getBlockNumber()) / numBlocksToSkip) *
		// 	numBlocksToSkip;

		return new Response('hey');
	} catch (error) {
		console.log(JSON.stringify(error, null, 2));
		return new Response(JSON.stringify(error, null, 2), { status: 400 });
	}
}

const worker: ExportedHandler<Bindings> = { fetch: handleRequest };

// Make sure we export the Counter Durable Object class
export default worker;
