import { Contract, GlobalState, uint64 } from "@algorandfoundation/algorand-typescript";

// export class HelloWorld extends Contract {
//   hello(name: string): string {
//     return `Hello, ${name}`
//   }
// }

export class Voting extends Contract {
  // Store the current proposal
  proposal = GlobalState<string>({ key: "proposal", initialValue: "" });

  // Store vote count as a number
  votes = GlobalState<uint64>({ key: "votes", initialValue: 0 });

  // Function to create a proposal
  createProposal(title: string): string {
    this.proposal.value = title;
    this.votes.value = 0; // reset votes when new proposal is made
    return this.proposal.value;
  }

  // Function to cast a vote
  castVote(): uint64 {
    this.votes.value = this.votes.value + 1;
    return this.votes.value;
  }

  // Function to check results
  getResult(): [string, uint64] {
    return [this.proposal.value, this.votes.value];
  }
}
