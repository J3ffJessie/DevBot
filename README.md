# Welcome to DevBot

## Dependencies

- Deepgram SDK
- discord.js
- dotenv

## What it is for

This Discord bot is for transcribing Discord voice calls using Deepgram's transcription service. The bot will send out a live transcription of the current Discord call so that users who may have a hearing disability, or those that do not do well with languages that are not their native language, they can have a transcription of the call to read through instead.

## How to set up

To utilize this bot you must have the following:

- Deepgram API Key which you can obtain from creating a Deepgram account [here](https://deepgram.com/)
- Discord Bot API Key which can be created [here](https://discord.com/developers/applications)
- Admin rights to the discord server you want to add the bot to.  This will allow you to bring the bot into the server.

You will place your Deepgram API Key and Discord Bot key inside a .env file in the root directory and name them whatever you want, just make sure to change the naming in the instantiation where the keys are called.