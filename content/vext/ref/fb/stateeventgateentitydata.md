---
title: StateEventGateEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| StateEventGateEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| StateEventGateEntityData(StateEventGateEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| StateEventGateEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [StateEventGateEntityData](StateEventGateEntityData).                    |
| StateEventGateEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [StateEventGateEntityData](StateEventGateEntityData).              |
| StateEventGateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StateEventGateEntityData](StateEventGateEntityData).                            |
| StateEventGateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StateEventGateEntityData](StateEventGateEntityData).                    |
| StateEventGateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StateEventGateEntityData](StateEventGateEntityData).              |
| StateEventGateEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StateEventGateEntityData](StateEventGateEntityData). |

## Properties

| Name         | Type                             | Description |
| ------------ | -------------------------------- | ----------- |
| checkedState | [EventGateState](EventGateState) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StateEventGateEntityData](StateEventGateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StateEventGateEntityData](StateEventGateEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
