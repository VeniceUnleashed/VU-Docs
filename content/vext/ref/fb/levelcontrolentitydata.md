---
title: LevelControlEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LevelControlEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| LevelControlEntityData(LevelControlEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LevelControlEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [LevelControlEntityData](LevelControlEntityData).                    |
| LevelControlEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [LevelControlEntityData](LevelControlEntityData).              |
| LevelControlEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LevelControlEntityData](LevelControlEntityData).                            |
| LevelControlEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LevelControlEntityData](LevelControlEntityData).                    |
| LevelControlEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LevelControlEntityData](LevelControlEntityData).              |
| LevelControlEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelControlEntityData](LevelControlEntityData). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| levelToLoad | string |             |
| rollCredits | bool   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LevelControlEntityData](LevelControlEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelControlEntityData](LevelControlEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
