---
title: 'What is a "harness"?'
date: "2026-10-22"
description: "Everything you'd ever need to know about what a harness is and how they work."
imageURL: "https://t3.gg/images/what-is-a-harness/cover.jpg"
readMore: true
---

![Interface vs harness](/images/what-is-a-harness/cover.jpg)

I'm going to be honest here: I'm writing this because I'm tired of having to explain it, and it seems like there's no single "resource" that properly explains what a harness actually is.

By the end of this article, you should know everything you'd ever need to know about what a harness is and how they work.

## Humans use interfaces

Generally speaking, humans don't use computers by writing code. They use an interface of some form, be it a terminal, a website, or an app.

Theoretically speaking, a human could just write unique python or js code for every task they want to complete. Instead of making them do that, we give them access to that code via buttons, hotkeys, commands, etc.

Examples of interfaces: Chrome, Claude Code, ChatGPT App (prev. Codex)

It is also worth noting that humans don't see the code underneath...usually. The human only sees the interface.

## LLMs use harnesses

By default, all an LLM can do is generate text. In order for a language model to do anything more, it needs tools. Most llms are now trained to work with tools like "read_file" (for accessing files on your computer), "edit_file" (for changing those files), "bash" (for running commands), and "search" (for finding data online).

The LLM still just sends text though! It can't click a button like a human. As such, we need a custom text format for the LLM to use that indicates "you should run some code". Let's say we give the LLM a format for calling tools, such as:

```html
<read_file name="README.md">
```

Now the LLM knows it can respond in this format. But it's still just text, it doesn't do anything! Would be like typing on a keyboard or moving a mouse while the computer is off.

Something has to interpret these responses, and then run the right code based on what the LLM responded with.

In order for an LLM to actually do stuff, it needs:

- Tools that can do things (read_file, edit_file, bash, search etc)
- A special syntax for calling those tools via text
- A system that parses the message to identify that syntax and run the code
- A method to give the response from the tool back to the LLM
- A list of tools available w/ descriptions of how to use them

That is the harness.

## "Isn't Claude Code a harness?"

Kind of.

Claude Code has 2 parts: **the interface** and **the harness**

When you run "claude" in your terminal, the Claude TUI opens. When you go to the "code" tab in the Claude desktop app, the Claude Code GUI opens. Neither of these are harnesses.

Under the hood, Claude Code uses the Anthropic Agent SDK to interface with the agent. ChatGPT does the same, with the ChatGPT/Codex app interfacing with the Codex App Server (built into the CLI).

![Humans see interfaces, LLMs see harnesses](/images/what-is-a-harness/interfaces-and-harnesses.png)

I understand why people are confused: **Claude Code and Codex both bake the harness into their apps.**

You can bake the same harness into other apps though! Some examples of this:

- The Cursor harness is used by Grok Bot
- The Anthropic Agents SDK and Codex App Server are used by T3 Code
- Pi is used by OpenClaw

The harness is a separate piece, rarely if ever exposed to the humans using the apps.

## Who owns the tools?

Let's imagine a harness as a kitchen.

Kitchens have lots of different tools. Pots, pans, knives, spatulas, blenders and more.

No kitchen has everything that every chef needs.

Good harnesses are built with this assumption, allowing users to bring their own tools.

To be clear: **most of the important tools are provided directly by a harness.** Codex and Claude Code both include a lot of tools, while other harnesses like Pi are much more minimal.

This is where things start to get messy, so let me draw another diagram.

![The tool plane sits above the human and LLM layer](/images/what-is-a-harness/tool-plane.png)

The orange box is meant to be "things included by Claude Code" (agents sdk to be clear).

There are lots of custom tools you can add, such as the TypeScript plugin to give your LLM some tools to check your code, or the CUA plugin to allow agents to control your computer.

Note the line between the "tool plane" and the human/llm layer. Neither the human nor the LLM can see or touch the tools. We have no way of knowing if they exist. The harness is what exposes them, both to the LLM and to the interface (which is how we see them)

## MCP makes things a bit messier

MCP (Model Context Protocol) is a standard to make it easier to let harnesses access external stuff. To put it simply: tools are "run code here to do a thing", MCPs are "make an API request somewhere else to do a thing".

Tools provide the code directly. MCPs let the code live somewhere else, but the LLM can still make requests to do things using the MCP.

The most common usecase for MCPs is to expose data to your LLMs. Want ChatGPT to look through your emails? MCP. Want Claude to go through the analytics for your site? MCP.

Chrome Extensions are kind of like tools. They can change how a website works, and they do that by running code on your computer in Chrome.

MCPs are more like websites. You don't have to install anything, you just need to know the URL. Once you have that, you (should) get all the info you need to use it :)

Pulled all together, it looks something like this:

![Tool plane, human and LLM layer, and data plane](/images/what-is-a-harness/tool-and-data-planes.png)

...wait, what is T3 Code doing there? Let me explain.

![T3 Code MCP](/images/what-is-a-harness/t3-code-mcp.png)

T3 Code exposes custom functionality to LLMs, to do things that the harnesses don't. For example, we allow threads using Claude Code to spawn subagents in Codex. Other tools do this too, see Herdr, Orca, and Superset for some examples.

So why is this exposed as an MCP? Is this just some cheap trick to get out of making our own harness?

Recall this quote from earlier:

> Tools provide the code directly. MCPs let the code live somewhere else, but the LLM can still make requests to do things using the MCP.

T3 Code has a lot of code to enable cool functionality such as multi-harness subagents. Technically speaking, we could have rebuilt all of T3 Code's coolest features as a set of plugins for Claude Code, Codex, Antigravity, Pi, Cursor, Muse...

Or we could keep all the code in T3 Code itself, and expose a simple MCP server for the LLMs to use instead :)

To go back to the kitchen example, MCPs are almost like recipes. They're a method to do a thing, but they aren't the thing itself.

T3 Code is providing a cookbook to the kitchen. It doesn't change how the kitchen operates at all. If the chefs decide they want to look at our cook book, awesome! They can also ignore it entirely, changing nothing.

## ...so what is an agent?

Do you know how proud I am that I got this far without saying "agent" over and over without defining it? That was not easy lol.

tl;dr - An agent is what happens when you combine a harness and an LLM.

LLMs just generate text, they don't do anything. Harnesses are just kitchens, they can't cook anything. The combo of the LLM and the harness creates an "agent".

Different "agents" are often simply different harness configurations, such as custom tools, instructions, MCP servers, etc.

## Is T3 Code a harness?

No. T3 Code doesn't work if you don't bring a harness.

To go back to the kitchen example:

- Chef = LLM
- Kitchen = harness
- T3 Code = restaurant

T3 Code is a restaurant that lets you bring whatever kitchen you want. We have our own recipes we like, and we provide that cookbook to each kitchen, but the chef won't open it unless you tell them to :)

## For those who want to go deeper...

If you like these types of top to bottom explanations, tell your boss to pay for the [Mega.dev](https://soydev.link/mega) course I'm putting out next week. I go way more in depth on all this there :)

Also check out [T3 Code](https://t3.codes/). It's [open source](https://github.com/pingdotgg/t3code), so you can ask your agent to explain how it works to go way deeper

---

_Originally posted [on X](https://x.com/theo/status/2113424203345265053)._
