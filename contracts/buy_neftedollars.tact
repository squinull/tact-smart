import "@stdlib/deploy";

contract BuyNeftedollars with Deployable {

    receive(str: String) {
        let sentAmount: Int = context().value;

        if (sentAmount != 200000000 && sentAmount != 600000000 && sentAmount != 1200000000 && sentAmount != 2000000000) {
            send(SendParameters {
                to: sender(),
                value: 0,
                mode: SendRemainingValue | SendIgnoreErrors 
            });
            return;
        }

        let targetAddress: Address = address("UQCM-PsPLeU9zM9rUNkzscZTAGfH5McHfV1xeqIWzyNicygI");

        send(SendParameters {
            to: targetAddress,
            value: 0,
            bounce: false,
            mode: 128
        });
    }
}
