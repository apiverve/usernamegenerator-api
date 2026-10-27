Pod::Spec.new do |s|
  s.name             = 'APIVerveUsernameGenerator'
  s.version          = '1.2.3'
  s.summary          = 'Username Generator creates handle suggestions from a person\'s name or email address.'
  s.description      = <<-'DESC'
Username Generator creates handle suggestions from a person's name or email address. It returns an array of suggested usernames based on the input, while paid plans can request multiple options at once.

This iOS/macOS SDK provides a convenient way to access the Username Generator from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/usernamegenerator?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/usernamegenerator-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveUsernameGenerator/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
