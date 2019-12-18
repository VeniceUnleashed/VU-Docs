---
title: LodBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                  | Description                                              |
| ---------------------------- | -------------------------------------------------------- |
| LodBinding()                 | Create a new instance of this structure type.            |
| LodBinding(LodBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                    | Type             | Description |
| ----------------------- | ---------------- | ----------- |
| disableControllerUpdate | [AntRef](AntRef) |             |
| disablePoseUpdate       | [AntRef](AntRef) |             |
| distanceFromCamera      | [AntRef](AntRef) |             |

## Methods

| Type                     | Name            | Parameters |
| ------------------------ | --------------- | ---------- |
| [LodBinding](LodBinding) | [Clone](#clone) |            |

### Clone

> [LodBinding](LodBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
