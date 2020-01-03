---
title: GameplayBone
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                      | Description                                              |
| -------------------------------- | -------------------------------------------------------- |
| GameplayBone()                   | Create a new instance of this structure type.            |
| GameplayBone(GameplayBone other) | Create a reference copy of a structure of the same type. |

## Properties

| Name | Type                           | Description |
| ---- | ------------------------------ | ----------- |
| name | string                         |             |
| bone | [GameplayBones](GameplayBones) |             |

## Methods

| Type                         | Name            | Parameters |
| ---------------------------- | --------------- | ---------- |
| [GameplayBone](GameplayBone) | [Clone](#clone) |            |

### Clone

> [GameplayBone](GameplayBone) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
