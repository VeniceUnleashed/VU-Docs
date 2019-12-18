---
title: AntInteractionData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AntInteractionData()                                                          | Create a new instance of this container type.                                                                               |
| AntInteractionData(AntInteractionData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AntInteractionData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [AntInteractionData](AntInteractionData).                    |
| AntInteractionData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [AntInteractionData](AntInteractionData).              |
| AntInteractionData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [AntInteractionData](AntInteractionData).                            |
| AntInteractionData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AntInteractionData](AntInteractionData).                    |
| AntInteractionData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AntInteractionData](AntInteractionData).              |
| AntInteractionData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AntInteractionData](AntInteractionData). |

## Properties

| Name        | Type                                           | Description |
| ----------- | ---------------------------------------------- | ----------- |
| antBindings | [AntInteractionBinding](AntInteractionBinding) |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AntInteractionData](AntInteractionData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AntInteractionData](AntInteractionData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
