---
title: DelayTriggerEntityData (Frostbite Container)
---
### Base Classes

[TriggerEventEntityData](TriggerEventEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| DelayTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| DelayTriggerEntityData(DelayTriggerEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| DelayTriggerEntityData([TriggerEventEntityData](TriggerEventEntityData) other)    | Upcast an instance of type [TriggerEventEntityData](TriggerEventEntityData) to [DelayTriggerEntityData](DelayTriggerEntityData).    |
| DelayTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [DelayTriggerEntityData](DelayTriggerEntityData).              |
| DelayTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [DelayTriggerEntityData](DelayTriggerEntityData).                    |
| DelayTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [DelayTriggerEntityData](DelayTriggerEntityData).              |
| DelayTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [DelayTriggerEntityData](DelayTriggerEntityData).                            |
| DelayTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [DelayTriggerEntityData](DelayTriggerEntityData).                    |
| DelayTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [DelayTriggerEntityData](DelayTriggerEntityData).              |
| DelayTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [DelayTriggerEntityData](DelayTriggerEntityData). |

## Properties

| Name             | Type | Description |
| ---------------- | ---- | ----------- |
| autoTriggerEvent | bool |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DelayTriggerEntityData](DelayTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [DelayTriggerEntityData](DelayTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
