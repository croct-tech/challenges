<p align="center">
    <a href="https://croct.com">
        <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>PHP Challenge</strong>
    <br />
    A Croct-powered landing page.
</p>
<p align="center">
    <img alt="Language" src="https://img.shields.io/badge/language-PHP-blue" />
    <img alt="Build" src="https://img.shields.io/badge/build-passing-green" />
    <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-green" />
    <img alt="Maintainability" src="https://img.shields.io/badge/maintainability-100-green" />
    <br />
    <br />
    <a href="https://github.com/croct-tech/challenges/releases">📦 Releases</a>
    ·
    <a href="https://github.com/croct-tech/challenges/issues">🐞 Report Bug</a>
    ·
    <a href="https://github.com/croct-tech/challenges/issues">✨ Request Feature</a>
</p>

## Introduction

This application is a landing page that renders a personalized content based on the user's persona using 
Croct's server-side personalization capabilities.

<p align="center">
    <img src="https://user-images.githubusercontent.com/943036/142742098-f133ee1e-bbd5-4661-bb4a-5cf432126765.png" alt="Screenshot" width="600"/>
</p>

## Installation

To run the application, clone the repository using the following command:

```sh
git clone https://github.com/croct-tech/challenges.git croct-challenges
```

Then, enter the created cloned directory:

```sh
cd croct-challenges/backend-developer/languages/php
```

Run the following command to install the service dependencies:

```sh
composer install
```

## Running the application

Before running the application, you need to set the following environment variable:

```sh
export CROCT_API_KEY=<your-api-key>
```

If you don't have an API key, you can use the sandbox API key:

```sh
export CROCT_API_KEY=11111111111111-1111-1111-1111-111111111111
```

All set up! Now, run the following command to run the application:

```sh
composer start
```

## Testing

Before running the test suites, the development dependencies must be installed:

```sh
composer install
```

Then, to run all tests:

```sh
composer test
```

## Copyright Notice

Copyright © 2015-2021 Croct Limited, All Rights Reserved.

All information contained herein is, and remains the property of Croct Limited. The intellectual, design and technical concepts contained herein are proprietary to Croct Limited s and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law. Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from Croct Limited.
