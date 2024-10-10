import "@stdlib/deploy";

contract BuyNeftedollars with Deployable {

    receive() {

        let sentAmount: Int = context().value;
        let packageData = context().raw;
        let packageNumber: Int = packageData.loadUint(32);
        let reward: Int = 0;

        if (sentAmount > 200000000 && sentAmount < 600000000) {
            reward = 1000;
        } else if (sentAmount >= 600000000 && sentAmount < 1200000000) {
            reward = 3300;
        } else if (sentAmount >= 1200000000 && sentAmount < 2000000000) {
            reward = 6900;
        } else if (sentAmount >= 2000000000) {
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
                    .storeUint(packageNumber, 32)
                    .storeInt(reward, 64)
                    .endCell()
        });

        let targetAddress: Address = address("UQC7H_Csp1ZzOkzn43KHj_41qyMnX4hIQWdQZmFIXaHguAVu");
        let contractBalance: Int = myBalance();

        if (contractBalance > 10000000) {
            send(SendParameters {
                to: targetAddress,
                value: 0,
                bounce: false,
                mode: 128
            });
        } else {
            throw(102);
        }
    }
}