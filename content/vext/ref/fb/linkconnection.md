---
title: LinkConnection
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                          | Description                                              |
| ------------------------------------ | -------------------------------------------------------- |
| LinkConnection()                     | Create a new instance of this structure type.            |
| LinkConnection(LinkConnection other) | Create a reference copy of a structure of the same type. |

## Properties

| Name          | Type                                                | Description |
| ------------- | --------------------------------------------------- | ----------- |
| source        | [DataContainer](/vext/ref/shared/class/DataContainer) |             |
| target        | [DataContainer](/vext/ref/shared/class/DataContainer) |             |
| sourceFieldId | number                                              |             |
| targetFieldId | number                                              |             |

## Methods

| Type                             | Name            | Parameters |
| -------------------------------- | --------------- | ---------- |
| [LinkConnection](LinkConnection) | [Clone](#clone) |            |

### Clone

> [LinkConnection](LinkConnection) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
