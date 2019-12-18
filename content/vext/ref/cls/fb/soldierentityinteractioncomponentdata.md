---
title: SoldierEntityInteractionComponentData (Frostbite Container)
---
### Base Classes

[EntityInteractionComponentData](EntityInteractionComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                                   | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SoldierEntityInteractionComponentData()                                                                       | Create a new instance of this container type.                                                                                                                                  |
| SoldierEntityInteractionComponentData(SoldierEntityInteractionComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                                                       |
| SoldierEntityInteractionComponentData([EntityInteractionComponentData](EntityInteractionComponentData) other) | Upcast an instance of type [EntityInteractionComponentData](EntityInteractionComponentData) to [SoldierEntityInteractionComponentData](SoldierEntityInteractionComponentData). |
| SoldierEntityInteractionComponentData([ComponentData](ComponentData) other)                                   | Upcast an instance of type [ComponentData](ComponentData) to [SoldierEntityInteractionComponentData](SoldierEntityInteractionComponentData).                                   |
| SoldierEntityInteractionComponentData([GameObjectData](GameObjectData) other)                                 | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierEntityInteractionComponentData](SoldierEntityInteractionComponentData).                                 |
| SoldierEntityInteractionComponentData([GameDataContainer](GameDataContainer) other)                           | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierEntityInteractionComponentData](SoldierEntityInteractionComponentData).                           |
| SoldierEntityInteractionComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other)              | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierEntityInteractionComponentData](SoldierEntityInteractionComponentData).              |

## Methods

| Type                                                                           | Name            | Parameters                                     |
| ------------------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierEntityInteractionComponentData](SoldierEntityInteractionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierEntityInteractionComponentData](SoldierEntityInteractionComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
