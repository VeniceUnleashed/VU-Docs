---
title: PlayerLookAtEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| PlayerLookAtEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| PlayerLookAtEntityData(PlayerLookAtEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| PlayerLookAtEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PlayerLookAtEntityData](PlayerLookAtEntityData).                            |
| PlayerLookAtEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PlayerLookAtEntityData](PlayerLookAtEntityData).                    |
| PlayerLookAtEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PlayerLookAtEntityData](PlayerLookAtEntityData).              |
| PlayerLookAtEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PlayerLookAtEntityData](PlayerLookAtEntityData). |

## Properties

| Name            | Type                                                    | Description |
| --------------- | ------------------------------------------------------- | ----------- |
| targetTransform | [LinearTransform](/vext/ref/cls/shr/LinearTransform) |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [PlayerLookAtEntityData](PlayerLookAtEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PlayerLookAtEntityData](PlayerLookAtEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
