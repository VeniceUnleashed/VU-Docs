---
title: TransformSelectorEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| TransformSelectorEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| TransformSelectorEntityData(TransformSelectorEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| TransformSelectorEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [TransformSelectorEntityData](/vext/ref/fb/transformselectorentitydata/).                            |
| TransformSelectorEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [TransformSelectorEntityData](/vext/ref/fb/transformselectorentitydata/).                    |
| TransformSelectorEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [TransformSelectorEntityData](/vext/ref/fb/transformselectorentitydata/).              |
| TransformSelectorEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TransformSelectorEntityData](/vext/ref/fb/transformselectorentitydata/). |

## Properties

| Name      | Type                                                    | Description |
| --------- | ------------------------------------------------------- | ----------- |
| in1       | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| in2       | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| realm     | [Realm](/vext/ref/fb/realm/)                                          |             |
| selection | bool                                                    |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [TransformSelectorEntityData](/vext/ref/fb/transformselectorentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TransformSelectorEntityData](/vext/ref/fb/transformselectorentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
