---
title: AudioObstructionMaterialInfo
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                                      | Description                                              |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| AudioObstructionMaterialInfo()                                   | Create a new instance of this structure type.            |
| AudioObstructionMaterialInfo(AudioObstructionMaterialInfo other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                 | Type                                           | Description |
| -------------------- | ---------------------------------------------- | ----------- |
| material             | [MaterialContainerPair](MaterialContainerPair) |             |
| obstructionFrequency | number                                         |             |
| gainReduction        | number                                         |             |

## Methods

| Type                                                         | Name            | Parameters |
| ------------------------------------------------------------ | --------------- | ---------- |
| [AudioObstructionMaterialInfo](AudioObstructionMaterialInfo) | [Clone](#clone) |            |

### Clone

> [AudioObstructionMaterialInfo](AudioObstructionMaterialInfo) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
