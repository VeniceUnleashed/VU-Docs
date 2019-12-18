---
title: MovementComponentBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                              | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| MovementComponentBinding()                               | Create a new instance of this structure type.            |
| MovementComponentBinding(MovementComponentBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                | Type             | Description |
| ------------------- | ---------------- | ----------- |
| animationControlled | [AntRef](AntRef) |             |

## Methods

| Type                                                 | Name            | Parameters |
| ---------------------------------------------------- | --------------- | ---------- |
| [MovementComponentBinding](MovementComponentBinding) | [Clone](#clone) |            |

### Clone

> [MovementComponentBinding](MovementComponentBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
