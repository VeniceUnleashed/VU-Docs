---
title: GunSwayStandData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                              | Description                                              |
| ---------------------------------------- | -------------------------------------------------------- |
| GunSwayStandData()                       | Create a new instance of this structure type.            |
| GunSwayStandData(GunSwayStandData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name   | Type                                               | Description |
| ------ | -------------------------------------------------- | ----------- |
| noZoom | [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata/) |             |
| zoom   | [GunSwayBaseMoveJumpData](/vext/ref/fb/gunswaybasemovejumpdata/) |             |

## Methods

| Type                                 | Name            | Parameters |
| ------------------------------------ | --------------- | ---------- |
| [GunSwayStandData](/vext/ref/fb/gunswaystanddata/) | [Clone](#clone) |            |

### Clone

> [GunSwayStandData](/vext/ref/fb/gunswaystanddata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
