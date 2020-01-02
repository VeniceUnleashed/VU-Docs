---
title: SoundScopeStrategyMapping
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                | Description                                              |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| SoundScopeStrategyMapping()                                | Create a new instance of this structure type.            |
| SoundScopeStrategyMapping(SoundScopeStrategyMapping other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                             | Description |
| -------- | ------------------------------------------------ | ----------- |
| scope    | [SoundScopeData](SoundScopeData)                 |             |
| strategy | [SoundScopeStrategyData](SoundScopeStrategyData) |             |

## Methods

| Type                                                   | Name            | Parameters |
| ------------------------------------------------------ | --------------- | ---------- |
| [SoundScopeStrategyMapping](SoundScopeStrategyMapping) | [Clone](#clone) |            |

### Clone

> [SoundScopeStrategyMapping](SoundScopeStrategyMapping) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
