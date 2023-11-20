<details>
  <summary><strong>1. Product Syncing Queue Consumer</strong></summary>

  The ProductSyncupQueue service is designed to operate within Dukkantek's shop. Its primary responsibility is to synchronize all products, images, and shops that have been created on Azure specifically for that shop. This service plays a crucial role in creating precise replicas of the products and images listed on the Azure cluster for the shop, transferring them seamlessly to the local machine where the service is actively running.

For running productSyncupQueue Consumer (Run it on shop)
```sh
$ yarn run productSyncupQueueConsumer
```
</details>
