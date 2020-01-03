---
title: AILocoCoverBinding
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
| prepareFire            | [AntRef](/vext/ref/fb/antref/) |             |
| throwGrenade           | [AntRef](/vext/ref/fb/antref/) |             |
| peekOut                | [AntRef](/vext/ref/fb/antref/) |             |
| idleBehindCover        | [AntRef](/vext/ref/fb/antref/) |             |
| peekType               | [AntRef](/vext/ref/fb/antref/) |             |
| coverTypeEnum          | [AntRef](/vext/ref/fb/antref/) |             |
| coverFireStyle         | [AntRef](/vext/ref/fb/antref/) |             |
| enterCover             | [AntRef](/vext/ref/fb/antref/) |             |
| exitCover              | [AntRef](/vext/ref/fb/antref/) |             |
| isCloseCover           | [AntRef](/vext/ref/fb/antref/) |             |
| distanceScale          | [AntRef](/vext/ref/fb/antref/) |             |
| absoluteDistance       | [AntRef](/vext/ref/fb/antref/) |             |
| angleToNormal          | [AntRef](/vext/ref/fb/antref/) |             |
| outAngle               | [AntRef](/vext/ref/fb/antref/) |             |
| threatAngle            | [AntRef](/vext/ref/fb/antref/) |             |
| stopExitCoverOutAround | [AntRef](/vext/ref/fb/antref/) |             |
| enterStrategy          | [AntRef](/vext/ref/fb/antref/) |             |
| exitStyle              | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                     | Name            | Parameters |
| ---------------------------------------- | --------------- | ---------- |
| [AILocoCoverBinding](/vext/ref/fb/ailococoverbinding/) | [Clone](#clone) |            |

### Clone

> [AILocoCoverBinding](/vext/ref/fb/ailococoverbinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
