---
title: Digital Twin — 个人上下文系统
date: "2026-04"
summary: 把身份、记忆、知识库结构化存入一个仓库,让任何 AI 工具跨设备、跨会话理解"我是谁、在做什么"。iCloud + GitHub + heartbeat 机制。
tags: [AI-native, Knowledge System, Claude Code]
draft: false
---

一个持续运行中的个人基础设施项目:用一个结构化仓库承载身份背景(profile)、跨会话记忆(memory)、个人知识库(knowledge),让 Claude Code、Cursor 等任何 AI 工具在新会话开始时就知道"我是谁、在做什么、偏好如何"。

核心机制:

- **上下文分层**:静态身份 / 动态记忆 / 领域知识分离,AI 按需加载
- **跨设备同步**:iCloud(Obsidian 编辑)+ GitHub(版本追溯)双通道
- **heartbeat**:launchd 定时任务 + SessionStart hook,把每日状态注入 AI 上下文
- **决策留痕**:关键决策写入 decisions/,项目状态维护快照,对话丢了文件不丢

*完整案例整理中。*
