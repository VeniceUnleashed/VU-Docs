---
title: ToWorldSpaceTransformEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                | Description                                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ToWorldSpaceTransformEntityData()                                                          | Create a new instance of this container type.                                                                                                         |
| ToWorldSpaceTransformEntityData(ToWorldSpaceTransformEntityData other)                     | Create a reference copy of an instance of the same type.                                                                                              |
| ToWorldSpaceTransformEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ToWorldSpaceTransformEntityData](/vext/ref/fb/toworldspacetransformentitydata/).                            |
| ToWorldSpaceTransformEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ToWorldSpaceTransformEntityData](/vext/ref/fb/toworldspacetransformentitydata/).                    |
| ToWorldSpaceTransformEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ToWorldSpaceTransformEntityData](/vext/ref/fb/toworldspacetransformentitydata/).              |
| ToWorldSpaceTransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ToWorldSpaceTransformEntityData](/vext/ref/fb/toworldspacetransformentitydata/). |

## Properties

| Name  | Type                                                    | Description |
| ----- | ------------------------------------------------------- | ----------- |
| in1   | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm | [Realm](/vext/ref/fb/realm/)                                          |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ToWorldSpaceTransformEntityData](/vext/ref/fb/toworldspacetransformentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ToWorldSpaceTransformEntityData](/vext/ref/fb/toworldspacetransformentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
