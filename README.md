## 🗂 Project Structure

- **`frontend/`** – Built with **Next.js**, it handles the author and buyer flows via a simple interface.
- **`backend/`** – Built using **NestJS**, with:
    - **Prisma** for data persistence (PostgreSQL)
    - **BullMQ** for async job handling (minting, metadata, BTC inscriptions)

---

## 🔌 Blockchain Integrations

- **Helio** – Stablecoin (USDC) payments, with webhook-based event flow
- **Helius** – Solana RPC provider for interacting with the chain and minting **pNFTs**
- **Unisat** – Used to create **Bitcoin inscriptions** that act as immutable, on-chain proof of content integrity
- **Pinata (IPFS)** – Stores book metadata and signed license agreements
- **Solana Wallet Adapter** – Allows authors and buyers to connect with any supported wallet provider (Phantom, Backpack, etc.)

---

## 🧠 Key Features

- ✅ pNFTs contain license metadata + IPFS-hosted agreements
- 🔒 Bitcoin inscriptions store content hashes as permanent proof of existence
- ⚙️ Modular system — licensing, payments, and proofs run as isolated services
- 💸 Instant royalties — authors are paid immediately after a purchase
- 🔁 Secondary resale support with built-in royalty logic

---


## ✨ About This Repo

This repo showcases just one part of the broader **PubliWrite** ecosystem — our licensing engine, designed for the **Solana Colosseum Hackathon (May 2025)**.

It highlights how rights can be tokenized, verified, and sold using Web3 tools — but it’s only a slice of what we’re building.  

If you're curious about the rest or want to connect, feel free to reach out:
- **info@publiwrite.com**

---

> Built with ❤️ by [PubliWrite](https://www.publiwrite.com)
