---
title: TransformHubEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| TransformHubEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| TransformHubEntityData(TransformHubEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| TransformHubEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TransformHubEntityData](/vext/ref/fb/transformhubentitydata/).                            |
| TransformHubEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TransformHubEntityData](/vext/ref/fb/transformhubentitydata/).                    |
| TransformHubEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TransformHubEntityData](/vext/ref/fb/transformhubentitydata/).              |
| TransformHubEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformHubEntityData](/vext/ref/fb/transformhubentitydata/). |

## Properties

| Name  | Type                                                    | Description |
| ----- | ------------------------------------------------------- | ----------- |
| in4   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in1   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in2   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in3   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in8   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in5   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in6   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in7   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm | [Realm](/vext/ref/fb/realm/)                                          |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [TransformHubEntityData](/vext/ref/fb/transformhubentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformHubEntityData](/vext/ref/fb/transformhubentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
