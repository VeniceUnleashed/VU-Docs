---
title: SoldierParachuteBinding
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| SoldierParachuteBinding()                              | Create a new instance of this structure type.            |
| SoldierParachuteBinding(SoldierParachuteBinding other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type             | Description |
| --------------- | ---------------- | ----------- |
| enabled         | [AntRef](/vext/ref/fb/antref/) |             |
| steerLeftRight  | [AntRef](/vext/ref/fb/antref/) |             |
| accelerateBrake | [AntRef](/vext/ref/fb/antref/) |             |
| pitch           | [AntRef](/vext/ref/fb/antref/) |             |
| roll            | [AntRef](/vext/ref/fb/antref/) |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding/) | [Clone](#clone) |            |

### Clone

> [SoldierParachuteBinding](/vext/ref/fb/soldierparachutebinding/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
