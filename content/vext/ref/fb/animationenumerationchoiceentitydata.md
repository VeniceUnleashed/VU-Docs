---
title: AnimationEnumerationChoiceEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                     | Description                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimationEnumerationChoiceEntityData()                                                          | Create a new instance of this container type.                                                                                                                   |
| AnimationEnumerationChoiceEntityData(AnimationEnumerationChoiceEntityData other)                | Create a reference copy of an instance of the same type.                                                                                                        |
| AnimationEnumerationChoiceEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AnimationEnumerationChoiceEntityData](/vext/ref/fb/animationenumerationchoiceentitydata/).                            |
| AnimationEnumerationChoiceEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimationEnumerationChoiceEntityData](/vext/ref/fb/animationenumerationchoiceentitydata/).                    |
| AnimationEnumerationChoiceEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimationEnumerationChoiceEntityData](/vext/ref/fb/animationenumerationchoiceentitydata/).              |
| AnimationEnumerationChoiceEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimationEnumerationChoiceEntityData](/vext/ref/fb/animationenumerationchoiceentitydata/). |

## Properties

| Name  | Type           | Description |
| ----- | -------------- | ----------- |
| realm | [Realm](/vext/ref/fb/realm/) |             |
| value | number         |             |

## Methods

| Type                                                                         | Name            | Parameters                                     |
| ---------------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimationEnumerationChoiceEntityData](/vext/ref/fb/animationenumerationchoiceentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimationEnumerationChoiceEntityData](/vext/ref/fb/animationenumerationchoiceentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
