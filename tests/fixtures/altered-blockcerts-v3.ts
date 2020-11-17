const alteredBlockcertsV3Fixture = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    'https://www.blockcerts.org/schema/3.0-alpha/context.json',
    'https://www.w3.org/2018/credentials/examples/v1'
  ],
  id: 'urn:uuid:bbba8553-8ec1-445f-82c9-a57251dd731c',
  type: [
    'VerifiableCredential',
    'BlockcertsCredential'
  ],
  issuer: 'a-different-issuer',
  issuanceDate: '2010-01-01T19:33:24Z',
  credentialSubject: {
    id: 'did:key:z6Mkq3L1jEDDZ5R7eT523FMLxC4k6MCpzqD7ff1CrkWpoJwM',
    alumniOf: {
      id: 'did:example:c276e12ec21ebfeb1f712ebc6f1'
    }
  },
  proof: {
    type: 'MerkleProof2019',
    created: '2020-03-11T09:48:20.304161',
    proofValue: 'z2LuLBVSfnVzaQtvzuA7EaPQsGEgYWeaMTH1p3uqAG3ESx9HYyFzFFrYsyPkZSbn1Ji5LN76jw6HBr3oiaa8KsQenCPqKk7dJvxEXsDnYvhuDHtsDaQdmCyvpTR9oH46UZcCZ1UY7uZrgHmzf3J8Mzpp5Nnzd4SWiVN4RDWfxSkKmcoXywZ1pTm5bhbKAx1Xeydjwf7T7gcSSkUxQJmfJrWKdyiBjU1vt4oZxwbeTRQ9TfojiDRKJ6RPNsVPpkcDqGvPoaF58SQJG9xr8ACAAH9ZhYXJhRwW2zLpHGdRgyFGdxrcNiBVJ1o1TLcwLsfXTdRZLV2gW5yPLbEui6yBsmHtw9pQkWtfMxGBLzHk5ZRVLMdgUKatiV2QS4oE9N2GyiVnmQomApdS8R2cDSbQdn',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'ecdsa-koblitz-pubkey:0x7e30a37763e6Ba1fFeDE1750bBeFB4c60b17a1B3'
  }
};

export const documentHash = '5a44e794431569f4b50a44336c3d445085f09ac5785e38e133385fb486ada9c5';
export default alteredBlockcertsV3Fixture;
