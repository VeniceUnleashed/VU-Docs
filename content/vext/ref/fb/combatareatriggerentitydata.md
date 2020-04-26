---
title: CombatAreaTriggerEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[CombatAreaTriggerEntityData](#constructor-0)**() |
| **[CombatAreaTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CombatAreaTriggerEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[CombatAreaTriggerEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[CombatAreaTriggerEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CombatAreaTriggerEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CombatAreaTriggerEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CombatAreaTriggerEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxRandomSpawnHeight" >}} | float |
| {{< prop "spawnHeight" >}} | float |
| {{< prop "timeToReturn" >}} | int |
| {{< prop "deserterProjectile" >}} | [BulletEntityData](/vext/ref/fb/bulletentitydata) \| nil |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "strikeRadius" >}} | float |
| {{< prop "initalSpeed" >}} | float |
| {{< prop "isAiAllowedOutside" >}} | bool |
| {{< prop "isTeamSpecific" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CombatAreaTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CombatAreaTriggerEntityData {#constructor-0}
> **CombatAreaTriggerEntityData**()

Creates a new [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata) frostbite instance.

### CombatAreaTriggerEntityData {#constructor-1}
> **CombatAreaTriggerEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CombatAreaTriggerEntityData {#constructor-2}
> **CombatAreaTriggerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). |

### CombatAreaTriggerEntityData {#constructor-3}
> **CombatAreaTriggerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). |

### CombatAreaTriggerEntityData {#constructor-4}
> **CombatAreaTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). |

### CombatAreaTriggerEntityData {#constructor-5}
> **CombatAreaTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). |

### CombatAreaTriggerEntityData {#constructor-6}
> **CombatAreaTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). |

### CombatAreaTriggerEntityData {#constructor-7}
> **CombatAreaTriggerEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata). |

## Properties
### {{% prop-heading "maxRandomSpawnHeight" %}}
> **float**

### {{% prop-heading "spawnHeight" %}}
> **float**

### {{% prop-heading "timeToReturn" %}}
> **int**

### {{% prop-heading "deserterProjectile" %}}
> **[BulletEntityData](/vext/ref/fb/bulletentitydata)** | **nil**

### {{% prop-heading "team" %}}
> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "strikeRadius" %}}
> **float**

### {{% prop-heading "initalSpeed" %}}
> **float**

### {{% prop-heading "isAiAllowedOutside" %}}
> **bool**

### {{% prop-heading "isTeamSpecific" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata) type.

