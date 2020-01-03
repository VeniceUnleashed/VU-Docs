---
title: GameEntityData
---
### Base Classes

[SpatialEntityData](SpatialEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| GameEntityData()                                                          | Create a new instance of this container type.                                                                       |
| GameEntityData(GameEntityData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| GameEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [GameEntityData](GameEntityData).              |
| GameEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [GameEntityData](GameEntityData).                            |
| GameEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [GameEntityData](GameEntityData).                    |
| GameEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GameEntityData](GameEntityData).              |
| GameEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameEntityData](GameEntityData). |

## Properties

| Name                  | Type                                 | Description |
| --------------------- | ------------------------------------ | ----------- |
| components            | [GameObjectData](GameObjectData)\[\] |             |
| enabled               | bool                                 |             |
| runtimeComponentCount | number                               |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [GameEntityData](GameEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameEntityData](GameEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
