---
title: DataField
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| DataField()                | Create a new instance of this structure type.            |
| DataField(DataField other) | Create a reference copy of a structure of the same type. |

## Properties

| Name       | Type                                                | Description |
| ---------- | --------------------------------------------------- | ----------- |
| value      | string                                              |             |
| valueRef   | [DataContainer](/vext/ref/shared/class/datacontainer) |             |
| id         | number                                              |             |
| accessType | [FieldAccessType](/vext/ref/fb/fieldaccesstype/)                  |             |

## Methods

| Type                   | Name            | Parameters |
| ---------------------- | --------------- | ---------- |
| [DataField](/vext/ref/fb/datafield/) | [Clone](#clone) |            |

### Clone

> [DataField](/vext/ref/fb/datafield/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
