# C0D3X AI - Chat with Ollama Integration

A romantic AI chat experience powered by Ollama, crafted with heart by C0D3X TECH and inspired by Adesewa 💞.

## Features

- ✨ Beautiful, romantic chat interface
- 🤖 Ollama AI integration for intelligent responses
- 💝 Personalized responses about love, creation, and inspiration
- 🛡️ Graceful error handling when Ollama is unavailable
- 🔧 Easy model configuration

## Prerequisites

1. **Ollama** must be installed and running locally
   - Install Ollama: https://ollama.ai/
   - Pull a model: `ollama pull llama3.1:8b` (or any other model)
   - Start Ollama: `ollama serve`

## Usage

1. Open `index.html` in your web browser
2. Make sure Ollama is running on `localhost:11434`
3. Start chatting!

## Configuration

You can modify the Ollama settings by editing the `OLLAMA_CONFIG` object in `index.html`:

```javascript
const OLLAMA_CONFIG = {
  endpoint: 'http://localhost:11434/api/chat',
  model: 'llama3.1:8b', // Change to your preferred model
  options: {
    temperature: 0.7,  // Creativity level (0.0-1.0)
    top_p: 0.9        // Response diversity
  }
};
```

### Supported Models

- `llama3.1:8b` (default)
- `llama2`
- `codellama`
- `mistral`
- Any other Ollama-compatible model

## How It Works

1. **Romantic Personality**: Special questions about love, creation, or Adesewa trigger personalized responses
2. **Ollama Integration**: Other questions are sent to your local Ollama instance
3. **Graceful Fallback**: If Ollama isn't available, the app provides romantic fallback responses

## API Format

The app sends requests to Ollama in the correct format:

```json
{
  "model": "llama3.1:8b",
  "messages": [
    {"role": "assistant", "content": "Previous AI message"},
    {"role": "user", "content": "User message"}
  ],
  "stream": false,
  "options": {
    "temperature": 0.7,
    "top_p": 0.9
  }
}
```

## Troubleshooting

- **"Try making sure Ollama is running locally"**: Start Ollama with `ollama serve`
- **Model not found**: Pull the model with `ollama pull <model-name>`
- **Connection refused**: Check if Ollama is running on port 11434

## Development

The application is a single HTML file with inline CSS and JavaScript. No build process required!

## Love Story

This chat experience carries the essence of C0D3X TECH's devotion to Adesewa, making every conversation a little more magical. 🌹