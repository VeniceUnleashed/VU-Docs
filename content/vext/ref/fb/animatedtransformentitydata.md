---
title: AnimatedTransformEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedTransformEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| AnimatedTransformEntityData(AnimatedTransformEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| AnimatedTransformEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata/).                            |
| AnimatedTransformEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata/).                    |
| AnimatedTransformEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata/).              |
| AnimatedTransformEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata/). |

## Properties

| Name         | Type             | Description |
| ------------ | ---------------- | ----------- |
| animatable   | [AntRef](/vext/ref/fb/antref/) |             |
| externalTime | number           |             |
| controller   | [AntRef](/vext/ref/fb/antref/) |             |
| boneName     | string           |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedTransformEntityData](/vext/ref/fb/animatedtransformentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
