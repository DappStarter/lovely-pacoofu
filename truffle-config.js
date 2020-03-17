require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name return machine hospital hunt crisp equal general'; 
let testAccounts = [
"0x9fbd64b6b05dee28fe6e28bcbe0ca7459d57175af66de5e909f20218c81bbbf0",
"0x331b63be34b5dca7a0389a698b3fdfb2efa75b8578cac80c89658678f2279a9b",
"0x53c83a80861073c3d4ecad1e5d1be53f6df24e50f10f7b64285ca039aa7409e4",
"0xe65c834430e61aed8eb0ef3371d35dfd05925f9ce994514d04d864a952997e07",
"0x527d2d8d7f2e16ce737c0f18894fd9f7fac1d5e0362e2cdbe57bcd62ba46c3bf",
"0xecde8f710e67fa2741c9ad62e64003c0c9bdcbbf82eb8469deab03689aeade4b",
"0x3abe31cd4ec424750f9f8b7c74fa554a0fd8517a3a7c4a94ab6885020ca25ff6",
"0x74a4769d4d1a03f61400fbd80bdb4e016344a8c3c654b0bfdb213b867221ceb4",
"0x10d4db54bd8c5acd2d0460536473754e09ff07f3f768caf03fd47d5626927c16",
"0xc752d578271643297a0d80775843081bafc168428aef7e41774dd8488f537e4e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
