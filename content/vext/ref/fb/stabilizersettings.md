---
title: StabilizerSettings
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| StabilizerSettings()                         | Create a new instance of this structure type.            |
| StabilizerSettings(StabilizerSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name     | Type                                     | Description |
| -------- | ---------------------------------------- | ----------- |
| property | [StabilizerProperty](StabilizerProperty) |             |
| strength | number                                   |             |
| advanced | bool                                     |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [StabilizerSettings](StabilizerSettings) | [Clone](#clone) |            |

### Clone

> [StabilizerSettings](StabilizerSettings) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
