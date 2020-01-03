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
| animatable            | [AntAnimatableData](/vext/ref/fb/antanimatabledata/) |             |
| rootController        | [AntRef](/vext/ref/fb/antref/)                       |             |
| lodBinding            | [LodBinding](/vext/ref/fb/lodbinding/)               |             |
| antPackageData        | [AntPackageAsset](/vext/ref/fb/antpackageasset/)\[\] |             |
| bonesToMirror         | [GameplayBone](/vext/ref/fb/gameplaybone/)\[\]       |             |
| reportBackFromAnt     | bool                                   |             |
| enableMasterSlaveCopy | bool                                   |             |
| isProp                | bool                                   |             |

## Methods

| Type                                               | Name            | Parameters |
| -------------------------------------------------- | --------------- | ---------- |
| [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata/) | [Clone](#clone) |            |

### Clone

> [AntAnimationHandlerData](/vext/ref/fb/antanimationhandlerdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
