import { toNano } from '@ton/core';
import { BuyNeftedollars } from '../wrappers/BuyNeftedollars';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const buyNeftedollars = provider.open(await BuyNeftedollars.fromInit());

    await buyNeftedollars.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(buyNeftedollars.address);

    // run methods on `buyNeftedollars`
}
