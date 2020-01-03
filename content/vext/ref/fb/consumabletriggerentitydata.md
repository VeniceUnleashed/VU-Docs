---
title: ConsumableTriggerEntityData
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ConsumableTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| ConsumableTriggerEntityData(ConsumableTriggerEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| ConsumableTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [ConsumableTriggerEntityData](ConsumableTriggerEntityData).              |
| ConsumableTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [ConsumableTriggerEntityData](ConsumableTriggerEntityData).                    |
| ConsumableTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [ConsumableTriggerEntityData](ConsumableTriggerEntityData).              |
| ConsumableTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [ConsumableTriggerEntityData](ConsumableTriggerEntityData).                            |
| ConsumableTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ConsumableTriggerEntityData](ConsumableTriggerEntityData).                    |
| ConsumableTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ConsumableTriggerEntityData](ConsumableTriggerEntityData).              |
| ConsumableTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ConsumableTriggerEntityData](ConsumableTriggerEntityData). |

## Properties

| Name            | Type                               | Description |
| --------------- | ---------------------------------- | ----------- |
| consumableGroup | [ConsumableGroup](ConsumableGroup) |             |
| persistent      | bool                               |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ConsumableTriggerEntityData](ConsumableTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ConsumableTriggerEntityData](ConsumableTriggerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
