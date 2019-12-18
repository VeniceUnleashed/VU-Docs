---
title: AntAnimatableData (Frostbite Structure)
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
| actor                            | [AntRef](AntRef)                                         |             |
| proceduralAwareness              | [ProceduralAwarenessAntRefs](ProceduralAwarenessAntRefs) |             |
| rightHandEffectorDisableOverride | [AntRef](AntRef)                                         |             |
| leftHandEffectorDisableOverride  | [AntRef](AntRef)                                         |             |
| masterSkeletonAsset              | [MasterSkeletonAsset](MasterSkeletonAsset)               |             |

## Methods

| Type                                   | Name            | Parameters |
| -------------------------------------- | --------------- | ---------- |
| [AntAnimatableData](AntAnimatableData) | [Clone](#clone) |            |

### Clone

> [AntAnimatableData](AntAnimatableData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
