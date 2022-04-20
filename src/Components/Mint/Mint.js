import { ethers } from "ethers";
import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
        if (!window.ethereum)
            throw new Error("No crypto wallet found. Please install it.");

        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
            to: addr,
            value: ethers.utils.parseEther(ether),
        });
        setTxs([tx]);
    } catch (err) {
        setError(err?.message?.slice(0, 50));
    }
};
const Mint = () => {
    const [error, setError] = useState("");
    const [txs, setTxs] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError();
        const data = new FormData(e.target);
        setError();
        await startPayment({
            setError,
            setTxs,
            ether: data.get("ether"),
            addr: data.get("addr"),
        });
    };
    return (
        <div className="bg-[#15051c] py-10">
            <form onSubmit={handleSubmit}>
                <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                    <main className="mt-4 p-4">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Send ETH Payment (MetaMask Wallet)
                        </h1>
                        <div className="">
                            <div className="my-3">
                                <input
                                    type="text"
                                    name="addr"
                                    className="w-full p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
                                    placeholder="Recipient Address"
                                />
                            </div>
                            <div className="my-3">
                                <input
                                    name="ether"
                                    type="text"
                                    className="w-full p-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-purple-500"
                                    placeholder="Amount in ETH"
                                />
                            </div>
                        </div>
                    </main>
                    <footer className="p-4 w-full">
                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 focus:outline-none focus:shadow-outline"
                        >
                            Pay now
                        </button>
                        <ErrorMessage message={error} />
                        <TxList txs={txs} />
                    </footer>
                </div>
            </form>
        </div>
    );
};

export default Mint;
