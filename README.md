# WebAlert snapshot service
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sysadm-webalert_webalert-snapshot&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=sysadm-webalert_webalert-snapshot)
## Overview
Microservice that allows snapshot a site.

## Features
- **Snapshot**: Get snapshot of a site sending as stream using Puppeteer

## Installation

### Prerequisites
- Node 20

### Building local
1. Install required packages
   ```bash
   npm install
   ```
2. Run service
   ```bash
   node snapshot-server.mjs
   ```
3. Use the service
   ```bash
   http://localhost:3000/snapshot?url=https://app.webalert.digital
   ```

### Building docker
1. Build the image
   ```bash
   docker compose build
   ```
2. Run the image
   ```bash
   docker compose up -d
   ```
3. Use the service
   ```bash
   http://localhost:3000/snapshot?url=https://app.webalert.digital

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support
For issues or feature requests, please open an issue in the [GitHub repository](https://github.com/sysadm-webalert/webalert-snapshot/issues).

---
**WebAlert Agent** © 2024
