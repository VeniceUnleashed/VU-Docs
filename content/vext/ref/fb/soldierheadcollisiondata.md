---
title: SoldierHeadCollisionData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierHeadCollisionData()                                                          | Create a new instance of this container type.                                                                                           |
| SoldierHeadCollisionData(SoldierHeadCollisionData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SoldierHeadCollisionData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata/). |

## Properties

| Name       | Type                                                             | Description |
| ---------- | ---------------------------------------------------------------- | ----------- |
| headRadius | number                                                           |             |
| poseStates | [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
