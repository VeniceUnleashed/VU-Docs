---
title: CharacterSpawnReferenceObjectData
---

Inherits from 
[SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[CharacterSpawnReferenceObjectData](#constructor-0)**() |
| **[CharacterSpawnReferenceObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CharacterSpawnReferenceObjectData](#constructor-2)**(other: [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata)) |
| **[CharacterSpawnReferenceObjectData](#constructor-3)**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata)) |
| **[CharacterSpawnReferenceObjectData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterSpawnReferenceObjectData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterSpawnReferenceObjectData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "playerType" >}} | [PlayerSpawnType](/vext/ref/fb/playerspawntype) |
| {{< prop "vehicleEntryIndex" >}} | int |
| {{< prop "template" >}} | [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata) \| nil |
| {{< prop "humanTargetPreference" >}} | float |
| {{< prop "minimapIcon" >}} | [UIHudIcon](/vext/ref/fb/uihudicon) |
| {{< prop "allowFallbackOnNextAvailabeVehicleEntry" >}} | bool |
| {{< prop "checkMaxPlayersInVehicle" >}} | bool |
| {{< prop "affectMinimapPosition" >}} | bool |
| {{< prop "isTarget" >}} | bool |
| {{< prop "ignoreVehicleIcon" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterSpawnReferenceObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterSpawnReferenceObjectData {#constructor-0}
> **CharacterSpawnReferenceObjectData**()

Creates a new [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata) frostbite instance.

### CharacterSpawnReferenceObjectData {#constructor-1}
> **CharacterSpawnReferenceObjectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CharacterSpawnReferenceObjectData {#constructor-2}
> **CharacterSpawnReferenceObjectData**(other: [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata))

Casts an instance of type [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpawnReferenceObjectData](/vext/ref/fb/spawnreferenceobjectdata) | The instance to cast to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). |

### CharacterSpawnReferenceObjectData {#constructor-3}
> **CharacterSpawnReferenceObjectData**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata))

Casts an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) | The instance to cast to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). |

### CharacterSpawnReferenceObjectData {#constructor-4}
> **CharacterSpawnReferenceObjectData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). |

### CharacterSpawnReferenceObjectData {#constructor-5}
> **CharacterSpawnReferenceObjectData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). |

### CharacterSpawnReferenceObjectData {#constructor-6}
> **CharacterSpawnReferenceObjectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata). |

## Properties
### {{% prop-heading "playerType" %}}
> **[PlayerSpawnType](/vext/ref/fb/playerspawntype)**

### {{% prop-heading "vehicleEntryIndex" %}}
> **int**

### {{% prop-heading "template" %}}
> **[SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata)** | **nil**

### {{% prop-heading "humanTargetPreference" %}}
> **float**

### {{% prop-heading "minimapIcon" %}}
> **[UIHudIcon](/vext/ref/fb/uihudicon)**

### {{% prop-heading "allowFallbackOnNextAvailabeVehicleEntry" %}}
> **bool**

### {{% prop-heading "checkMaxPlayersInVehicle" %}}
> **bool**

### {{% prop-heading "affectMinimapPosition" %}}
> **bool**

### {{% prop-heading "isTarget" %}}
> **bool**

### {{% prop-heading "ignoreVehicleIcon" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterSpawnReferenceObjectData](/vext/ref/fb/characterspawnreferenceobjectdata) type.

