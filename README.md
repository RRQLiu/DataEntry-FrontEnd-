# Warehouse Automation 

## Project Description

The warehouse automation is designed for a scenario of a small family business and the management of their warehouse. The warehouse automation project needs to meet following requirements: 

1. To save cost and considered the size of data, they want to use a serverless database
    > Azure CosmoDB 
2. Perform basic operations on databse : post, remove, update, get 
    > Docker containerize api and Azure app service deploy
3. Swagger Expanation for api
4. Front-end page that connect all functionality for them to use 
    > React(TypeScript) + Express
5. In addition, the warehouse should be able to accept picture of products! 
    > OCR api to process the image 
    > Immediate **Queue messaging** to avoid waiting while OCR occuring
6. CI/CD automation of deployment
    > Git action



## DataFlow of the Warehouse

![data](/images/dataflow.png)
