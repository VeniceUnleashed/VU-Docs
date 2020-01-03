---
title: EnlightenComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| EnlightenComponentData()                                                          | Create a new instance of this container type.                                                                                       |
| EnlightenComponentData(EnlightenComponentData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| EnlightenComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata/).                      |
| EnlightenComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata/).                    |
| EnlightenComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata/).              |
| EnlightenComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata/). |

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
| realm                    | [Realm](/vext/ref/fb/realm/)                    |             |
| skyBoxBackLightRotationY | number                            |             |
| skyBoxSunLightColorSize  | number                            |             |
| skyBoxBackLightColorSize | number                            |             |
| skyBoxBackLightRotationX | number                            |             |
| skyBoxEnable             | bool                              |             |
| enable                   | bool                              |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EnlightenComponentData](/vext/ref/fb/enlightencomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
