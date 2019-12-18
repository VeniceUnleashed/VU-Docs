---
title: DataCopSettings (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| DataCopSettings()                      | Create a new instance of this structure type.            |
| DataCopSettings(DataCopSettings other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                                           | Description |
| ------ | ---------------------------------------------- | ----------- |
| values | [DataCopValueSetting](DataCopValueSetting)\[\] |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [DataCopSettings](DataCopSettings) | [Clone](#clone) |            |

### Clone

> [DataCopSettings](DataCopSettings) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
