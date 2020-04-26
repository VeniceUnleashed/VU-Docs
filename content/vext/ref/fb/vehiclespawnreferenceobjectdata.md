---
title: VehicleSpawnReferenceObjectData
---

Inherits from 
[SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleSpawnReferenceObjectData](#constructor-0)**() |
| **[VehicleSpawnReferenceObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleSpawnReferenceObjectData](#constructor-2)**(other: [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata)) |
| **[VehicleSpawnReferenceObjectData](#constructor-3)**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata)) |
| **[VehicleSpawnReferenceObjectData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VehicleSpawnReferenceObjectData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VehicleSpawnReferenceObjectData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "airDropCarrierTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "timeUntilAbandoned" >}} | float |
| {{< prop "timeUntilAbandonedIsDestroyed" >}} | float |
| {{< prop "enterRestriction" >}} | [EntryEnterRestriction](/vext/ref/fb/entryenterrestriction) |
| {{< prop "botBailWhenHealthBelow" >}} | float |
| {{< prop "botBailOutDelay" >}} | float |
| {{< prop "wreckDuration" >}} | float |
| {{< prop "respawnRange" >}} | float |
| {{< prop "activeStanceEntryIndex" >}} | int |
| {{< prop "activeStance" >}} | int |
| {{< prop "keepAliveRadius" >}} | float |
| {{< prop "vehicleIsNearDistance" >}} | float |
| {{< prop "setTeamOnSpawn" >}} | bool |
| {{< prop "applyDamageToAbandonedVehicles" >}} | bool |
| {{< prop "enableAvailableSeatOutput" >}} | bool |
| {{< prop "disregardSpawnAllowedSetting" >}} | bool |
| {{< prop "affectedByImpulse" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleSpawnReferenceObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleSpawnReferenceObjectData {#constructor-0}
> **VehicleSpawnReferenceObjectData**()

Creates a new [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata) frostbite instance.

### VehicleSpawnReferenceObjectData {#constructor-1}
> **VehicleSpawnReferenceObjectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleSpawnReferenceObjectData {#constructor-2}
> **VehicleSpawnReferenceObjectData**(other: [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata))

Casts an instance of type [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata) | The instance to cast to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). |

### VehicleSpawnReferenceObjectData {#constructor-3}
> **VehicleSpawnReferenceObjectData**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata))

Casts an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) | The instance to cast to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). |

### VehicleSpawnReferenceObjectData {#constructor-4}
> **VehicleSpawnReferenceObjectData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). |

### VehicleSpawnReferenceObjectData {#constructor-5}
> **VehicleSpawnReferenceObjectData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). |

### VehicleSpawnReferenceObjectData {#constructor-6}
> **VehicleSpawnReferenceObjectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata). |

## Properties
### {{% prop-heading "airDropCarrierTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "timeUntilAbandoned" %}}
> **float**

### {{% prop-heading "timeUntilAbandonedIsDestroyed" %}}
> **float**

### {{% prop-heading "enterRestriction" %}}
> **[EntryEnterRestriction](/vext/ref/fb/entryenterrestriction)**

### {{% prop-heading "botBailWhenHealthBelow" %}}
> **float**

### {{% prop-heading "botBailOutDelay" %}}
> **float**

### {{% prop-heading "wreckDuration" %}}
> **float**

### {{% prop-heading "respawnRange" %}}
> **float**

### {{% prop-heading "activeStanceEntryIndex" %}}
> **int**

### {{% prop-heading "activeStance" %}}
> **int**

### {{% prop-heading "keepAliveRadius" %}}
> **float**

### {{% prop-heading "vehicleIsNearDistance" %}}
> **float**

### {{% prop-heading "setTeamOnSpawn" %}}
> **bool**

### {{% prop-heading "applyDamageToAbandonedVehicles" %}}
> **bool**

### {{% prop-heading "enableAvailableSeatOutput" %}}
> **bool**

### {{% prop-heading "disregardSpawnAllowedSetting" %}}
> **bool**

### {{% prop-heading "affectedByImpulse" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleSpawnReferenceObjectData](/vext/ref/fb/vehiclespawnreferenceobjectdata) type.

