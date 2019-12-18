---
title: AILocoCoverBinding (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                  | Description                                              |
| -------------------------------------------- | -------------------------------------------------------- |
| AILocoCoverBinding()                         | Create a new instance of this structure type.            |
| AILocoCoverBinding(AILocoCoverBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                   | Type             | Description |
| ---------------------- | ---------------- | ----------- |
| prepareFire            | [AntRef](AntRef) |             |
| throwGrenade           | [AntRef](AntRef) |             |
| peekOut                | [AntRef](AntRef) |             |
| idleBehindCover        | [AntRef](AntRef) |             |
| peekType               | [AntRef](AntRef) |             |
| coverTypeEnum          | [AntRef](AntRef) |             |
| coverFireStyle         | [AntRef](AntRef) |             |
| enterCover             | [AntRef](AntRef) |             |
| exitCover              | [AntRef](AntRef) |             |
| isCloseCover           | [AntRef](AntRef) |             |
| distanceScale          | [AntRef](AntRef) |             |
| absoluteDistance       | [AntRef](AntRef) |             |
| angleToNormal          | [AntRef](AntRef) |             |
| outAngle               | [AntRef](AntRef) |             |
| threatAngle            | [AntRef](AntRef) |             |
| stopExitCoverOutAround | [AntRef](AntRef) |             |
| enterStrategy          | [AntRef](AntRef) |             |
| exitStyle              | [AntRef](AntRef) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoCoverBinding](AILocoCoverBinding) | [Clone](#clone) |            |

### Clone

> [AILocoCoverBinding](AILocoCoverBinding) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
