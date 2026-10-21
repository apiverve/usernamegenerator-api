# Username Generator API - Ruby Gem

Username Generator creates handle suggestions from a person's name or email address. It returns an array of suggested usernames based on the input, while paid plans can request multiple options at once.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_usernamegenerator'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_usernamegenerator
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_usernamegenerator'

# Initialize the client
client = APIVerve::Usernamegenerator::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  email: "sean@mail.com",
  count: 1
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ email: "sean@mail.com", count: 1 })
  puts response["data"]
rescue APIVerve::Usernamegenerator::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Usernamegenerator::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Usernamegenerator::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/usernamegenerator?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/usernamegenerator?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/usernamegenerator?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
