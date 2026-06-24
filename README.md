# Combus

> Control any backend with a signed Solana transaction.

Combus is a programmable command bus that turns Solana transactions into backend instructions. By embedding JSON commands inside transaction memos, developers can trigger backend actions, automate workflows, and coordinate distributed systems using cryptographically signed transactions as the source of truth.

No wallet connection. No custom authentication flows. Just signed transactions and programmable execution.

---

## 🚀 Overview

Traditional applications rely on APIs, API keys, webhooks, and centralized authentication.

Combus introduces a different model:

```text
Signed Transaction
        +
    JSON Memo
        =
 Programmable Command
```

A user signs a Solana transaction containing structured JSON data. The backend listens for the transaction, parses the memo, validates the signer, and executes the requested action.

This approach leverages Solana's Memo Program, which allows structured data to be attached to transactions and verified through transaction signatures.

---

## ✨ Core Features

### 🚌 Programmable Command Bus

Send commands through signed Solana transactions.

### 📦 JSON-Based Instructions

Embed structured JSON payloads directly into transaction memos.

### 🔐 Signature Verification

Every command is cryptographically verified through wallet signatures.

### ⚡ Event-Driven Architecture

Trigger backend workflows automatically from blockchain events.

### 🌐 Universal Backend Integration

Connect APIs, databases, cloud functions, queues, and microservices.

### 🧩 No Wallet Connect Required

Transactions can be created and signed independently without maintaining traditional wallet sessions.

### 🔄 Stateless Authentication

Wallet signatures become the authorization layer.

### ☁️ Infrastructure Automation

Trigger deployments, jobs, and infrastructure workflows through on-chain commands.

---

## 🏗️ Architecture

```text
           User
             │
             ▼
     Signed Transaction
             │
             ▼
       Solana Network
             │
             ▼
       Memo Program
             │
             ▼
      Combus Listener
             │
             ▼
      JSON Interpreter
             │
     ┌───────┼────────┐
     ▼       ▼        ▼
 Database  API     Workers
```

---

## ⚙️ How It Works

1. Create a command payload.
2. Encode the command as JSON.
3. Attach JSON to a Solana memo.
4. Sign and submit transaction.
5. Combus detects transaction.
6. Verify transaction signer.
7. Parse JSON payload.
8. Execute backend action.
9. Return execution result.

The Solana Memo Program stores arbitrary text data inside transaction logs, allowing backends to read and interpret command payloads from confirmed transactions.

---

## 🎯 Use Cases

### Backend Automation

Trigger server-side workflows directly from transactions.

### API Execution

Call external APIs using signed commands.

### CI/CD Pipelines

Deploy applications from blockchain-triggered actions.

### Agent Coordination

Coordinate autonomous AI agents through on-chain messages.

### Access Control

Use wallet ownership as authentication.

### Infrastructure Management

Start jobs, queues, and serverless functions.

### Multi-Service Orchestration

Synchronize actions across multiple systems.

---

## 🛠 Example Command

```json
{
  "action": "deploy",
  "service": "frontend",
  "environment": "production"
}
```

Embedded inside:

```text
Memo:
{
  "action":"deploy",
  "service":"frontend",
  "environment":"production"
}
```

---

## 🔥 Why Combus?

* Wallet-native authorization
* No API keys
* No OAuth flows
* Event-driven execution
* Blockchain-verifiable commands
* Infrastructure automation
* Backend-agnostic design
* Solana-powered security

---

## 📦 Applications

```bash
✓ Backend Automation
✓ Agent Coordination
✓ Infrastructure Control
✓ CI/CD Pipelines
✓ API Triggers
✓ Database Operations
✓ Serverless Functions
✓ Workflow Automation
✓ Command Execution
✓ Webhook Replacement
```

---

## 🔒 Security

* Signature-based authorization
* Transaction verification
* Permission-based execution
* Immutable command history
* Audit-friendly architecture
* Cryptographic authentication

---

## 🌐 Links

Website: http://combus.io/

X: https://x.com/Combus_io

---

## 🗺️ Roadmap

* [x] Memo Command Engine
* [x] Signature Verification
* [x] Backend Connectors
* [x] JSON Command Parser
* [ ] Agent Framework
* [ ] Multi-Chain Support
* [ ] Enterprise SDK
* [ ] Workflow Designer
* [ ] Command Marketplace

---

## 📜 License

MIT License © 2026 Combus

---

## Vision

Combus is building the communication layer between blockchain identities and backend infrastructure.

By transforming signed transactions into executable commands, Combus enables a future where wallets don't just hold assets—they control applications, infrastructure, agents, and services.

**Sign Once. Send Command. Execute Anywhere.**
