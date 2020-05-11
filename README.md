# DDS (Distributed Data Storage)

## Table of contents

- [Description](#description)
- [How it works](#how-it-works)
- [License](#license)

## Description

DDS is an application which will work directly with sia nodes to store the required data through out the network distributed between multiple nodes in Stoa: Data Exchange Platform within Prometeus ecosystem.

DDS will expose internal API for uploading and downloading, also it will allow to get information information about consumed storage space by each particular node.

## How it works

Upon starting, DDS performs the following steps:

- Initializing and starting Sia node
- Start mining node
- Starting listening as a rest http service

The workflow is the following:
- File upload requested including the term to store the file for
- DDS calculates and returns back the storage costs basing on file size and the term requested
- As soon as the payment done, DDS should be requested once more, notifying about the payment
- Once DDS received confirmation about successful payment, it stores the file into the Sia network

## License

Prometeus Network is licensed under the Apache software license (see LICENSE file). Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either \express or implied.

Prometeus Network makes no representation or guarantee that this software (including any third-party libraries) will perform as intended or will be free of errors, bugs or faulty code. The software may fail which could completely or partially limit functionality or compromise computer systems. If you use or implement it, you do so at your own risk. In no event will Prometeus Network be liable to any party for any damages whatsoever, even if it had been advised of the possibility of damage.

As such this codebase should be treated as experimental and does not contain all currently developed features. Prometeus Network will be delivering regular updates.
