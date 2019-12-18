---
title: PreRoundEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| PreRoundEntityData()                                                          | Create a new instance of this container type.                                                                               |
| PreRoundEntityData(PreRoundEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| PreRoundEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [PreRoundEntityData](PreRoundEntityData).                    |
| PreRoundEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [PreRoundEntityData](PreRoundEntityData).              |
| PreRoundEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PreRoundEntityData](PreRoundEntityData).                            |
| PreRoundEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PreRoundEntityData](PreRoundEntityData).                    |
| PreRoundEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PreRoundEntityData](PreRoundEntityData).              |
| PreRoundEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PreRoundEntityData](PreRoundEntityData). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| roundMaxPlayerCount   | number |             |
| roundRestartCountdown | number |             |
| roundMinPlayerCount   | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [PreRoundEntityData](PreRoundEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PreRoundEntityData](PreRoundEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
