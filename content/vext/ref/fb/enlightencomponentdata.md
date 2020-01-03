---
title: EnlightenComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| EnlightenComponentData(EnlightenComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| EnlightenComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [EnlightenComponentData](EnlightenComponentData).                      |
| EnlightenComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EnlightenComponentData](EnlightenComponentData).                    |
| EnlightenComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EnlightenComponentData](EnlightenComponentData).              |
| EnlightenComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenComponentData](EnlightenComponentData). |

## Properties

| Name                     | Type                              | Description |
| ------------------------ | --------------------------------- | ----------- |
| skyBoxSkyColor           | [Vec3](/vext/ref/shared/class/vec3) |             |
| skyBoxBackLightColor     | [Vec3](/vext/ref/shared/class/vec3) |             |
| skyBoxGroundColor        | [Vec3](/vext/ref/shared/class/vec3) |             |
| terrainColor             | [Vec3](/vext/ref/shared/class/vec3) |             |
| skyBoxSunLightColor      | [Vec3](/vext/ref/shared/class/vec3) |             |
| bounceScale              | number                            |             |
| cullDistance             | number                            |             |
| sunScale                 | number                            |             |
| realm                    | [Realm](Realm)                    |             |
| skyBoxBackLightRotationY | number                            |             |
| skyBoxSunLightColorSize  | number                            |             |
| skyBoxBackLightColorSize | number                            |             |
| skyBoxBackLightRotationX | number                            |             |
| skyBoxEnable             | bool                              |             |
| enable                   | bool                              |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenComponentData](EnlightenComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenComponentData](EnlightenComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
