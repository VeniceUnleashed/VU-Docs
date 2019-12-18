---
title: NormalizeSettings (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| NormalizeSettings()                        | Create a new instance of this structure type.            |
| NormalizeSettings(NormalizeSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| maximum   | number |             |
| minimum   | number |             |
| velocity  | number |             |
| lower     | number |             |
| upper     | number |             |
| normalize | bool   |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [NormalizeSettings](NormalizeSettings) | [Clone](#clone) |            |

### Clone

> [NormalizeSettings](NormalizeSettings) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
