---
title: PredestructionEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PredestructionEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| PredestructionEntityData(PredestructionEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PredestructionEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [PredestructionEntityData](PredestructionEntityData).                    |
| PredestructionEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [PredestructionEntityData](PredestructionEntityData).              |
| PredestructionEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PredestructionEntityData](PredestructionEntityData).                            |
| PredestructionEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PredestructionEntityData](PredestructionEntityData).                    |
| PredestructionEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PredestructionEntityData](PredestructionEntityData).              |
| PredestructionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PredestructionEntityData](PredestructionEntityData). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| radius | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PredestructionEntityData](PredestructionEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PredestructionEntityData](PredestructionEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
