---
title: DestructionPartComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionPartComponentData()                                                          | Create a new instance of this container type.                                                                                                   |
| DestructionPartComponentData(DestructionPartComponentData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DestructionPartComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [DestructionPartComponentData](DestructionPartComponentData).                      |
| DestructionPartComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DestructionPartComponentData](DestructionPartComponentData).                    |
| DestructionPartComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DestructionPartComponentData](DestructionPartComponentData).              |
| DestructionPartComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DestructionPartComponentData](DestructionPartComponentData). |

## Properties

| Name             | Type                                                       | Description |
| ---------------- | ---------------------------------------------------------- | ----------- |
| objects          | [GameObjectData](GameObjectData)\[\]                       |             |
| partIndex        | number                                                     |             |
| connectivityType | [DestructionConnectivityType](DestructionConnectivityType) |             |
| fixed            | bool                                                       |             |
| fragile          | bool                                                       |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionPartComponentData](DestructionPartComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DestructionPartComponentData](DestructionPartComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
