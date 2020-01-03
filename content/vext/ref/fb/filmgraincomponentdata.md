---
title: FilmGrainComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FilmGrainComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| FilmGrainComponentData(FilmGrainComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FilmGrainComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata/).                      |
| FilmGrainComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata/).                    |
| FilmGrainComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata/).              |
| FilmGrainComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata/). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| colorScale            | [Vec3](/vext/ref/shared/class/vec3) |             |
| textureScale          | [Vec2](/vext/ref/shared/class/vec2) |             |
| realm                 | [Realm](/vext/ref/fb/realm/)                    |             |
| texture               | [TextureAsset](/vext/ref/fb/textureasset/)      |             |
| linearFilteringEnable | bool                              |             |
| randomEnable          | bool                              |             |
| enable                | bool                              |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FilmGrainComponentData](/vext/ref/fb/filmgraincomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
