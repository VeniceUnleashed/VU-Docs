---
title: AnimationEnumerationEntityData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimationEnumerationEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| AnimationEnumerationEntityData(AnimationEnumerationEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| AnimationEnumerationEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AnimationEnumerationEntityData](/vext/ref/fb/animationenumerationentitydata/).                            |
| AnimationEnumerationEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AnimationEnumerationEntityData](/vext/ref/fb/animationenumerationentitydata/).                    |
| AnimationEnumerationEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AnimationEnumerationEntityData](/vext/ref/fb/animationenumerationentitydata/).              |
| AnimationEnumerationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimationEnumerationEntityData](/vext/ref/fb/animationenumerationentitydata/). |

## Properties

| Name    | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| realm   | [Realm](/vext/ref/fb/realm/)                   |             |
| antEnum | [AntEnumeration](/vext/ref/fb/antenumeration/) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimationEnumerationEntityData](/vext/ref/fb/animationenumerationentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimationEnumerationEntityData](/vext/ref/fb/animationenumerationentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
