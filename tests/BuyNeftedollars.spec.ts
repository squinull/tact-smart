import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano, fromNano } from '@ton/core';
import { BuyNeftedollars } from '../wrappers/BuyNeftedollars';
import '@ton/test-utils';

describe('BuyNeftedollars', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let buyNeftedollars: SandboxContract<BuyNeftedollars>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        buyNeftedollars = blockchain.openContract(await BuyNeftedollars.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await buyNeftedollars.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: buyNeftedollars.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and buyNeftedollars are ready to use
    });

    it('should return 1000 Neftedollars for 0.2 TON', async () => {
        const result = await buyNeftedollars.send(
            deployer.getSender(),
            { value: toNano("0.2") },  // 200000000 нанотон
            null
        );

        const lastTransaction = result.transactions[result.transactions.length - 1];

        if (lastTransaction && lastTransaction.inMessage) {
            const messageBody = lastTransaction.inMessage.body?.beginParse();

            if (messageBody) {
                const identifier = messageBody.loadUint(32);
                const rewardAmount = messageBody.loadInt(64);

                console.log(`Message identifier: ${identifier.toString(16)}`);
                console.log(`Reward: ${rewardAmount} Neftedollars`);
            } else {
                console.log('No message body');
            }
        } else {
            console.log('No inMessage or transaction data');
        }
    });

    it('should return 3300 Neftedollars for 0.6 TON', async () => {
        const result = await buyNeftedollars.send(
            deployer.getSender(),
            { value: toNano("0.6") },  // 600000000 нанотон
            null
        );

        const lastTransaction = result.transactions[result.transactions.length - 1];

        if (lastTransaction && lastTransaction.inMessage) {
            const messageBody = lastTransaction.inMessage.body?.beginParse();

            if (messageBody) {
                const identifier = messageBody.loadUint(32); // Идентификатор сообщения
                const rewardAmount = messageBody.loadInt(64); // Количество Neftedollars

                console.log(`Message identifier: ${identifier.toString(16)}`);
                console.log(`Reward: ${rewardAmount} Neftedollars`);
            } else {
                console.log('No message body');
            }
        } else {
            console.log('No inMessage or transaction data');
        }
    });

    it('should return 6900 Neftedollars for 1.2 TON', async () => {
        const result = await buyNeftedollars.send(
            deployer.getSender(),
            { value: toNano("1.2") },  // 1200000000 нанотон
            null
        );

        const lastTransaction = result.transactions[result.transactions.length - 1];

        if (lastTransaction && lastTransaction.inMessage) {
            const messageBody = lastTransaction.inMessage.body?.beginParse();

            if (messageBody) {
                const identifier = messageBody.loadUint(32); // Идентификатор сообщения
                const rewardAmount = messageBody.loadInt(64); // Количество Neftedollars

                console.log(`Message identifier: ${identifier.toString(16)}`);
                console.log(`Reward: ${rewardAmount} Neftedollars`);
            } else {
                console.log('No message body');
            }
        } else {
            console.log('No inMessage or transaction data');
        }
    });

    it('should return 14000 Neftedollars for 2 TON', async () => {
        const result = await buyNeftedollars.send(
            deployer.getSender(),
            { value: toNano("2") },  // 2000000000 нанотон
            null
        );

        const lastTransaction = result.transactions[result.transactions.length - 1];

        if (lastTransaction && lastTransaction.inMessage) {
            const messageBody = lastTransaction.inMessage.body?.beginParse();

            if (messageBody) {
                const identifier = messageBody.loadUint(32); // Идентификатор сообщения
                const rewardAmount = messageBody.loadInt(64); // Количество Neftedollars

                console.log(`Message identifier: ${identifier.toString(16)}`);
                console.log(`Reward: ${rewardAmount} Neftedollars`);
            } else {
                console.log('No message body');
            }
        } else {
            console.log('No inMessage or transaction data');
        }
    });
});
