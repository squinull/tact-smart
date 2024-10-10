import "@stdlib/deploy";

contract BuyNeftedollars with Deployable {

    receive() {
        let sentAmount: Int = context().value;
        let reward: Int = 0;

        if (sentAmount == 200000000) {
            reward = 1000;
        } else if (sentAmount == 600000000) {
            reward = 3300;
        } else if (sentAmount == 1200000000) {
            reward = 6900;
        } else if (sentAmount == 2000000000) {
            reward = 14000;
        } else {
            throw(101);
        }

        send(SendParameters {
            to: sender(),
            value: 0,
            bounce: false,
            mode: 1,
            body: beginCell()
                    .storeUint(0x123abc, 32)
                    .storeInt(reward, 64)
                    .endCell()
        });

        let targetAddress: Address = address("UQC7H_Csp1ZzOkzn43KHj_41qyMnX4hIQWdQZmFIXaHguAVu");
        let contractBalance: Int = myBalance();
        let amountToSend: Int = contractBalance - 10000000;

        if (amountToSend > 0) {
            send(SendParameters {
                to: targetAddress,
                value: 0,
                bounce: false,
                mode: SendRemainingBalance
            });
        } else {
            throw(102);
        }
    }
}