---
layout: page
title: sparse experimental data in structure prediction
description: PARCS, ROSIE-PARCS, and ion mobility mass spectrometry
importance: 4
category: past
related_publications: true
---

Ion-mobility mass spectrometry gives you a cheap, low-resolution measurement of a
protein's shape — its collision cross section. The question my PhD work answered is
whether that is enough to meaningfully improve structure prediction. It is.

**PARCS** computes collision cross sections from protein structures inside Rosetta,
matching the accuracy of existing tools while being substantially faster. The
**ROSIE-PARCS** webserver made it usable without installing anything.

Beyond speed, two results stand out: IM data consistently improves prediction accuracy
across most tested proteins, and an IM-based confidence score can distinguish accurate
from inaccurate models *without* a known native structure — including flagging bad
AlphaFold2 predictions.

More recent work extends this to protein *complexes*, using CCS-guided Rosetta docking
to improve RMSD for 68% of a 38-complex benchmark.
