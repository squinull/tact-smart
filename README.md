# OilMagnate Tact Smart-Contract v1.3

## Project structure

-   `contracts` - source code of all the smart contracts of the project and their dependencies.
-   `wrappers` - wrapper classes (implementing `Contract` from ton-core) for the contracts, including any [de]serialization primitives and compilation functions.
-   `tests` - tests for the contracts.
-   `scripts` - scripts used by the project, mainly the deployment scripts.

## How to use

### Build

`npx blueprint build` or `yarn blueprint build`

### Test

`npx blueprint test` or `yarn blueprint test`

### Deploy or run another script

`npx blueprint run` or `yarn blueprint run`

### Add a new contract

`npx blueprint create ContractName` or `yarn blueprint create ContractName`

## Contract Structure  

### Reacieve Message  

`receive()`– called when an empty message is sent to the contract  

`receive("message")`– called when a text message with a specific comment is sent to the contract  

`receive(str: String)`– called when an arbitrary text message is sent to the contract  

`receive(msg: MyMessage)`– called when a binary message of type MyMessage is sent to the contract  

`receive(msg: Slice)`– called when binary message of unknown type is sent to the contract  