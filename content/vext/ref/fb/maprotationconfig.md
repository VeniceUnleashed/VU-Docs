---
title: MapRotationConfig
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| MapRotationConfig()                        | Create a new instance of this structure type.            |
| MapRotationConfig(MapRotationConfig other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| mapRotationId        | number |             |
| nameSid              | string |             |
| descSid              | string |             |
| mod                  | string |             |
| gameMode             | string |             |
| randomizeStartingMap | bool   |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [MapRotationConfig](/vext/ref/fb/maprotationconfig/) | [Clone](#clone) |            |

### Clone

> [MapRotationConfig](/vext/ref/fb/maprotationconfig/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
