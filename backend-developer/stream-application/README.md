<p align="center">
    <a href="https://croct.com">
      <img src="https://cdn.croct.io/brand/logo/repo-icon-green.svg" alt="Croct" height="80"/>
    </a>
    <br />
    <strong>Location Detector</strong>
    <br />
    An application that detects the visitor's location based on the IP address.
</p>
<p align="center">
    <img alt="Build" src="https://img.shields.io/badge/build-passing-green" />
    <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-green" />
    <img alt="Maintainability" src="https://img.shields.io/badge/maintainability-100-green" />
</p>

# Challenge

As a backend developer, your task is to create a standalone application that translates IPs from a stream of events into another stream of geographical locations.

The input stream will be a sequence of messages with the following schema:

- **Client ID**  
  The ID of the client that emitted the event.
- **Timestamp**  
  The time in milliseconds since the UNIX epoch.
- **IP**  
  The IP address of the user.

For the output stream should be a sequence of messages with the following schema:

- **Client ID**  
  The ID of the client that emitted the event. Same as the message that was processed.
- **Timestamp**  
  The time in milliseconds since the UNIX epoch. Same as the message that was processed.
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

- It must be standalone, meaning you should not use frameworks like Spring, Serverless, or Functions Framework, for example.
- It should produce at most one location per client and IP within a time window of 30 minutes.
  - This 30 minutes should follow, the timestamp of the messages, not the real world time.
- The translation of IPs to geographical locations should be configurable and you should include at least two of the following implementations:
  - Reading from a local SQLite3 database (provided here as `IPs.sqlite`)
  - Reading from a local CSV (provided here as `IPs.csv`)
  - Calling an external API  
    You can chose any external API, if the API requires authentication it should also be configurable, here are some examples:
    - [IPStack](https://ipstack.com/)
    - [IPApi](https://ip-api.com/)
    - [IPGeolocation](https://ipgeolocation.io/)
- The input stream should be configurable, you should include at least two of the following implementations:
  - Reading from a newline-delimited JSON file (provided as `input.jsonl`)
  - Reading from a CSV file (provided as `input.csv`)
  - Reading from a UNIX or TCP socket for newline-delimited JSON
  - Reading from a Kafka Topic (the key is the client ID, the value is a JSON without the ID)
- The output stream should be configurable, you should include at least two of the following implementations:
  - Writing to a newline-delimited JSON file
  - Writing a newline-delimited JSON stream to the standard output (your logging in this case must only go to the standard error)
  - Writing to a CSV file
  - Writing to a Kafka Topic (the key should be the client ID and the value should be a JSON without the ID)

Your implementations should be properly tested.

You can also use open-source libraries available in the community to help you with the project. Why reinvent the wheel, right? 😜

## Deliverable

Please send us the repository's link to jobs@croct.com, and we will reply to your email with the next steps in the process.

We will do our best to review your project and get back with feedback on the result as soon as possible. 
