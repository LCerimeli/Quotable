const {Client, Intents} = require('discord.js')
const fetch = require('node-fetch')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

require('events').EventEmitter.defaultMaxListeners = 25;

async function getRandomQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteBusiness() {
  const response = await fetch('https://api.quotable.io/random?tags=business')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteEducation() {
  const response = await fetch('https://api.quotable.io/random?tags=education')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteFaith() {
  const response = await fetch('https://api.quotable.io/random?tags=faith')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteFamousQuote() {
  const response = await fetch('https://api.quotable.io/random?tags=famous-quotes')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteFriendship() {
  const response = await fetch('https://api.quotable.io/random?tags=friendship')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteFuture() {
  const response = await fetch('https://api.quotable.io/random?tags=future')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteHappiness() {
  const response = await fetch('https://api.quotable.io/random?tags=happiness')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteHistory() {
  const response = await fetch('https://api.quotable.io/random?tags=history')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteInspirational() {
  const response = await fetch('https://api.quotable.io/random?tags=inspirational')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteLife() {
  const response = await fetch('https://api.quotable.io/random?tags=life')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteLiterature() {
  const response = await fetch('https://api.quotable.io/random?tags=literature')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteLove() {
  const response = await fetch('https://api.quotable.io/random?tags=love')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteNature() {
  const response = await fetch('https://api.quotable.io/random?tags=nature')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuotePolitics() {
  const response = await fetch('https://api.quotable.io/random?tags=politics')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteReligion() {
  const response = await fetch('https://api.quotable.io/random?tags=religion')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteScience() {
  const response = await fetch('https://api.quotable.io/random?tags=science')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteSuccess() {
  const response = await fetch('https://api.quotable.io/random?tags=success')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteTechnology() {
  const response = await fetch('https://api.quotable.io/random?tags=technology')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

async function getQuoteWisdom() {
  const response = await fetch('https://api.quotable.io/random?tags=wisdom')
  const data = await response.json()
  return (`${data.content} - ${data.author}`)
}

client.on('ready', () => {
  console.log(`logged in as ${client.user.tag}!`)
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote') {
    getRandomQuote().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote business') {
    getQuoteBusiness().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote education') {
    getQuoteEducation().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote faith') {
    getQuoteFaith().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote famous quote') {
    getQuoteFamousQuote().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote friendship') {
    getQuoteFriendship().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote future') {
    getQuoteFuture().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote happiness') {
    getQuoteHappiness().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote history') {
    getQuoteHistory().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote inspirational') {
    getQuoteInspirational().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote life') {
    getQuoteLife().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote literature') {
    getQuoteLiterature().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote love') {
    getQuoteLove().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote nature') {
    getQuoteNature().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote politics') {
    getQuotePolitics().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote religion') {
    getQuoteReligion().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote science') {
    getQuoteScience().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote success') {
    getQuoteSuccess().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote tech') {
    getQuoteTechnology().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote wisdom') {
    getQuoteWisdom().then(quote => msg.channel.send(quote))
  }
})

client.on('messageCreate', msg => {
  if (msg.author.bot) return

  if (msg.content === '!quote help') {
    msg.reply(
    `Commands:
!quote
!quote business
!quote education
!quote faith
!quote famous quote
!quote friendship
!quote future
!quote happiness
!quote history
!quote inspirational
!quote life
!quote literature
!quote love
!quote nature
!quote politics
!quote religion
!quote science
!quote success
!quote tech
!quote wisdom`
    )
  }
})

client.login(process.env['token'])