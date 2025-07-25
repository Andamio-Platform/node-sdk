# Andamio Platform Node SDK

<img src="docs/public/images/general/sdk.jpeg" alt="Andamio SDK" style="width: 30%; height: auto;">

[![npm version](https://badge.fury.io/js/@andamiojs%2Fsdk.svg)](https://badge.fury.io/js/@andamiojs%2Fsdk)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

The official Node.js SDK for the Andamio Protocol - empowering organizations to teach skills and distribute contribution opportunities through blockchain-based education and collaboration tools.

## 🚀 Quick Start

### Installation

```bash
npm install @andamiojs/sdk
```

```bash
yarn add @andamiojs/sdk
```

```bash
pnpm add @andamiojs/sdk
```

### Basic Usage

```typescript
import { AndamioSDK } from '@andamiojs/sdk';

// Initialize the SDK
const andamio = new AndamioSDK(
  baseUrl,
  "Preprod" // or "Mainnet"
);

// Check alias availability
const data = await sdk.provider.overview.checkAliasAvailability('my-alias')

// Get User Information
const userInfo = await sdk.provider.overview.getUserData('my-alias')


```

## 📚 Features

### ✅ Implemented Features

- **Alias Management**
  - ✅ Alias availability checking
  
- **Contributor Management**
  - ✅ Contributor State UTXO retrieval by alias
  - ✅ Escrow UTXO management by alias
  
- **Course & Assignment Management**
  - ✅ Assignment UTXO retrieval by alias
  - ✅ Course UTXO retrieval by alias
  - ✅ Module Reference UTXO by module token name
  
- **Access Control**
  - ✅ User Access Token UTXO by alias
  - ✅ Address holding access token by alias
  
- **Governance & Validation**
  - ✅ Governance Validator UTXO by Course ID or Project ID

- **Transaction Support**
  - ✅ Commit to Assignment (Student)
  - ✅ Mint Course Module (Course Creator)
  - ✅ Accept Assignment (Course Creator)

### 🚧 Coming Soon

- **Policy Management**
  - [ ] All Contributor Policies
  - [ ] Contributor Policy by Project ID
  
- **Treasury Management**
  - [ ] Treasury Fund UTXOs
  - [ ] Treasury Projects UTXOs
  - [ ] Treasury Projects UTXO by project hash
  - [ ] Treasury Projects UTXO by escrow hash
  
- **Data Parsers**
  - [ ] Global State UTXO Datum Parser
  - [ ] Escrow UTXO Datum Parser
  - [ ] Assignment UTXO Datum Parser
  - [ ] Course UTXO Datum Parser
  - [ ] Module Ref UTXO Datum Parser
  
- **Transaction Support**
  - [ ] Mesh U5C Evaluator support

## 🔧 Configuration

### SDK Configuration Options

```typescript
interface AndamioSDKProps {
  baseUrl: string; // UTxORPC URL + Port
  network: 'Mainnet' | 'Preprod';
  dmtr_api_key?: string; // If you are using demeter
}

const andamio = new AndamioSDK(
  "https://preprod.utxorpc-v0.demeter.run:443",
  "Preprod",
  "dmtr_utxorpc...."
);
```


## 📝 License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [sdk.andamio.io](https://sdk.andamio.io)
- **GitHub Issues**: [Report bugs or request features](https://github.com/Andamio-Platform/node-sdk/issues)
- **Community Discord**: [Join our community](https://discord.gg/tR6M3XGn)
- **Email**: support@andamio.io

## 🔗 Related Projects

- [Andamio Web App](https://www.andamio.io) - Web interface for the Andamio Platform Reference Implementation
- [Andamio Documentation](https://docs.andamio.io) - Comprehensive protocol documentation



---

<div align="center">
  <strong>Learn skills · Contribute value · Cultivate community</strong>
</div>