---
title: LensScopeComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| LensScopeComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| LensScopeComponentData(LensScopeComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| LensScopeComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [LensScopeComponentData](LensScopeComponentData).                      |
| LensScopeComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LensScopeComponentData](LensScopeComponentData).                    |
| LensScopeComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LensScopeComponentData](LensScopeComponentData).              |
| LensScopeComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LensScopeComponentData](LensScopeComponentData). |

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
| realm                            | [Realm](Realm)                    |             |
| enable                           | bool                              |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [LensScopeComponentData](LensScopeComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LensScopeComponentData](LensScopeComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
