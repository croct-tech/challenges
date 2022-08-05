<p align="center">
    <a href="https://croct.com">
      <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Location Detector</strong>
    <br />
    A Kafka Streams application that detects the visitor's location based on the IP address.
</p>
<p align="center">
    <img alt="Build" src="https://img.shields.io/badge/build-passing-green" />
    <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-green" />
    <img alt="Maintainability" src="https://img.shields.io/badge/maintainability-100-green" />
</p>

# Challenge

As a backend developer, your task is to create a standalone [Kafka stream](https://kafka.apache.org/documentation/streams/) 
application that translates IPs into geographical locations using the [IPStack](https://ipstack.com/) free API.

<p align="center">
  <img alt="Topology" src="https://user-images.githubusercontent.com/943036/148793496-5f73bd8f-f515-4e28-8fa6-9fbc88aa0ca4.png" />
</p>

The schema of the input topic is as follows:
- **Client ID**  
  The ID of the client that emitted the event.
- **Timestamp**  
  The time in milliseconds since the UNIX epoch.
- **IP**  
  The IP address of the user.

For the output topic, the schema should be:

- **Client ID**  
  The ID of the client that emitted the event.
- **Timestamp**  
  The time in milliseconds since the UNIX epoch.
- **IP**  
  The IP address of the user.
- **Latitude**  
  The latitude coordinate of the user.
- **Longitude**  
  The longitude coordinate of the user.
- **Country**  
  The country of the user. For example, United States.
- **Region**  
  The region of the user. For example, California.
- **City**  
  The city of the user. For example, San Francisco.

# Requirements

The application should meet the following requirements:

- It must be standalone, meaning you should not use frameworks like Spring, for example
- It should produce at most one localization per client and IP within a time window of 30 minutes
- Unit and integration tests covering all the requirements.

You can also use open-source libraries available in the community to help you with the project. Why reinvent the wheel, right? 😜

## Deliverable

Please send us the repository's link to jobs@croct.com, and we will reply to your email with the next steps in the process.

We will do our best to review your project and get back with feedback on the result as soon as possible. 
