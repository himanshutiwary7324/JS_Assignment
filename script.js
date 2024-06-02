// Create a variable to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, my_company, starting_year, company_rank) {
  const NFT = {
    name: name,
    my_company: my_company,
    starting_year: starting_year,
    company_rank: company_rank,
  };
  NFTs.push(NFT);
  console.log("Minted: " + name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + NFTs[i].name);
    console.log("my_company: \t" + NFTs[i].my_company);
    console.log("starting_year: \t" + NFTs[i].starting_year);
    console.log("company_rank: \t" + NFTs[i].company_rank);
  }
}
// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal NFTs: " + NFTs.length);
}

// Call your functions below this line
mintNFT("Himanshu", "Google", "2023", "24th");
mintNFT("Sahil", "Microsoft", "1890", "3rd");
mintNFT("Aakash", "Amazon", "2005", "5th");
mintNFT("GopalJI", "Facebook", "2010", "10th");

listNFTs();
getTotalSupply();