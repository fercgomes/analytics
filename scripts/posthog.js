const { PostHog } = require('posthog-node')
const os = require('os')
const fs = require('fs')
const path = require('path')

// Load .env from project root if present
const envPath = path.join(__dirname, '../.env')
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n')
  for (const line of lines) {
    const match = line.match(/^([^#=]+)=(.*)$/)
    if (match) {
      const key = match[1].trim()
      const value = match[2].trim().replace(/^['"]|['"]$/g, '')
      if (!process.env[key]) process.env[key] = value
    }
  }
}

const client = new PostHog(process.env.POSTHOG_API_KEY || '', {
  host: process.env.POSTHOG_HOST || 'https://us.i.posthog.com',
  flushAt: 1,
  flushInterval: 0,
  enableExceptionAutocapture: true,
})

// Use the machine hostname as a stable distinct ID for CLI/script events
const distinctId = os.hostname()

module.exports = { client, distinctId }
