# Product Indexing API (Dukkantek)

[![Build Status](https://circleci.com/docs/assets/img/docs/shield-passing.png)](https://devops/makethis/beautiful)

Product Indexing API provides all the related APIs to create shop, create products for shop and has api for uploading image to products
with others features as well.

## Table of contents

- Requirements
- Configuration
- Installation
- Services
- Testing

## Requirements

This module requires the following :

- [Node.js](https://nodejs.org/en) v16
- [MongoDb](https://www.mongodb.com/)
- [RabbitMQ](https://www.rabbitmq.com/)

## Configuration
Create a new .env file in the root directory of project,copy all the environment variables from the .env.sample file into .env file and add the values for your project.

**For production environments...**
Set `NODE_ENV` to production in process environment(.env file)

```sh
$ NODE_ENV=production
```

**For development environments...**
Set `NODE_ENV` to local in process environment

```sh
$ NODE_ENV=local
```

## Installation

Install the dependencies and devDependencies and start the server.

```sh
$ yarn install
$ yarn start
```

_Note: product indexing api needs rabbitmq and mongodb configuration inorder to process the client requests_

## Services

<details>
  <summary><strong>Product Syncing Queue Consumer</strong></summary>

  The ProductSyncupQueue service is designed to operate within Dukkantek's shop. Its primary responsibility is to synchronize all products, images, and shops that have been created on Azure specifically for that shop. This service plays a crucial role in creating precise replicas of the products and images listed on the Azure cluster for the shop, transferring them seamlessly to the local machine where the service is actively running.

For running productSyncupQueue Consumer (Run it on shop)
```sh
$ yarn run productSyncupQueueConsumer
```
</details>


<details>
  <summary><strong>Shop Syncing Queue Consumer</strong></summary>

The ShopSyncupQueue service operates within the Azure main cluster, focusing on facilitating the comprehensive synchronization of all products and images specifically created for a particular shop. This versatile service is equipped to handle both syncup and deletion job types. When tasked with a synchronization job, the service identifies all products and images associated with the designated shop. It then iterates through each item, submitting them one by one to the ProductSyncupQueue. Subsequently, the ProductSyncupQueue service takes charge of synchronizing each item to the machine designated for the respective shop.

For running shopSyncupQueueConsumer Consumer (Run it on Azure)
```sh
$ yarn run shopSyncupQueueConsumer
```
</details>

<details>
  <summary><strong>Indexing Meta Update Consumer</strong></summary>

The Indexing Meta Update service is deployed within the Dukkantek shop and plays a pivotal role in updating the status of image indexing (imageIndexingStatus) and product indexing (productIndexingStatus) once the indexing process concludes. This service ensures that the status is not only updated in the local machine database of the shop, specifically adjusting the imageProcessedCount for each syncup or indexing job, but it also communicates with the Job Syncup Queue service. This communication involves pushing messages to the Job Syncup Queue, instructing it to update the status on the Azure main cluster, thereby maintaining consistency across both local and distributed systems.

For running indexingImageMetaUpdate Consumer (Run it on shop)
```sh
$ yarn run indexingImageMetaUpdateConsumer
```
</details>


<details>
  <summary><strong>Job Meta Sync Service</strong></summary>

The JobMetaSyncQueue operates within the Azure main cluster, specifically in the primary Dukkantek environment. Its core responsibility lies in updating crucial job status indicators, including imageProcessedCount, productSyncCount, and imageSyncCount, to ensure synchronization between Dukkantek's local shop and the main Azure shop. This service acts as a bridge for maintaining accurate and up-to-date job-related information, facilitating seamless communication and coordination between the local and central environments.

For running jobMetaSync Queue Consumer (Run it on shop)
```sh
$ yarn run jobMetaSyncQueueConsumer
```
</details>


# Testing

- `yarn test:unit` to run unit tests
- `yarn test:integration` to run integration tests

You can also:

- `yarn start` to start the Product Indexing api
- `yarn watch` to start the Product Indexing api in development mode with live reload


