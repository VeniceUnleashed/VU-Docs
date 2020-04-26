---
title: LifeCounterEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[LifeCounterEntityData](#constructor-0)**() |
| **[LifeCounterEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LifeCounterEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[LifeCounterEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[LifeCounterEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[LifeCounterEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[LifeCounterEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[LifeCounterEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "startingLifeCount" >}} | int |
| {{< prop "displayTime" >}} | float |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "lifeTresholdValues" >}} | int[] |
| {{< prop "uiShowCountLowerThreshold" >}} | int |
| {{< prop "uiShowCountUpperThreshold" >}} | int |
| {{< prop "baseCount" >}} | int |
| {{< prop "reinforceTable" >}} | float[] |
| {{< prop "reinforceThreshold" >}} | int |
| {{< prop "reinforceMessageSid" >}} | string |
| {{< prop "fightHarderTreshold" >}} | float |
| {{< prop "defensiveKillRadius" >}} | float |
| {{< prop "fallbackTime" >}} | float |
| {{< prop "fightHarderMessageSid" >}} | string |
| {{< prop "attacker" >}} | bool |
| {{< prop "setBestSquadSpawner" >}} | bool |
| {{< prop "simpleReinforce" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LifeCounterEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LifeCounterEntityData {#constructor-0}
> **LifeCounterEntityData**()

Creates a new [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata) frostbite instance.

### LifeCounterEntityData {#constructor-1}
> **LifeCounterEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LifeCounterEntityData {#constructor-2}
> **LifeCounterEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). |

### LifeCounterEntityData {#constructor-3}
> **LifeCounterEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). |

### LifeCounterEntityData {#constructor-4}
> **LifeCounterEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). |

### LifeCounterEntityData {#constructor-5}
> **LifeCounterEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). |

### LifeCounterEntityData {#constructor-6}
> **LifeCounterEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). |

### LifeCounterEntityData {#constructor-7}
> **LifeCounterEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata). |

## Properties
### {{% prop-heading "startingLifeCount" %}}
> **int**

### {{% prop-heading "displayTime" %}}
> **float**

### {{% prop-heading "teamId" %}}
> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "lifeTresholdValues" %}}
> **int**[]

### {{% prop-heading "uiShowCountLowerThreshold" %}}
> **int**

### {{% prop-heading "uiShowCountUpperThreshold" %}}
> **int**

### {{% prop-heading "baseCount" %}}
> **int**

### {{% prop-heading "reinforceTable" %}}
> **float**[]

### {{% prop-heading "reinforceThreshold" %}}
> **int**

### {{% prop-heading "reinforceMessageSid" %}}
> **string**

### {{% prop-heading "fightHarderTreshold" %}}
> **float**

### {{% prop-heading "defensiveKillRadius" %}}
> **float**

### {{% prop-heading "fallbackTime" %}}
> **float**

### {{% prop-heading "fightHarderMessageSid" %}}
> **string**

### {{% prop-heading "attacker" %}}
> **bool**

### {{% prop-heading "setBestSquadSpawner" %}}
> **bool**

### {{% prop-heading "simpleReinforce" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LifeCounterEntityData](/vext/ref/fb/lifecounterentitydata) type.

