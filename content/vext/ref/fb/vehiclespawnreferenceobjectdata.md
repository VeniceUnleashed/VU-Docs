---
title: VehicleSpawnReferenceObjectData
---
### Base Classes

[SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| VehicleSpawnReferenceObjectData()                                                           | Create a new instance of this container type.                                                                                                          |
| VehicleSpawnReferenceObjectData(VehicleSpawnReferenceObjectData other)                      | Create a reference copy of an instance of the same type.                                                                                               |
| VehicleSpawnReferenceObjectData([SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/) other) | Upcast an instance of type [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata/) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata/). |
| VehicleSpawnReferenceObjectData([ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) other)           | Upcast an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata/) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata/).           |
| VehicleSpawnReferenceObjectData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                     | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata/).                     |
| VehicleSpawnReferenceObjectData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)               | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata/).               |
| VehicleSpawnReferenceObjectData([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata/).  |

## Properties

| Name                           | Type                                                    | Description |
| ------------------------------ | ------------------------------------------------------- | ----------- |
| airDropCarrierTransform        | [LinearTransform](/vext/ref/shared/class/lineartransform) |             |
| timeUntilAbandoned             | number                                                  |             |
| timeUntilAbandonedIsDestroyed  | number                                                  |             |
| enterRestriction               | [EntryEnterRestriction](/vext/ref/fb/entryenterrestriction/)          |             |
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
| [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
