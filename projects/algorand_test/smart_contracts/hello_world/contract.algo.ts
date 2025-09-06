// import { Contract } from '@algorandfoundation/algorand-typescript'

// export class HelloWorld extends Contract {
//   hello(name: string): string {
//     return `Hello, ${name}`
//   }
// }

import { Contract } from "@algorandfoundation/tealscript";

export class Voting extends Contract {
  proposal = this.globalState.string({ key: "proposal", default: "" });
  votes = this.globalState.uint64({ key: "votes", default: 0n });

  createProposal(title: string): string {
    this.proposal.value = title;
    this.votes.value = 0n;
    return this.proposal.value;
  }

  castVote(): bigint {
    this.votes.value += 1n;
    return this.votes.value;
  }

  getResult(): string {
    return `Proposal: ${this.proposal.value}, Votes: ${this.votes.value}`;
  }
}
