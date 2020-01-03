---
title: HitReactionComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| HitReactionComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| HitReactionComponentData(HitReactionComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| HitReactionComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [HitReactionComponentData](HitReactionComponentData).                      |
| HitReactionComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [HitReactionComponentData](HitReactionComponentData).                    |
| HitReactionComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [HitReactionComponentData](HitReactionComponentData).              |
| HitReactionComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HitReactionComponentData](HitReactionComponentData). |

## Properties

| Name               | Type                                                       | Description |
| ------------------ | ---------------------------------------------------------- | ----------- |
| hitReactionBinding | [HitReactionComponentBinding](HitReactionComponentBinding) |             |
| enabled            | bool                                                       |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [HitReactionComponentData](HitReactionComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HitReactionComponentData](HitReactionComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
