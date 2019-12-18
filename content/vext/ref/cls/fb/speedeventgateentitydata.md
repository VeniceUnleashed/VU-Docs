---
title: SpeedEventGateEntityData (Frostbite Container)
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SpeedEventGateEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| SpeedEventGateEntityData(SpeedEventGateEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SpeedEventGateEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [SpeedEventGateEntityData](SpeedEventGateEntityData).                    |
| SpeedEventGateEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [SpeedEventGateEntityData](SpeedEventGateEntityData).              |
| SpeedEventGateEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [SpeedEventGateEntityData](SpeedEventGateEntityData).                            |
| SpeedEventGateEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpeedEventGateEntityData](SpeedEventGateEntityData).                    |
| SpeedEventGateEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpeedEventGateEntityData](SpeedEventGateEntityData).              |
| SpeedEventGateEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpeedEventGateEntityData](SpeedEventGateEntityData). |

## Properties

| Name     | Type   | Description |
| -------- | ------ | ----------- |
| minSpeed | number |             |
| maxSpeed | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpeedEventGateEntityData](SpeedEventGateEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpeedEventGateEntityData](SpeedEventGateEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
