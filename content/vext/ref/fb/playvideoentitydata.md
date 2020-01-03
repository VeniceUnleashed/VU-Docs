---
title: PlayVideoEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PlayVideoEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| PlayVideoEntityData(PlayVideoEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PlayVideoEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata/).                            |
| PlayVideoEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata/).                    |
| PlayVideoEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata/).              |
| PlayVideoEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata/). |

## Properties

| Name            | Type                                   | Description |
| --------------- | -------------------------------------- | ----------- |
| movie           | [MovieTextureAsset](/vext/ref/fb/movietextureasset/) |             |
| keepBlackScreen | bool                                   |             |
| allowSkip       | bool                                   |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PlayVideoEntityData](/vext/ref/fb/playvideoentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
