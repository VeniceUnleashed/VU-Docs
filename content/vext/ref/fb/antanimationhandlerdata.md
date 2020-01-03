---
title: AntAnimationHandlerData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                            | Description                                              |
| ------------------------------------------------------ | -------------------------------------------------------- |
| AntAnimationHandlerData()                              | Create a new instance of this structure type.            |
| AntAnimationHandlerData(AntAnimationHandlerData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                  | Type                                   | Description |
| --------------------- | -------------------------------------- | ----------- |
| animatable            | [AntAnimatableData](AntAnimatableData) |             |
| rootController        | [AntRef](AntRef)                       |             |
| lodBinding            | [LodBinding](LodBinding)               |             |
| antPackageData        | [AntPackageAsset](AntPackageAsset)\[\] |             |
| bonesToMirror         | [GameplayBone](GameplayBone)\[\]       |             |
| reportBackFromAnt     | bool                                   |             |
| enableMasterSlaveCopy | bool                                   |             |
| isProp                | bool                                   |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [AntAnimationHandlerData](AntAnimationHandlerData) | [Clone](#clone) |            |

### Clone

> [AntAnimationHandlerData](AntAnimationHandlerData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
