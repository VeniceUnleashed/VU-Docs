---
title: TransformEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| TransformEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| TransformEntityData(TransformEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| TransformEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TransformEntityData](/vext/ref/fb/transformentitydata/).                            |
| TransformEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TransformEntityData](/vext/ref/fb/transformentitydata/).                    |
| TransformEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TransformEntityData](/vext/ref/fb/transformentitydata/).              |
| TransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformEntityData](/vext/ref/fb/transformentitydata/). |

## Properties

| Name             | Type                                                    | Description |
| ---------------- | ------------------------------------------------------- | ----------- |
| defaultTransform | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm            | [Realm](/vext/ref/fb/realm/)                                          |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [TransformEntityData](/vext/ref/fb/transformentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformEntityData](/vext/ref/fb/transformentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
