---
title: MultipleTriggerEntityData
---
### Base Classes

[TriggerEventEntityData](TriggerEventEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| MultipleTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                             |
| MultipleTriggerEntityData(MultipleTriggerEntityData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| MultipleTriggerEntityData([TriggerEventEntityData](TriggerEventEntityData) other)    | Upcast an instance of type [TriggerEventEntityData](TriggerEventEntityData) to [MultipleTriggerEntityData](MultipleTriggerEntityData).    |
| MultipleTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [MultipleTriggerEntityData](MultipleTriggerEntityData).              |
| MultipleTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [MultipleTriggerEntityData](MultipleTriggerEntityData).                    |
| MultipleTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [MultipleTriggerEntityData](MultipleTriggerEntityData).              |
| MultipleTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [MultipleTriggerEntityData](MultipleTriggerEntityData).                            |
| MultipleTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [MultipleTriggerEntityData](MultipleTriggerEntityData).                    |
| MultipleTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [MultipleTriggerEntityData](MultipleTriggerEntityData).              |
| MultipleTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MultipleTriggerEntityData](MultipleTriggerEntityData). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| triggerAmount | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MultipleTriggerEntityData](MultipleTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MultipleTriggerEntityData](MultipleTriggerEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
