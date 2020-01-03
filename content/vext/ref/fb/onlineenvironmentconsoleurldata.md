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
| platform | [GamePlatform](/vext/ref/fb/gameplatform/)                 |             |
| url      | [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl/) |             |

## Methods

| Type                                                               | Name            | Parameters |
| ------------------------------------------------------------------ | --------------- | ---------- |
| [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata/) | [Clone](#clone) |            |

### Clone

> [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
