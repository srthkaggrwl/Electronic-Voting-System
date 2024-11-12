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



// Ensure this is placed after the IPFS library is included in HTML
async function pushJson(data) {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzZWFkNzJlZC1jNDI1LTQ0YjUtYjEzZi03MTliZTBkMmQ5NTAiLCJlbWFpbCI6InNhcnRoYWthZ2dhcndhbDEyMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMDhiNGE1ZTlkYTA3ZjI1ZDFiY2UiLCJzY29wZWRLZXlTZWNyZXQiOiI1ZGI2MjMyNTIxOGFkMmU0NDlkZjFjMTZlMDk5Y2ZjODQ2ODFiNjVjYWUzMGYyNmE0NjcyMjU5YTdmZWZjOGYxIiwiZXhwIjoxNzU3NzQ2MjE4fQ.0TIJrjd4cFdYPoFV0B4plKfvsEuRDTasWeahCQMHBsQ`
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log('Data uploaded to IPFS. CID:', result.IpfsHash);
    return result.IpfsHash;
  } catch (error) {
    console.log('Error uploading data to IPFS:', error);
    throw error;
  }
}


async function pull(cid_ipfs) {
  try {
    // Step 1: Fetch data from Pinata gateway
    const gatewayUrl = `https://gateway.pinata.cloud/ipfs/${cid_ipfs}`;
    const dataResponse = await fetch(gatewayUrl);
    
    if (!dataResponse.ok) {
      throw new Error(`Error fetching data from gateway: ${dataResponse.statusText}`);
    }

    const data = await dataResponse.json();
    console.log("Data from IPFS:", data);
    return data

  } catch (error) {
    console.log("Error:", error);
  }
}


document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from reloading page

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const aadhar = document.getElementById("aadhar").value;

    // Validation check
    if (name === "" || age < 18 || aadhar.length !== 12 || isNaN(aadhar)) {
        alert("Please enter valid details.");
        return;
    }

    try {
        const userAccount = await getUserAccount();

        if (userAccount) {
            // Register voter in a try-catch to specifically handle contract revert reasons
            try {
                await EVotingSystem.methods.registerVoter(name, age, aadhar).send({
                    from: userAccount,
                    gas: 300000 // Adjust gas as needed
                });

                alert("Registration successful!");
                window.location.href = "confirmation.html";
            } catch (innerError) {
                console.error("Smart contract execution failed:", innerError);

                // Specific check for "Voter already registered" revert message
                if (innerError.message.includes("revert Voter already registered")) {
                    alert("User with the same wallet address is already registered.");
                } else {
                    alert("User with the same wallet address is already registered.");
                }
            }
        }
    } catch (error) {
        console.error("Registration process encountered an error:", error);
        alert("Failed to get user account. Please ensure MetaMask is connected.");
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle the 'show' class to display/hide the menu
        navLinks.classList.toggle('show');
    });
})

document.addEventListener('DOMContentLoaded', () => {

    // Get all the vote buttons
    const voteButtons = document.querySelectorAll('.vote-btn');

    // Loop through each button and add a click event listener
    voteButtons.forEach(button => {
        button.addEventListener('click', async function() {
            // Log to confirm the button is being clicked
            console.log("Vote button clicked");

            // Get the candidate's name from the data attribute
            const candidateName = this.getAttribute('data-candidate');
            console.log(`Voting for: ${candidateName}`);

            // Fetch candidate address from a mapping or smart contract
            const candidateAddress = await getCandidateAddress(candidateName);
            console.log(`Candidate Address: ${candidateAddress}`);

            if (candidateAddress) {
                // Call the vote function with the candidate's address
                await vote(candidateAddress);
            } else {
                alert("Candidate not found.");
            }
        });
    });
});

