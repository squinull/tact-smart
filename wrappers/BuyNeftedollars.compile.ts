import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/buy_neftedollars.tact',
    options: {
        debug: true,
    },
};
