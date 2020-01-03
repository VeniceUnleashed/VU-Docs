---
title: DataCopSettings
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
| values | [DataCopValueSetting](/vext/ref/fb/datacopvaluesetting/)\[\] |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [DataCopSettings](/vext/ref/fb/datacopsettings/) | [Clone](#clone) |            |

### Clone

> [DataCopSettings](/vext/ref/fb/datacopsettings/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
