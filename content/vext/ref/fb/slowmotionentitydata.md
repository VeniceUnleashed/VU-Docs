---
title: SlowMotionEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SlowMotionEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| SlowMotionEntityData(SlowMotionEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| SlowMotionEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [SlowMotionEntityData](/vext/ref/fb/slowmotionentitydata/).                            |
| SlowMotionEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SlowMotionEntityData](/vext/ref/fb/slowmotionentitydata/).                    |
| SlowMotionEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SlowMotionEntityData](/vext/ref/fb/slowmotionentitydata/).              |
| SlowMotionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SlowMotionEntityData](/vext/ref/fb/slowmotionentitydata/). |

## Properties

| Name                    | Type           | Description |
| ----------------------- | -------------- | ----------- |
| realm                   | [Realm](/vext/ref/fb/realm/) |             |
| timeScale               | number         |             |
| scaleDownTransitionTime | number         |             |
| scaleUpTransitionTime   | number         |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [SlowMotionEntityData](/vext/ref/fb/slowmotionentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SlowMotionEntityData](/vext/ref/fb/slowmotionentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
