const { client: posthog, distinctId } = require('../posthog')

module.exports = async context => {
  // If no command passed in run switcher
  console.log('> Analytics CLI')
  posthog.capture({
    distinctId,
    event: 'cli_started',
    properties: {
      command: context && context.id,
    },
  })
  await posthog.shutdown()
}
