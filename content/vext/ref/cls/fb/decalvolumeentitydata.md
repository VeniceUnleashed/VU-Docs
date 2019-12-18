---
title: DecalVolumeEntityData (Frostbite Container)
---
### Base Classes

[RenderVolumeEntityData](RenderVolumeEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| DecalVolumeEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| DecalVolumeEntityData(DecalVolumeEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| DecalVolumeEntityData([RenderVolumeEntityData](RenderVolumeEntityData) other)    | Upcast an instance of type [RenderVolumeEntityData](RenderVolumeEntityData) to [DecalVolumeEntityData](DecalVolumeEntityData).    |
| DecalVolumeEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DecalVolumeEntityData](DecalVolumeEntityData).              |
| DecalVolumeEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DecalVolumeEntityData](DecalVolumeEntityData).                            |
| DecalVolumeEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DecalVolumeEntityData](DecalVolumeEntityData).                    |
| DecalVolumeEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DecalVolumeEntityData](DecalVolumeEntityData).              |
| DecalVolumeEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DecalVolumeEntityData](DecalVolumeEntityData). |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [DecalVolumeEntityData](DecalVolumeEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DecalVolumeEntityData](DecalVolumeEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
