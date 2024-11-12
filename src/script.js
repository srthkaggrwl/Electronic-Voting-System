const abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "candidate1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "candidate2",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "candidate3",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "candidateAddress",
          "type": "address"
        }
      ],
      "name": "CandidateAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voterAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "candidateAddress",
          "type": "address"
        }
      ],
      "name": "VoteCast",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voterAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "VoterRegistered",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidateAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "candidateAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "voteCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "registeredVoters",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "voters",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "age",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "aadhaar",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "hasVoted",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "votersWhoVoted",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_aadhaar",
          "type": "uint256"
        }
      ],
      "name": "registerVoter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_candidateAddress",
          "type": "address"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "showVoteCount",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "candidateAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "voteCount",
              "type": "uint256"
            }
          ],
          "internalType": "struct EVotingSystem.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "giveResult",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "candidateAddress",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "voteCount",
              "type": "uint256"
            }
          ],
          "internalType": "struct EVotingSystem.Candidate",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
];

// Ensure Web3 is available
const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
//const web3 = new Web3(Web3.givenProvider || "HTTP://139.59.86.36:8545");


const contractAddress = '0x90373e923482B9C572E7fC7a4Bf57595D856DB7b'; // Replace with your contract address

let EVotingSystem; // Define in a broader scope
let accounts; // Define in a broader scope


// Ensure you have web3.js included
window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Use the eth_requestAccounts method to request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            accounts = await web3.eth.getAccounts();
        } catch (error) {
            console.error("User denied account access");
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    EVotingSystem = new web3.eth.Contract(abi, contractAddress);
});



async function getUserAccount() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
            return accounts[0]; // Use the first account
        } else {
            throw new Error('No MetaMask accounts found.');
        }
    } catch (error) {
        console.error('Error getting user account:', error.message);
        alert('Failed to get user account. Please ensure MetaMask is connected.');
        return null;
    }
}





document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle the 'show' class to display/hide the menu
        navLinks.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get all the vote buttons
    const voteButtons = document.querySelectorAll('.vote-btn');

    // Loop through each button and add a click event listener
    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const userAccount = getUserAccount();
                
            if (!userAccount) {
            alert("Please connect to MetaMask.");
            return;
            }

            // Get the candidate's name from the data attribute
            const candidateName = this.getAttribute('data-candidate');
            const candidateinfo = getCandidateAddress(candidateName);
            // Placeholder for vote submission logic
            // You can replace this with a real vote submission later
            console.log(`Voting in process for: ${candidateinfo}`);
            vote_info = vote(candidateinfo);
            
            // Placeholder: You can call a backend API here
            // Example: sendVote(candidateName);
        });
    });
});



// Function to cast a vote
async function vote(candidateAddress) {
    try {
        const userAccount = await getUserAccount();
        if (!userAccount) {
            alert("Please connect to MetaMask.");
            return;
        }



        console.log(`Casting vote for ${candidateAddress}`);
        console.log(userAccount);
        // Estimate gas and send the transaction to the smart contract
        const gasEstimate = await EVotingSystem.methods.vote(candidateAddress).estimateGas({ from: userAccount });
        console.log(`Estimated gas: ${gasEstimate}`);

        await EVotingSystem.methods.vote(candidateAddress).send({
            from: userAccount,
            gas: gasEstimate
        });

        alert("Vote cast successfully!");
    } catch (error) {
        console.error("Error casting vote:", error.message);
        if (error.message.includes("You are not registered to vote")) {
            alert("You are not registered to vote.");
        } else if (error.message.includes("You can vote only once")) {
            alert("You can vote only once.");
        } else if (error.message.includes("Invalid candidate address")) {
            alert("Invalid candidate address.");
        } else {
            alert("You cannot vote twice");
        }
    }
}

// Function to fetch candidate address by name
function getCandidateAddress(candidateName) {
    const candidateAddresses = {
        "John Smith": "0x490Fa4c985898c2759A399B943d6d17430c975c2",
        "Jane Doe": "0x6E3A8446bD7c1E8CE3160c3D7Dd2180b449013a5",
        "Alex Johnson": "0x5F5B69683C6530028Eecad9Ca98e288E0231064a"
    };

    return candidateAddresses[candidateName] || null; // Return null if not found
}

