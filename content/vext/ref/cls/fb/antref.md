---
title: AntRef (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor          | Description                                              |
| -------------------- | -------------------------------------------------------- |
| AntRef()             | Create a new instance of this structure type.            |
| AntRef(AntRef other) | Create a reference copy of a structure of the same type. |

## Properties

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| assetId | number |             |

## Methods

| Type             | Name            | Parameters |
| ---------------- | --------------- | ---------- |
| [AntRef](AntRef) | [Clone](#clone) |            |

### Clone

> [AntRef](AntRef) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
