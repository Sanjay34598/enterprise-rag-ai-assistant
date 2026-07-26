#!/usr/bin/env bash
# Local Environment Setup Automation Script (Placeholder)

echo "Initializing Enterprise RAG local environment..."
if [ ! -f backend/.env ]; then
  cp backend/.env.example backend/.env
  echo "Created backend/.env from template."
fi

echo "Environment setup complete."
