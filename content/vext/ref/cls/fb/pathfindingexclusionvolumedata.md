---
title: PathfindingExclusionVolumeData (Frostbite Container)
---
### Base Classes

[OBBData](OBBData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingExclusionVolumeData()                                                          | Create a new instance of this container type.                                                                                                       |
| PathfindingExclusionVolumeData(PathfindingExclusionVolumeData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| PathfindingExclusionVolumeData([OBBData](OBBData) other)                                  | Upcast an instance of type [OBBData](OBBData) to [PathfindingExclusionVolumeData](PathfindingExclusionVolumeData).                                  |
| PathfindingExclusionVolumeData([BaseShapeData](BaseShapeData) other)                      | Upcast an instance of type [BaseShapeData](BaseShapeData) to [PathfindingExclusionVolumeData](PathfindingExclusionVolumeData).                      |
| PathfindingExclusionVolumeData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PathfindingExclusionVolumeData](PathfindingExclusionVolumeData).                    |
| PathfindingExclusionVolumeData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PathfindingExclusionVolumeData](PathfindingExclusionVolumeData).              |
| PathfindingExclusionVolumeData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PathfindingExclusionVolumeData](PathfindingExclusionVolumeData). |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingExclusionVolumeData](PathfindingExclusionVolumeData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PathfindingExclusionVolumeData](PathfindingExclusionVolumeData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
