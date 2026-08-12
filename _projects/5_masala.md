---
layout: page
title: Masala
description: modern, modular, GPU-aware scientific software for design
importance: 5
category: past
related_publications: true
---

**Masala** is a free, open-source set of modular C++ libraries designed to extend or
replace Rosetta with an architecture built for current computing hardware.

It automates API layer creation, so it integrates cleanly with existing software and
lets developers add plugin modules that compile independently and load at runtime.

I engineered core components, including GPU-accelerated design algorithms and
efficient real-valued local and cost-function-network optimizers that act as drop-in
replacements for Rosetta components — reaching up to **100× speedups** on tasks like
hydrogen-bond network evaluation and buried polar atom checks.
