---
title: LevelControlEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LevelControlEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| LevelControlEntityData(LevelControlEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LevelControlEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/).                    |
| LevelControlEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/).              |
| LevelControlEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/).                            |
| LevelControlEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/).                    |
| LevelControlEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/).              |
| LevelControlEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| levelToLoad | string |             |
| rollCredits | bool   |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LevelControlEntityData](/vext/ref/fb/levelcontrolentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
