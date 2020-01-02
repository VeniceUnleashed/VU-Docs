---
title: LensFlareEntityData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| LensFlareEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| LensFlareEntityData(LensFlareEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| LensFlareEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LensFlareEntityData](LensFlareEntityData).              |
| LensFlareEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LensFlareEntityData](LensFlareEntityData).                            |
| LensFlareEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LensFlareEntityData](LensFlareEntityData).                    |
| LensFlareEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LensFlareEntityData](LensFlareEntityData).              |
| LensFlareEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LensFlareEntityData](LensFlareEntityData). |

## Properties

| Name              | Type                                     | Description |
| ----------------- | ---------------------------------------- | ----------- |
| elements          | [LensFlareElement](LensFlareElement)\[\] |             |
| occluderSize      | number                                   |             |
| visible           | bool                                     |             |
| halfRes           | bool                                     |             |
| debugDrawOccluder | bool                                     |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [LensFlareEntityData](LensFlareEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LensFlareEntityData](LensFlareEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
