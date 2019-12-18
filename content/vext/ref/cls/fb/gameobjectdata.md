---
title: GameObjectData (Frostbite Container)
---
### Base Classes

[GameDataContainer](GameDataContainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                               | Description                                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| GameObjectData()                                                          | Create a new instance of this container type.                                                                       |
| GameObjectData(GameObjectData other)                                      | Create a reference copy of an instance of the same type.                                                            |
| GameObjectData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [GameObjectData](GameObjectData).              |
| GameObjectData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameObjectData](GameObjectData). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| indexInBlueprint           | number |             |
| isEventConnectionTarget    | number |             |
| isPropertyConnectionTarget | number |             |

## Methods

| Type                             | Name            | Parameters                                     |
| -------------------------------- | --------------- | ---------------------------------------------- |
| [GameObjectData](GameObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameObjectData](GameObjectData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
