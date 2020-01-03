---
title: StreamGridCell
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| StreamGridCell()                     | Create a new instance of this structure type.            |
| StreamGridCell(StreamGridCell other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                       | Description |
| ------------- | ------------------------------------------ | ----------- |
| referenceData | [ReferenceObjectData](ReferenceObjectData) |             |
| x             | number                                     |             |
| z             | number                                     |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [StreamGridCell](StreamGridCell) | [Clone](#clone) |            |

### Clone

> [StreamGridCell](StreamGridCell) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
