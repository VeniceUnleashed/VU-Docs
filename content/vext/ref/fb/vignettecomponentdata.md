---
title: VignetteComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| VignetteComponentData()                                                          | Create a new instance of this container type.                                                                                     |
| VignetteComponentData(VignetteComponentData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| VignetteComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [VignetteComponentData](/vext/ref/fb/vignettecomponentdata/).                      |
| VignetteComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VignetteComponentData](/vext/ref/fb/vignettecomponentdata/).                    |
| VignetteComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VignetteComponentData](/vext/ref/fb/vignettecomponentdata/).              |
| VignetteComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VignetteComponentData](/vext/ref/fb/vignettecomponentdata/). |

## Properties

| Name     | Type                              | Description |
| -------- | --------------------------------- | ----------- |
| scale    | [Vec2](/vext/ref/shared/class/vec2) |             |
| color    | [Vec3](/vext/ref/shared/class/vec3) |             |
| realm    | [Realm](/vext/ref/fb/realm/)                    |             |
| exponent | number                            |             |
| opacity  | number                            |             |
| enable   | bool                              |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [VignetteComponentData](/vext/ref/fb/vignettecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VignetteComponentData](/vext/ref/fb/vignettecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
