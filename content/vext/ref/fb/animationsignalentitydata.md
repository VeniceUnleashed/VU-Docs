---
title: AnimationSignalEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| AnimationSignalEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| AnimationSignalEntityData(AnimationSignalEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| AnimationSignalEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AnimationSignalEntityData](AnimationSignalEntityData).                            |
| AnimationSignalEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AnimationSignalEntityData](AnimationSignalEntityData).                    |
| AnimationSignalEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AnimationSignalEntityData](AnimationSignalEntityData).              |
| AnimationSignalEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimationSignalEntityData](AnimationSignalEntityData). |

## Properties

| Name           | Type             | Description |
| -------------- | ---------------- | ----------- |
| realm          | [Realm](Realm)   |             |
| signal         | [AntRef](AntRef) |             |
| intGameState   | [AntRef](AntRef) |             |
| floatGameState | [AntRef](AntRef) |             |
| valueInt       | number           |             |
| valueFloat     | number           |             |
| reset          | bool             |             |
| continuous     | bool             |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [AnimationSignalEntityData](AnimationSignalEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimationSignalEntityData](AnimationSignalEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
