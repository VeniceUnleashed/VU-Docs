---
title: OccluderVolumeEntityData (Frostbite Container)
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| OccluderVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| OccluderVolumeEntityData(OccluderVolumeEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| OccluderVolumeEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [OccluderVolumeEntityData](OccluderVolumeEntityData).              |
| OccluderVolumeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [OccluderVolumeEntityData](OccluderVolumeEntityData).                            |
| OccluderVolumeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [OccluderVolumeEntityData](OccluderVolumeEntityData).                    |
| OccluderVolumeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [OccluderVolumeEntityData](OccluderVolumeEntityData).              |
| OccluderVolumeEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [OccluderVolumeEntityData](OccluderVolumeEntityData). |

## Properties

| Name                 | Type | Description |
| -------------------- | ---- | ----------- |
| occluderHighPriority | bool |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [OccluderVolumeEntityData](OccluderVolumeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [OccluderVolumeEntityData](OccluderVolumeEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
