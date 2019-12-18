---
title: AIProximityReactionsComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AIProximityReactionsComponentData()                                                          | Create a new instance of this container type.                                                                                                             |
| AIProximityReactionsComponentData(AIProximityReactionsComponentData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| AIProximityReactionsComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [AIProximityReactionsComponentData](AIProximityReactionsComponentData).                      |
| AIProximityReactionsComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [AIProximityReactionsComponentData](AIProximityReactionsComponentData).                    |
| AIProximityReactionsComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [AIProximityReactionsComponentData](AIProximityReactionsComponentData).              |
| AIProximityReactionsComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [AIProximityReactionsComponentData](AIProximityReactionsComponentData). |

## Properties

| Name                     | Type                                                       | Description |
| ------------------------ | ---------------------------------------------------------- | ----------- |
| binding                  | [AIProximityReactionsBinding](AIProximityReactionsBinding) |             |
| minExplosionImpulseForce | number                                                     |             |
| maxExplosionLookDistance | number                                                     |             |
| fireReactionDistance     | number                                                     |             |
| enabled                  | bool                                                       |             |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AIProximityReactionsComponentData](AIProximityReactionsComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [AIProximityReactionsComponentData](AIProximityReactionsComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
