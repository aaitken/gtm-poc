# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
  env: 'development'
  #env: 'production'
  
	environments:
    production:
      ignoreCustomPatterns: /\.sass/
}

# Export the DocPad Configuration
module.exports = docpadConfig
