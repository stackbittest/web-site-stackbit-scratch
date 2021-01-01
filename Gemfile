# Whoops, trying to build Jekyll in the cloud and forgot a Gemfile.
# Stealing some code from Forestry.
# Stop doing "jekyll serve" and start doing "bundle exec jekyll serve" now.
# And if that doesn't work, run "bundle install" first to create a Gemfile.lock
# or "bundle update" to update the Gemfile.lock

source "https://rubygems.org"

gem "jekyll"#, ">= 4.2.0"
#gem "jekyll"#, ">= 4.2.0" # Contentful doesn't like Jekyll 4
#gem "contentful_bootstrap"

#group :jekyll_plugins do
#    gem "jekyll-contentful-data-import"
#end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
