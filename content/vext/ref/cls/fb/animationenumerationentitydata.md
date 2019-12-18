---
title: AnimationEnumerationEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                         |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| AnimationEnumerationEntityData()                                                          | Create a new instance of this container type.                                                                                                       |
| AnimationEnumerationEntityData(AnimationEnumerationEntityData other)                      | Create a reference copy of an instance of the same type.                                                                                            |
| AnimationEnumerationEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AnimationEnumerationEntityData](AnimationEnumerationEntityData).                            |
| AnimationEnumerationEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimationEnumerationEntityData](AnimationEnumerationEntityData).                    |
| AnimationEnumerationEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimationEnumerationEntityData](AnimationEnumerationEntityData).              |
| AnimationEnumerationEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AnimationEnumerationEntityData](AnimationEnumerationEntityData). |

## Properties

| Name    | Type                             | Description |
| ------- | -------------------------------- | ----------- |
| realm   | [Realm](Realm)                   |             |
| antEnum | [AntEnumeration](AntEnumeration) |             |

## Methods

| Type                                                             | Name            | Parameters                                     |
| ---------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimationEnumerationEntityData](AnimationEnumerationEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AnimationEnumerationEntityData](AnimationEnumerationEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
