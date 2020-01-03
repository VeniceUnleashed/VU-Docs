---
title: LensScopeComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LensScopeComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| LensScopeComponentData(LensScopeComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LensScopeComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [LensScopeComponentData](/vext/ref/fb/lensscopecomponentdata/).                      |
| LensScopeComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [LensScopeComponentData](/vext/ref/fb/lensscopecomponentdata/).                    |
| LensScopeComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [LensScopeComponentData](/vext/ref/fb/lensscopecomponentdata/).              |
| LensScopeComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LensScopeComponentData](/vext/ref/fb/lensscopecomponentdata/). |

## Properties

| Name                             | Type                              | Description |
| -------------------------------- | --------------------------------- | ----------- |
| chromaticAberrationColor1        | [Vec3](/vext/ref/shared/class/vec3) |             |
| radialBlendDistanceCoefficients  | [Vec2](/vext/ref/shared/class/vec2) |             |
| chromaticAberrationColor2        | [Vec3](/vext/ref/shared/class/vec3) |             |
| blurCenter                       | [Vec2](/vext/ref/shared/class/vec2) |             |
| chromaticAberrationDisplacement2 | [Vec2](/vext/ref/shared/class/vec2) |             |
| chromaticAberrationDisplacement1 | [Vec2](/vext/ref/shared/class/vec2) |             |
| chromaticAberrationStrengths     | [Vec2](/vext/ref/shared/class/vec2) |             |
| blurScale                        | number                            |             |
| realm                            | [Realm](/vext/ref/fb/realm/)                    |             |
| enable                           | bool                              |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LensScopeComponentData](/vext/ref/fb/lensscopecomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LensScopeComponentData](/vext/ref/fb/lensscopecomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
