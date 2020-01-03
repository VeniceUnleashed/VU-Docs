---
title: DestroyLevelCommandEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| DestroyLevelCommandEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| DestroyLevelCommandEntityData(DestroyLevelCommandEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| DestroyLevelCommandEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/).                    |
| DestroyLevelCommandEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/).              |
| DestroyLevelCommandEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/).                            |
| DestroyLevelCommandEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/).                    |
| DestroyLevelCommandEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/).              |
| DestroyLevelCommandEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| instanceCountDestroyedPerFrame | number |             |
| destroyDelay                   | number |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestroyLevelCommandEntityData](/vext/ref/fb/destroylevelcommandentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
