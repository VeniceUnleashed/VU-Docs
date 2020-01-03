---
title: GameSoundEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| GameSoundEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| GameSoundEntityData(GameSoundEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| GameSoundEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/).                    |
| GameSoundEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/).              |
| GameSoundEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/).                            |
| GameSoundEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/).                    |
| GameSoundEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/).              |
| GameSoundEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/). |

## Properties

| Name           | Type                     | Description |
| -------------- | ------------------------ | ----------- |
| sound          | [SoundAsset](/vext/ref/fb/soundasset/) |             |
| playOnCreation | bool                     |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameSoundEntityData](/vext/ref/fb/gamesoundentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
