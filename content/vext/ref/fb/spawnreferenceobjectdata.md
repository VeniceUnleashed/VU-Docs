---
title: SpawnReferenceObjectData
---

Inherits from 
[ReferenceObjectData](/vext/ref/fb/referenceobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[SpawnReferenceObjectData](#constructor-0)**() |
| **[SpawnReferenceObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SpawnReferenceObjectData](#constructor-2)**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata)) |
| **[SpawnReferenceObjectData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SpawnReferenceObjectData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SpawnReferenceObjectData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "airdropTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "controllableInput" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "controllableTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "locationNameSid" >}} | string |
| {{< prop "locationTextSid" >}} | string |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "spawnProtectionFriendlyKilledCount" >}} | int |
| {{< prop "spawnProtectionFriendlyKilledTime" >}} | float |
| {{< prop "rotationRoll" >}} | float |
| {{< prop "throttle" >}} | float |
| {{< prop "initialSpawnDelay" >}} | float |
| {{< prop "spawnDelay" >}} | float |
| {{< prop "maxCount" >}} | int |
| {{< prop "maxCountSimultaneously" >}} | int |
| {{< prop "totalCountSimultaneouslyOfType" >}} | int |
| {{< prop "spawnAreaRadius" >}} | float |
| {{< prop "spawnProtectionRadius" >}} | float |
| {{< prop "rotationYaw" >}} | float |
| {{< prop "rotationPitch" >}} | float |
| {{< prop "initialVelocity" >}} | float |
| {{< prop "takeControlEntryIndex" >}} | int |
| {{< prop "spawnProtectionCheckAllTeams" >}} | bool |
| {{< prop "clearBangersOnSpawn" >}} | bool |
| {{< prop "tryToSpawnOutOfSight" >}} | bool |
| {{< prop "sendWeaponEvents" >}} | bool |
| {{< prop "takeControlOnTransformChange" >}} | bool |
| {{< prop "returnControlOnIdle" >}} | bool |
| {{< prop "autoSpawn" >}} | bool |
| {{< prop "useAsSpawnPoint" >}} | bool |
| {{< prop "lockedTeam" >}} | bool |
| {{< prop "initialAutoSpawn" >}} | bool |
| {{< prop "overwriteThrottle" >}} | bool |
| {{< prop "onlySendEventForHumanPlayers" >}} | bool |
| {{< prop "enabled" >}} | bool |
| {{< prop "isDynamicSpawn" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpawnReferenceObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpawnReferenceObjectData {#constructor-0}
> **SpawnReferenceObjectData**()

Creates a new [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata) frostbite instance.

### SpawnReferenceObjectData {#constructor-1}
> **SpawnReferenceObjectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SpawnReferenceObjectData {#constructor-2}
> **SpawnReferenceObjectData**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata))

Casts an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) | The instance to cast to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). |

### SpawnReferenceObjectData {#constructor-3}
> **SpawnReferenceObjectData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). |

### SpawnReferenceObjectData {#constructor-4}
> **SpawnReferenceObjectData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). |

### SpawnReferenceObjectData {#constructor-5}
> **SpawnReferenceObjectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata). |

## Properties
### {{% prop-heading "airdropTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "controllableInput" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "controllableTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "locationNameSid" %}}
> **string**

### {{% prop-heading "locationTextSid" %}}
> **string**

### {{% prop-heading "team" %}}
> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "spawnProtectionFriendlyKilledCount" %}}
> **int**

### {{% prop-heading "spawnProtectionFriendlyKilledTime" %}}
> **float**

### {{% prop-heading "rotationRoll" %}}
> **float**

### {{% prop-heading "throttle" %}}
> **float**

### {{% prop-heading "initialSpawnDelay" %}}
> **float**

### {{% prop-heading "spawnDelay" %}}
> **float**

### {{% prop-heading "maxCount" %}}
> **int**

### {{% prop-heading "maxCountSimultaneously" %}}
> **int**

### {{% prop-heading "totalCountSimultaneouslyOfType" %}}
> **int**

### {{% prop-heading "spawnAreaRadius" %}}
> **float**

### {{% prop-heading "spawnProtectionRadius" %}}
> **float**

### {{% prop-heading "rotationYaw" %}}
> **float**

### {{% prop-heading "rotationPitch" %}}
> **float**

### {{% prop-heading "initialVelocity" %}}
> **float**

### {{% prop-heading "takeControlEntryIndex" %}}
> **int**

### {{% prop-heading "spawnProtectionCheckAllTeams" %}}
> **bool**

### {{% prop-heading "clearBangersOnSpawn" %}}
> **bool**

### {{% prop-heading "tryToSpawnOutOfSight" %}}
> **bool**

### {{% prop-heading "sendWeaponEvents" %}}
> **bool**

### {{% prop-heading "takeControlOnTransformChange" %}}
> **bool**

### {{% prop-heading "returnControlOnIdle" %}}
> **bool**

### {{% prop-heading "autoSpawn" %}}
> **bool**

### {{% prop-heading "useAsSpawnPoint" %}}
> **bool**

### {{% prop-heading "lockedTeam" %}}
> **bool**

### {{% prop-heading "initialAutoSpawn" %}}
> **bool**

### {{% prop-heading "overwriteThrottle" %}}
> **bool**

### {{% prop-heading "onlySendEventForHumanPlayers" %}}
> **bool**

### {{% prop-heading "enabled" %}}
> **bool**

### {{% prop-heading "isDynamicSpawn" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata) type.

