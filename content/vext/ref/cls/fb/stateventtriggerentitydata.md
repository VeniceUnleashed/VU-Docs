---
title: StatEventTriggerEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| StatEventTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| StatEventTriggerEntityData(StatEventTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| StatEventTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [StatEventTriggerEntityData](StatEventTriggerEntityData).                    |
| StatEventTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [StatEventTriggerEntityData](StatEventTriggerEntityData).              |
| StatEventTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [StatEventTriggerEntityData](StatEventTriggerEntityData).                            |
| StatEventTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [StatEventTriggerEntityData](StatEventTriggerEntityData).                    |
| StatEventTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [StatEventTriggerEntityData](StatEventTriggerEntityData).              |
| StatEventTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [StatEventTriggerEntityData](StatEventTriggerEntityData). |

## Properties

| Name       | Type                   | Description |
| ---------- | ---------------------- | ----------- |
| statEvent  | [StatEvent](StatEvent) |             |
| miscParamX | string                 |             |
| miscParamY | string                 |             |
| sendToAll  | bool                   |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [StatEventTriggerEntityData](StatEventTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [StatEventTriggerEntityData](StatEventTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
