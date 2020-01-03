---
title: KillAllEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| KillAllEntityData()                                                          | Create a new instance of this container type.                                                                             |
| KillAllEntityData(KillAllEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| KillAllEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [KillAllEntityData](KillAllEntityData).                    |
| KillAllEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [KillAllEntityData](KillAllEntityData).              |
| KillAllEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [KillAllEntityData](KillAllEntityData).                            |
| KillAllEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [KillAllEntityData](KillAllEntityData).                    |
| KillAllEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [KillAllEntityData](KillAllEntityData).              |
| KillAllEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [KillAllEntityData](KillAllEntityData). |

## Properties

| Name                 | Type | Description |
| -------------------- | ---- | ----------- |
| killAllHumanSoldiers | bool |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [KillAllEntityData](KillAllEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [KillAllEntityData](KillAllEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
