# AI & RAG Subsystem (`app/ai/`)

Isolated AI infrastructure containing document loaders, text splitters, embedding generators, vector store adapters, prompt templates, and LangChain/LangGraph workflow pipelines.

## Submodules
- `chunking/`: Text splitting strategies (Recursive, Semantic).
- `embeddings/`: Embedding provider wrappers (HuggingFace, Ollama, OpenAI).
- `llm/`: Large Language Model client adapters.
- `loaders/`: Document extraction parsers for PDF, DOCX, and Excel files.
- `memory/`: Conversational context window state management.
- `pipelines/`: Stateful LangGraph RAG workflows.
- `prompts/`: Versioned prompt templates and system instructions.
- `vectorstores/`: Pluggable VectorStore interface (FAISS, ChromaDB, PGVector).
