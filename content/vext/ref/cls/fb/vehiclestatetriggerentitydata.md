---
title: VehicleStateTriggerEntityData (Frostbite Container)
---
### Base Classes

[TriggerEntityData](TriggerEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleStateTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| VehicleStateTriggerEntityData(VehicleStateTriggerEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VehicleStateTriggerEntityData([TriggerEntityData](TriggerEntityData) other)              | Upcast an instance of type [TriggerEntityData](TriggerEntityData) to [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData).              |
| VehicleStateTriggerEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData).                    |
| VehicleStateTriggerEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData).              |
| VehicleStateTriggerEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData).                            |
| VehicleStateTriggerEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData).                    |
| VehicleStateTriggerEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData).              |
| VehicleStateTriggerEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData). |

## Properties

| Name                        | Type   | Description |
| --------------------------- | ------ | ----------- |
| lockAmount                  | number |             |
| bulletCount                 | number |             |
| healthToSet                 | number |             |
| seatSpecificIndexForHuman   | number |             |
| seatSpecificIndexForAi      | number |             |
| destructionRadius           | number |             |
| healthToCheck               | number |             |
| allowHumanToEnterAllSeats   | bool   |             |
| allowAiToEnterAllSeats      | bool   |             |
| banAiFromSpecificSeat       | bool   |             |
| triggerCriticalOnHealthSet  | bool   |             |
| checkHealthGreaterOrEqual   | bool   |             |
| restrictHumanToSpecificSeat | bool   |             |
| shouldDestroyVehicles       | bool   |             |
| shouldDestroyBangers        | bool   |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [VehicleStateTriggerEntityData](VehicleStateTriggerEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
