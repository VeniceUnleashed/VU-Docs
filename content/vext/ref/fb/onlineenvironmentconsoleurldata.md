---
title: OnlineEnvironmentConsoleUrlData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                            | Description                                              |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| OnlineEnvironmentConsoleUrlData()                                      | Create a new instance of this structure type.            |
| OnlineEnvironmentConsoleUrlData(OnlineEnvironmentConsoleUrlData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                         | Description |
| -------- | -------------------------------------------- | ----------- |
| platform | [GamePlatform](GamePlatform)                 |             |
| url      | [OnlineEnvironmentUrl](OnlineEnvironmentUrl) |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [OnlineEnvironmentConsoleUrlData](OnlineEnvironmentConsoleUrlData) | [Clone](#clone) |            |

### Clone

> [OnlineEnvironmentConsoleUrlData](OnlineEnvironmentConsoleUrlData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
