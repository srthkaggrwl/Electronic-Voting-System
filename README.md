# Blockchain E-Voting System

A decentralized e-voting system that leverages blockchain technology for secure, transparent, and tamper-proof voting processes. This system ensures that every vote is stored immutably on the blockchain and that only registered users can cast their vote for registered candidates. 

## Features
- **Decentralized Voting**: Votes are recorded on the blockchain, ensuring transparency and security.
- **User Registration**: Only registered users can participate in voting.
- **Candidate Selection**: Multiple candidates can be registered, and each vote is uniquely cast.
- **Single Vote per User**: Each user can only vote once, preventing multiple votes.

## Technologies Used
- **Solidity**: Smart contract language for implementing the voting system.
- **Ethereum Blockchain**: For decentralized vote storage.
- **Web3.js**: To interact with the Ethereum blockchain from the frontend.
- **MetaMask**: Used as the web wallet for connecting user accounts.
- **JavaScript, HTML, CSS**: For the frontend interface.

## Getting Started

### Prerequisites
- **Node.js** and **npm**: Install Node.js from [Node.js](https://nodejs.org/).
- **MetaMask Extension**: Install MetaMask on your browser.
- **Ganache**: For running a local Ethereum blockchain. Download from [Ganache](https://trufflesuite.com/ganache/).
- **Truffle** (optional): For deploying and testing smart contracts. Install via npm:
    ```bash
    npm install -g truffle
    ```

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/srthkaggrwl/Electronic-Voting-System.git
    cd Blockchain-E-Voting-System
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Compile and Deploy Smart Contract**:
    - If using Truffle, compile and deploy the smart contract to Ganache:
      ```bash
      truffle compile
      truffle migrate
      ```
    - Copy the contract's address and update the `contractAddress` in `script2.js`.

4. **Run the Application**:
    - Open `index.html` in your browser.
    - Ensure MetaMask is connected to Ganache or the correct network.

## Project Structure

- `contracts/`: Contains the Solidity smart contracts.
- `migrations/`: Deployment scripts for smart contracts.
- `src/`: Contains the frontend code (HTML, CSS, JavaScript).
  - `index.html`: Homepage for the voting system.
  - `styles.css`: Styling for the frontend.
  - `script2.js`: Main JavaScript file handling the voting functionality and Web3 interactions.

## Usage

1. **Connect MetaMask**: Open `index.html` and connect your MetaMask wallet.
2. **Register as a User**: Navigate to the User Registration page and register.
3. **Vote for a Candidate**: Choose a candidate on the Candidates page and click **Vote**. Confirm the transaction in MetaMask.
4. **Verify Vote**: The vote is processed by the blockchain and a success message will display upon completion.

## Smart Contract Details

The main contract `EVotingSystem` has the following functions:
- **registerVoter**: Registers a user with a name, age, and unique identifier.
- **castVote**: Casts a vote for a specified candidate address. Only registered users can vote, and each user can only vote once.
- **addCandidate**: Registers a candidate with a name and address.

## Troubleshooting

1. **No Response on Vote Button Click**: Ensure MetaMask is connected and the contract address is correctly set in `script2.js`.
2. **Transaction Errors**: Ensure you have enough gas (ETH) in your MetaMask wallet for transactions.
3. **Contract Deployment Issues**: Verify that Ganache is running and that the Truffle configuration is correct.

## Contributing

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Commit and push your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [Ethereum](https://ethereum.org) for blockchain technology.
- [Truffle Suite](https://trufflesuite.com) for tools supporting Ethereum development.
- [MetaMask](https://metamask.io) for providing an easy-to-use Ethereum wallet.
