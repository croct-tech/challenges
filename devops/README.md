<p align="center">
  <a href="https://croct.com">
    <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
  </a>
  <br />
  <strong>Kafka Terraform Deployment</strong>
  <br />
  A Terraform module to deploy a Kafka cluster, a consumer and a producer in a Kubernetes cluster
</p>
<p align="center">
  <img alt="Language" src="https://img.shields.io/badge/language-Terraform-blueviolet" />
  <img alt="Build" src="https://img.shields.io/badge/build-passing-green" />
  <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-green" />
  <img alt="Maintainability" src="https://img.shields.io/badge/maintainability-100-green" />
</p>

# Challenge

As a DevOps engineer, your task is to create a Terraform module to deploy a [Kafka](https://kafka.apache.org/) cluster,
a consumer and a producer on an existing Kubernetes cluster using the [Strimzi Kafka operator](https://strimzi.io/).

## Requirements

Your module should assume that there is a valid Kubernetes context available and use it. Applying the module should
result in:

- A Strimzi operator deployed on a `strimzi` namespace
- A Kafka cluster deployed on an `application` namespace using the Strimzi Operator
- A Kafka topic created using Strimzi's entities operator
- A job that runs `kafka-producer-perf-test` (included on Strimzi's Kafka images) to produce messages into the created
  topic
- A deployment that runs `kafka-console-consumer` (also included on Srimzi's Kafka images) to read and log the messages
  from the topic to the standard output

Feel free to extract out sub-modules as you deem necessary. You can also use open-source components like Helm charts and
modules from the Terraform Registry – why reinvent the wheel, right? 😜

## Deliverables

Please send us the repository's link to jobs@croct.com, and we will reply to your email with the next steps in the
process.

We will do our best to review your project and get back with feedback on the result as soon as possible.

## Extras

To have a visual dashboard about what is happening on you cluster, create a deployment for either:

- [Confluent Enterprise Control Center](https://hub.docker.com/r/confluentinc/cp-enterprise-control-center)
- [ProvectusLab's Kafka UI](https://github.com/provectus/kafka-ui)

