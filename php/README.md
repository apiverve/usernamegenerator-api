# Username Generator API - PHP Package

Username Generator creates handle suggestions from a person's name or email address. It returns an array of suggested usernames based on the input, while paid plans can request multiple options at once.

## Installation

Install via Composer:

```bash
composer require apiverve/usernamegenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Usernamegenerator\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'email' => 'sean@mail.com',
    'count' => 1
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Usernamegenerator\Client;
use APIVerve\Usernamegenerator\Exceptions\APIException;
use APIVerve\Usernamegenerator\Exceptions\ValidationException;

try {
    $response = $client->execute(['email' => 'sean@mail.com', 'count' => 1]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "count": 10,
    "suggestions": [
      "doxologysean",
      "sean",
      "downpoursean",
      "tonsilarsean",
      "interdependencysean",
      "seantrivant",
      "seansquireen",
      "seankillifish",
      "seantiltyard",
      "seaninterrupt"
    ],
    "email": "sean@mail.com"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/usernamegenerator?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/usernamegenerator?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/usernamegenerator?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
