---
title: DifficultyData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[DifficultyData](#constructor-0)**() |
| **[DifficultyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DifficultyData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "stickyBoxModifier" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "snapBoxModifier" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "humanHealthModifier" >}} | float |
| {{< prop "gameType" >}} | [PersistenceGameType](/vext/ref/fb/persistencegametype) |
| {{< prop "friendsHealthModifier" >}} | float |
| {{< prop "friendlyDamageModifier" >}} | float |
| {{< prop "vehicleDamageModifier" >}} | float |
| {{< prop "humanInCriticalHealth" >}} | float |
| {{< prop "enemiesHealthModifier" >}} | float |
| {{< prop "humanRegenerationRateModifier" >}} | float |
| {{< prop "humanInCriticalHealthDamageModifier" >}} | float |
| {{< prop "interactiveManDownDamageModifier" >}} | float |
| {{< prop "interactiveManDownTimeMultiplier" >}} | float |
| {{< prop "interactiveManDownReviveTime" >}} | float |
| {{< prop "adrenalineKillLimit" >}} | int |
| {{< prop "criticalHealthJesusModeTimeModifier" >}} | float |
| {{< prop "difficulty" >}} | [Difficulty](/vext/ref/fb/difficulty) |
| {{< prop "criticalFakeImmortalModifier" >}} | float |
| {{< prop "suckZoomModifier" >}} | float |
| {{< prop "aiData" >}} | [GameAIDifficultyData](/vext/ref/fb/gameaidifficultydata) \| nil |
| {{< prop "aiBulletDamageHumanCooldown" >}} | float |
| {{< prop "usePitchZoomSnap" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DifficultyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DifficultyData {#constructor-0}
> **DifficultyData**()

Creates a new [DifficultyData](/vext/ref/fb/difficultydata) frostbite instance.

### DifficultyData {#constructor-1}
> **DifficultyData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DifficultyData](/vext/ref/fb/difficultydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DifficultyData {#constructor-2}
> **DifficultyData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DifficultyData](/vext/ref/fb/difficultydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DifficultyData](/vext/ref/fb/difficultydata). |

## Properties
### {{% prop-heading "stickyBoxModifier" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "snapBoxModifier" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "humanHealthModifier" %}}
> **float**

### {{% prop-heading "gameType" %}}
> **[PersistenceGameType](/vext/ref/fb/persistencegametype)**

### {{% prop-heading "friendsHealthModifier" %}}
> **float**

### {{% prop-heading "friendlyDamageModifier" %}}
> **float**

### {{% prop-heading "vehicleDamageModifier" %}}
> **float**

### {{% prop-heading "humanInCriticalHealth" %}}
> **float**

### {{% prop-heading "enemiesHealthModifier" %}}
> **float**

### {{% prop-heading "humanRegenerationRateModifier" %}}
> **float**

### {{% prop-heading "humanInCriticalHealthDamageModifier" %}}
> **float**

### {{% prop-heading "interactiveManDownDamageModifier" %}}
> **float**

### {{% prop-heading "interactiveManDownTimeMultiplier" %}}
> **float**

### {{% prop-heading "interactiveManDownReviveTime" %}}
> **float**

### {{% prop-heading "adrenalineKillLimit" %}}
> **int**

### {{% prop-heading "criticalHealthJesusModeTimeModifier" %}}
> **float**

### {{% prop-heading "difficulty" %}}
> **[Difficulty](/vext/ref/fb/difficulty)**

### {{% prop-heading "criticalFakeImmortalModifier" %}}
> **float**

### {{% prop-heading "suckZoomModifier" %}}
> **float**

### {{% prop-heading "aiData" %}}
> **[GameAIDifficultyData](/vext/ref/fb/gameaidifficultydata)** | **nil**

### {{% prop-heading "aiBulletDamageHumanCooldown" %}}
> **float**

### {{% prop-heading "usePitchZoomSnap" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DifficultyData](/vext/ref/fb/difficultydata) type.

