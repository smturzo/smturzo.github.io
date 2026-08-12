---
layout: page
title: AgentRosetta
description: an LLM agent that drives Rosetta for protein design
importance: 3
category: current
related_publications: true
---

Rosetta is powerful and notoriously hard to drive. **AgentRosetta** is an autonomous
LLM agent wired into the Rosetta modeling suite: it translates natural-language
design objectives into RosettaScripts, runs them, and refines designs using
physics-based scoring.

It handles iterative protein and heteropolymer design, including non-canonical amino
acids and custom geometries. Benchmarked against ML models and human experts, it
reached comparable performance on both canonical and non-canonical tasks.

The finding that mattered most: **environment design is the bottleneck.** Reliable
LLM control of complex scientific software depends far more on how you structure the
agent-environment interface than on the model itself.
