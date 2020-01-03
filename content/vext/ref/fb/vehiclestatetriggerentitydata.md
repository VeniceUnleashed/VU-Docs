---
title: VehicleStateTriggerEntityData
---
### Base Classes

[TriggerEntityData](/vext/ref/fb/triggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| VehicleStateTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                     |
| VehicleStateTriggerEntityData(VehicleStateTriggerEntityData other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| VehicleStateTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/).              |
| VehicleStateTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/).                    |
| VehicleStateTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/).              |
| VehicleStateTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/).                            |
| VehicleStateTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/).                    |
| VehicleStateTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/).              |
| VehicleStateTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/). |

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
| [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
