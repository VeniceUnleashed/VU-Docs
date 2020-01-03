---
title: TonemapComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| TonemapComponentData()                                                          | Create a new instance of this container type.                                                                                   |
| TonemapComponentData(TonemapComponentData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| TonemapComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata/).                      |
| TonemapComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata/).                    |
| TonemapComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata/).              |
| TonemapComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata/). |

## Properties

| Name                   | Type                              | Description |
| ---------------------- | --------------------------------- | ----------- |
| bloomScale             | [Vec3](/vext/ref/shared/class/vec3) |             |
| realm                  | [Realm](/vext/ref/fb/realm/)                    |             |
| tonemapMethod          | [TonemapMethod](/vext/ref/fb/tonemapmethod/)    |             |
| minExposure            | number                            |             |
| middleGray             | number                            |             |
| exposureAdjustTime     | number                            |             |
| maxExposure            | number                            |             |
| chromostereopsisOffset | number                            |             |
| chromostereopsisScale  | number                            |             |
| chromostereopsisEnable | bool                              |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TonemapComponentData](/vext/ref/fb/tonemapcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
