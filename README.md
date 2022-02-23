# Fake Umbrella API

## Description

API created for the the Fake Umbrella challenge, using Nestjs as the backend framework. The API provides endpoints for customer management (create, update, delete) and forecast report (rain status for the next 5 days).

## Requirements

The API uses OpenWeather as weather forecast provider, which require an API key. Please insert your OpenWeather API key in the .env file (according to the .env.example).

If you don't have one, sign-up for free in the following [website](https://home.openweathermap.org/users/sign_up).

## Installation

```bash
$ npm install
```

## Running the server

```bash
$ npm start
```

## Testing the functionality

An initial customer load is performed when the app is started, making four examples available.

The server is configured to listen requests at port 3000 (http://localhost:3000).

**Get all customers:**

```code
GET /customers
```

**Create new customer:**

```code
POST /customers
```

Request body:

```json
{
  "name": "XYZ Steak House",
  "contact": "Morgan Rath",
  "phone": "+1 (523) 678-764",
  "employeeCount": 78,
  "location": {
    "country": "CA",
    "city": "Toronto",
    "state": "ON"
  }
}
```

**Update customer attribute(s):**

```code
PATCH /customers/customer-id
```

Request body:

```json
{
  "employeeCount": 55
}
```

**Delete customer**

```code
DELETE /customers/customer-id
```

**Generate report data**

Reveals the four customers with the highest employee count, along with the rain forecast for the next 5 days.

```code
GET /report
```

## Running with Docker

A Dockerfile is present in the project folder to containerize the service.

**Creating the Docker image:**

```code
docker build -t fake-umbrella-api .
```

**Running the container**

```code
docker run -d -p 3000:3000  fake-umbrella-api
```

## Front End

The front end portion of the challenge is an Angular application found in the following repository:

https://github.com/gabriel-a-rocha/fake-umbrella-web

## Stay in touch

- Author - Gabriel A. Rocha
- LinkedIn - [LinkedIn Profile](https://www.linkedin.com/in/gabrielaltairrocha/)
