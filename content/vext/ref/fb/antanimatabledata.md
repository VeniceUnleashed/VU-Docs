---
title: AntAnimatableData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                                | Description                                              |
| ------------------------------------------ | -------------------------------------------------------- |
| AntAnimatableData()                        | Create a new instance of this structure type.            |
| AntAnimatableData(AntAnimatableData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                             | Type                                                     | Description |
| -------------------------------- | -------------------------------------------------------- | ----------- |
| actor                            | [AntRef](/vext/ref/fb/antref/)                                         |             |
| proceduralAwareness              | [ProceduralAwarenessAntRefs](/vext/ref/fb/proceduralawarenessantrefs/) |             |
| rightHandEffectorDisableOverride | [AntRef](/vext/ref/fb/antref/)                                         |             |
| leftHandEffectorDisableOverride  | [AntRef](/vext/ref/fb/antref/)                                         |             |
| masterSkeletonAsset              | [MasterSkeletonAsset](/vext/ref/fb/masterskeletonasset/)               |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [AntAnimatableData](/vext/ref/fb/antanimatabledata/) | [Clone](#clone) |            |

### Clone

> [AntAnimatableData](/vext/ref/fb/antanimatabledata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
