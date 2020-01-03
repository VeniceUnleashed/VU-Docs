---
title: VehicleSpawnReferenceObjectData
---
### Base Classes

[SpawnReferenceObjectData](SpawnReferenceObjectData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VehicleSpawnReferenceObjectData()                                                           | Create a new instance of this container type.                                                                                                          |
| VehicleSpawnReferenceObjectData(VehicleSpawnReferenceObjectData other)                      | Create a reference copy of an instance of the same type.                                                                                               |
| VehicleSpawnReferenceObjectData([SpawnReferenceObjectData](SpawnReferenceObjectData) other) | Upcast an instance of type [SpawnReferenceObjectData](SpawnReferenceObjectData) to [VehicleSpawnReferenceObjectData](VehicleSpawnReferenceObjectData). |
| VehicleSpawnReferenceObjectData([ReferenceObjectData](ReferenceObjectData) other)           | Upcast an instance of type [ReferenceObjectData](ReferenceObjectData) to [VehicleSpawnReferenceObjectData](VehicleSpawnReferenceObjectData).           |
| VehicleSpawnReferenceObjectData([GameObjectData](GameObjectData) other)                     | Upcast an instance of type [GameObjectData](GameObjectData) to [VehicleSpawnReferenceObjectData](VehicleSpawnReferenceObjectData).                     |
| VehicleSpawnReferenceObjectData([GameDataContainer](GameDataContainer) other)               | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VehicleSpawnReferenceObjectData](VehicleSpawnReferenceObjectData).               |
| VehicleSpawnReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSpawnReferenceObjectData](VehicleSpawnReferenceObjectData).  |

## Properties

| Name                           | Type                                                    | Description |
| ------------------------------ | ------------------------------------------------------- | ----------- |
| airDropCarrierTransform        | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| timeUntilAbandoned             | number                                                  |             |
| timeUntilAbandonedIsDestroyed  | number                                                  |             |
| enterRestriction               | [EntryEnterRestriction](EntryEnterRestriction)          |             |
| botBailWhenHealthBelow         | number                                                  |             |
| botBailOutDelay                | number                                                  |             |
| wreckDuration                  | number                                                  |             |
| respawnRange                   | number                                                  |             |
| activeStanceEntryIndex         | number                                                  |             |
| activeStance                   | number                                                  |             |
| keepAliveRadius                | number                                                  |             |
| vehicleIsNearDistance          | number                                                  |             |
| setTeamOnSpawn                 | bool                                                    |             |
| applyDamageToAbandonedVehicles | bool                                                    |             |
| enableAvailableSeatOutput      | bool                                                    |             |
| disregardSpawnAllowedSetting   | bool                                                    |             |
| affectedByImpulse              | bool                                                    |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [VehicleSpawnReferenceObjectData](VehicleSpawnReferenceObjectData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleSpawnReferenceObjectData](VehicleSpawnReferenceObjectData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
