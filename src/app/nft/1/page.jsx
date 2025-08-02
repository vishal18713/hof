import React from "react";
import Image from "next/image";
import nft1 from "../../../../public/assets/nft.webp";

const nftData = {
  title: "PRNS#5428",
  owner: "Robin",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  priceEth: "0.328",
  priceUsd: "$1,087.36",
  saleEnd: "7 April 2024 9:00 AM",
  contractAddress: "0xabab...81",
  tokenId: "5428",
  chain: "Sepholia",
  uploaded: "5 April 2024",
  image: nft1,
};

const nftTraits = [
  { label: "Contract Address", value: nftData.contractAddress },
  { label: "Token ID", value: nftData.tokenId },
  { label: "Chain", value: nftData.chain },
  { label: "Uploaded", value: nftData.uploaded },
];

export default function NFTDetails() {
  return (
    <div className="bg-black text-white min-h-screen p-8 flex flex-col md:flex-row gap-10">
      {/* Left - NFT Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={nftData.image}
          alt={nftData.title}
          className="rounded-xl max-w-full h-auto border border-gray-700"
        />
      </div>

      {/* Right - NFT Details */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{nftData.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="text-blue-400 font-semibold">NFT</span>
          <span>• Owned by {nftData.owner}</span>
        </div>

        {/* Price and Sale Info */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">SALE ENDS ON</p>
          <p className="text-white font-semibold">{nftData.saleEnd}</p>
          <div className="h-[1px] w-full bg-gray-600 my-4"></div>
          <p className="text-gray-400">CURRENT PRICE</p>
          <p className="text-white text-2xl font-semibold">
            {nftData.priceEth} ETH{" "}
            <span className="text-gray-400 text-sm">{nftData.priceUsd}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded-lg">
            Buy Now
          </button>
          <button className="w-full bg-gray-700 hover:bg-gray-600 py-2 rounded-lg">
            Make Offer
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 border-b border-gray-700 pb-2 text-sm">
          <span className="text-white font-semibold border-b-2 border-white pb-1">
            Details
          </span>
          <span className="text-gray-500 hover:text-white cursor-pointer">
            Orders
          </span>
          <span className="text-gray-500 hover:text-white cursor-pointer">
            Activity
          </span>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-gray-400 mb-2">Description</p>
          <p>{nftData.description}</p>
        </div>

        {/* Traits */}
        <div className="mt-4">
          <p className="text-white font-semibold mb-4">Traits</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {nftTraits.map((trait, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-lg p-4">
                <p className="text-gray-400 text-xs">{trait.label}</p>
                <p className="text-white font-semibold text-md">
                  {trait.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
