---
title: VisualTerrainEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| VisualTerrainEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| VisualTerrainEntityData(VisualTerrainEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| VisualTerrainEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VisualTerrainEntityData](VisualTerrainEntityData).                            |
| VisualTerrainEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VisualTerrainEntityData](VisualTerrainEntityData).                    |
| VisualTerrainEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VisualTerrainEntityData](VisualTerrainEntityData).              |
| VisualTerrainEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualTerrainEntityData](VisualTerrainEntityData). |

## Properties

| Name     | Type                                           | Description |
| -------- | ---------------------------------------------- | ----------- |
| terrain  | [TerrainData](TerrainData)                     |             |
| settings | [VisualTerrainSettings](VisualTerrainSettings) |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualTerrainEntityData](VisualTerrainEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualTerrainEntityData](VisualTerrainEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
