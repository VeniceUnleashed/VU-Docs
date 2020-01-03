---
title: FilmGrainComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| FilmGrainComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| FilmGrainComponentData(FilmGrainComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| FilmGrainComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [FilmGrainComponentData](FilmGrainComponentData).                      |
| FilmGrainComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FilmGrainComponentData](FilmGrainComponentData).                    |
| FilmGrainComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FilmGrainComponentData](FilmGrainComponentData).              |
| FilmGrainComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FilmGrainComponentData](FilmGrainComponentData). |

## Properties

| Name                  | Type                              | Description |
| --------------------- | --------------------------------- | ----------- |
| colorScale            | [Vec3](/vext/ref/shared/class/vec3) |             |
| textureScale          | [Vec2](/vext/ref/shared/class/vec2) |             |
| realm                 | [Realm](Realm)                    |             |
| texture               | [TextureAsset](TextureAsset)      |             |
| linearFilteringEnable | bool                              |             |
| randomEnable          | bool                              |             |
| enable                | bool                              |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [FilmGrainComponentData](FilmGrainComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FilmGrainComponentData](FilmGrainComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
