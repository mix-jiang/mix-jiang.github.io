---
title: Investing Assistant — 多信源投资研究系统
date: "2026-06"
summary: 分层研究系统:x-watch 做 X 信源采集,Signal 需多信源交叉验证才升级为 Action;含 Nasdaq-100 QDII 定投监控子系统。
tags: [AI Agent, Investing, Automation]
draft: false
---

一套用 AI Agent 搭建的个人投资研究基础设施,核心设计原则是**分层与验证**:

- **信源层**:x-watch 只负责 X(Twitter)信源采集,不做判断
- **Signal 层**:单一信源只能产生 Signal,不构成任何投资结论
- **Action 层**:投资动作必须经过多信源交叉验证才能升级
- **执行层**:Nasdaq-100 QDII 定投监控,每个交易日评估、但不自动交易

这个结构把"信息收集"和"投资判断"强制分离,避免 AI 幻觉或单一信源偏见直接传导为交易行为。

*完整案例整理中。*
