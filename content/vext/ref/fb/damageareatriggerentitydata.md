---
title: DamageAreaTriggerEntityData
---

Inherits from 
[TriggerEntityData](/vext/ref/fb/triggerentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[DamageAreaTriggerEntityData](#constructor-0)**() |
| **[DamageAreaTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DamageAreaTriggerEntityData](#constructor-2)**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata)) |
| **[DamageAreaTriggerEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[DamageAreaTriggerEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[DamageAreaTriggerEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[DamageAreaTriggerEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[DamageAreaTriggerEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[DamageAreaTriggerEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "damagePerSecond" >}} | float |
| {{< prop "teamOfImmortalCharacters" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "damageTime" >}} | float |
| {{< prop "damageVehicles" >}} | bool |
| {{< prop "damageBangers" >}} | bool |
| {{< prop "excludeImmortalCharactersInTeam" >}} | bool |
| {{< prop "damageCharacters" >}} | bool |
| {{< prop "excludeShieldedSoldiers" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DamageAreaTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DamageAreaTriggerEntityData {#constructor-0}
> **DamageAreaTriggerEntityData**()

Creates a new [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata) frostbite instance.

### DamageAreaTriggerEntityData {#constructor-1}
> **DamageAreaTriggerEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DamageAreaTriggerEntityData {#constructor-2}
> **DamageAreaTriggerEntityData**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata))

Casts an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata) to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TriggerEntityData](/vext/ref/fb/triggerentitydata) | The instance to cast to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). |

### DamageAreaTriggerEntityData {#constructor-3}
> **DamageAreaTriggerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). |

### DamageAreaTriggerEntityData {#constructor-4}
> **DamageAreaTriggerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). |

### DamageAreaTriggerEntityData {#constructor-5}
> **DamageAreaTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). |

### DamageAreaTriggerEntityData {#constructor-6}
> **DamageAreaTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). |

### DamageAreaTriggerEntityData {#constructor-7}
> **DamageAreaTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). |

### DamageAreaTriggerEntityData {#constructor-8}
> **DamageAreaTriggerEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata). |

## Properties
### {{% prop-heading "damagePerSecond" %}}
> **float**

### {{% prop-heading "teamOfImmortalCharacters" %}}
> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "damageTime" %}}
> **float**

### {{% prop-heading "damageVehicles" %}}
> **bool**

### {{% prop-heading "damageBangers" %}}
> **bool**

### {{% prop-heading "excludeImmortalCharactersInTeam" %}}
> **bool**

### {{% prop-heading "damageCharacters" %}}
> **bool**

### {{% prop-heading "excludeShieldedSoldiers" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DamageAreaTriggerEntityData](/vext/ref/fb/damageareatriggerentitydata) type.

