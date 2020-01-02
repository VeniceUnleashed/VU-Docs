---
title: EventIfSwitchEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| EventIfSwitchEntityData()                                                          | Create a new instance of this container type.                                                                                         |
| EventIfSwitchEntityData(EventIfSwitchEntityData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| EventIfSwitchEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [EventIfSwitchEntityData](EventIfSwitchEntityData).                    |
| EventIfSwitchEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [EventIfSwitchEntityData](EventIfSwitchEntityData).              |
| EventIfSwitchEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [EventIfSwitchEntityData](EventIfSwitchEntityData).                            |
| EventIfSwitchEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [EventIfSwitchEntityData](EventIfSwitchEntityData).                    |
| EventIfSwitchEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [EventIfSwitchEntityData](EventIfSwitchEntityData).              |
| EventIfSwitchEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EventIfSwitchEntityData](EventIfSwitchEntityData). |

## Properties

| Name       | Type | Description |
| ---------- | ---- | ----------- |
| runOnce    | bool |             |
| startState | bool |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [EventIfSwitchEntityData](EventIfSwitchEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [EventIfSwitchEntityData](EventIfSwitchEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
