/**
 * 
 * 
 * 
 * 🧠 LLD Problem 1 — Rate Limiter Library

You are designing a Rate Limiting SDK to be used inside backend services.

Think of it like:

const limiter = new RateLimiter(config);

limiter.allow("user123"); // true / false

No network. No APIs. Pure in-process library.

✅ Functional Requirements

The library should support limiting requests by a key
(examples: userId, IP, API key, tenantId)

Expose a method:

allow(key: string): boolean

Returns:

true → request allowed

false → blocked due to limit exceeded

Support at least:

• X requests per Y time window
Example:

5 requests per 10 seconds

100 requests per minute

Time should move forward naturally (no manual clock control)

🔌 Extensibility Expectations (IMPORTANT)

Your design should allow:

✅ Plugging different algorithms later without rewriting core logic:

Examples (don’t implement all now, just design for it):

Fixed Window

Sliding Window

Token Bucket

Leaky Bucket

✅ Configurable per limiter instance:

new RateLimiter({
  algorithm: "...",
  maxRequests: 10,
  windowMs: 1000
})
🚫 Out of Scope (DO NOT handle)

❌ Distributed systems
❌ Redis / DB / persistence
❌ Thread safety
❌ Async handling
❌ Metrics & logging

This is a single-process in-memory library

📦 What I Expect From You

Design it like a real SDK:

1. Folder / class structure

Example (just illustrative):

rate-limiter/
  RateLimiter.ts
  algorithms/
  storage/
2. Actual code (TypeScript or JS — your choice)
3. Explain:

Why you structured it that way

Where extensibility lives

How new algorithms would plug in

⏸️ Now YOU design.

Send:

• Structure
• Code
• Brief explanation

I will review like an interviewer:

bad abstractions called out

SRP violations flagged

overengineering punished

brittle design exposed

When you’re ready — drop your first attempt.
 * 
 * 
 */