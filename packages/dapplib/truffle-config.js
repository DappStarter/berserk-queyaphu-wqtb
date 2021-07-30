require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note shift protect just argue borrow twenty'; 
let testAccounts = [
"0x5fbdba7f8ac16dd89be8f8c4812090df6ea555a58c24bf407607f55df2d9fe4c",
"0xb01c70bdb304f61dc48da77be1d08dc40e8233bf5cb2f429ab4381f3d3a0ff3f",
"0xaa1b8a09ad16507e858f66347dbb2d0793c70df093eacff683a77912ebf6f280",
"0x178cc8e90172a073fc2ed6b1a8f7f5c237072f1cf89ab223646281b162a2f275",
"0xc05b7b7d2ad4f5662baa72d04329dbb0f3296b8cbb286956b61587af43a597a8",
"0xd2cbd0a78a4f1804608df4f9c8cff7f90faf5b93bb47032f06a5a65ec6aba663",
"0xde6f980ba70df0160e33586a1e9ddfac7ad0f00d513ec53739efc2553c46e5e9",
"0x430462ce1477ce5fa13364df2d854f4953cce277be9dc4251f65adefae074593",
"0x2a798b7325a0c18203b63a13623ca1d7fd5e5b3878cdbd57fb299dcfcb1d4fde",
"0xbf92d540b76f8419d950540956ce0ac7be191d6674e0d2f8569b7947c80e5cf6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

