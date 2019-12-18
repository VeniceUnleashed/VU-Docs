---
title: DestructionCommandEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionCommandEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| DestructionCommandEntityData(DestructionCommandEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DestructionCommandEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DestructionCommandEntityData](DestructionCommandEntityData).                    |
| DestructionCommandEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DestructionCommandEntityData](DestructionCommandEntityData).              |
| DestructionCommandEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DestructionCommandEntityData](DestructionCommandEntityData).                            |
| DestructionCommandEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DestructionCommandEntityData](DestructionCommandEntityData).                    |
| DestructionCommandEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DestructionCommandEntityData](DestructionCommandEntityData).              |
| DestructionCommandEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestructionCommandEntityData](DestructionCommandEntityData). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| instanceCountDestroyedPerFrame | number |             |
| instanceCountDestroyedPerType  | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionCommandEntityData](DestructionCommandEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestructionCommandEntityData](DestructionCommandEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
