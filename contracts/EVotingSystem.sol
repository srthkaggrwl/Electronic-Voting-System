// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract EVotingSystem{
    // Structure to store voter information
    struct Voter {
        string name;
        uint age;
        uint aadhaar;
        bool hasVoted;
    }

    // Structure to store candidate information
    struct Candidate {
        string name;
        address candidateAddress;
        uint voteCount;
    }

    // Arrays to store registered voters and candidates
    address[] public registeredVoters;
    address[] public votersWhoVoted;

    mapping(address => Voter) public voters;
    mapping(address => Candidate) public candidates;
    address[] public candidateAddresses;

    // Events for logging actions
    event VoterRegistered(address indexed voterAddress, string name);
    event VoteCast(address indexed voterAddress, address indexed candidateAddress);
    event CandidateAdded(string name, address indexed candidateAddress);

    // Constructor to initialize the candidates
    constructor(address candidate1, address candidate2, address candidate3) {
        _addCandidate("John Smith", candidate1);
        _addCandidate("Jane Doe", candidate2);
        _addCandidate("Alex Johnson", candidate3);
    }

    // Modifier to check voter eligibility
    modifier isEligible(uint age) {
        require(age >= 18, "You are not eligible to vote");
        _;
    }

//     //Private function to add a candidate
    function _addCandidate(string memory _name, address _candidateAddress) private {
        candidates[_candidateAddress] = Candidate(_name, _candidateAddress, 0);
        candidateAddresses.push(_candidateAddress);

        // Emit event when a candidate is added
        emit CandidateAdded(_name, _candidateAddress);
    }

    // Function to register voters
    function registerVoter(string memory _name, uint _age, uint _aadhaar) public isEligible(_age) {
        require(voters[msg.sender].aadhaar == 0, "Voter already registered");

        Voter memory newVoter = Voter({
            name: _name,
            age: _age,
            aadhaar: _aadhaar,
            hasVoted: false
        });

        voters[msg.sender] = newVoter;
        registeredVoters.push(msg.sender);

        // Emit event when a voter registers
        emit VoterRegistered(msg.sender, _name);
    }

    // Function to cast a vote
    function vote(address _candidateAddress) public {
        require(voters[msg.sender].aadhaar != 0, "You are not registered to vote");
        require(!voters[msg.sender].hasVoted, "You can vote only once");
        require(candidates[_candidateAddress].candidateAddress != address(0), "Invalid candidate");

        voters[msg.sender].hasVoted = true;
        votersWhoVoted.push(msg.sender);
        candidates[_candidateAddress].voteCount += 1;

        // Emit event when a vote is cast
        emit VoteCast(msg.sender, _candidateAddress);
    }

    // Function to display the number of votes each candidate has received
    function showVoteCount() public view returns (Candidate[] memory) {
        Candidate[] memory results = new Candidate[](candidateAddresses.length);
        for (uint i = 0; i < candidateAddresses.length; i++) {
            results[i] = candidates[candidateAddresses[i]];
        }
        return results;
    }

    // Function to give the result of the voting
    function giveResult() public view returns (Candidate memory) {
        Candidate memory winningCandidate;
        uint maxVotes = 0;
        for (uint i = 0; i < candidateAddresses.length; i++) {
            if (candidates[candidateAddresses[i]].voteCount > maxVotes) {
                maxVotes = candidates[candidateAddresses[i]].voteCount;
                winningCandidate = candidates[candidateAddresses[i]];
            }
        }
        return winningCandidate;
    }
}
