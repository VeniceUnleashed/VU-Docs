---
title: UISoldierCompData
---

Inherits from [UIComponentData](/vext/ref/fb/uicomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[UISoldierCompData](#constructor-0)**() |
| **[UISoldierCompData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UISoldierCompData](#constructor-2)**(other: [UIComponentData](/vext/ref/fb/uicomponentdata)) |
| **[UISoldierCompData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[UISoldierCompData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "criticalHealthThreshold" >}} | float |
| {{< prop "hitShaderDamageMultiplier" >}} | float |
| {{< prop "hitShaderMinDamage" >}} | float |
| {{< prop "ekgLineThickness" >}} | float |
| {{< prop "shockTraumaAbilityIndex" >}} | int |
| {{< prop "rangerPTProgramAbilityIndex" >}} | int |
| {{< prop "focusAbilityIndex" >}} | int |
| {{< prop "ekgLineAlpha" >}} | float |
| {{< prop "hitShaderGradientDurationMultiplier" >}} | float |
| {{< prop "hitShaderMaxDamage" >}} | float |
| {{< prop "hitShaderIndicatorDurationMultiplier" >}} | float |
| {{< prop "useVehicleTeamSpawn" >}} | bool |
| {{< prop "useSquadSpawn" >}} | bool |
| {{< prop "spawnOnSquadLeaders" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UISoldierCompData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UISoldierCompData {#constructor-0}

> **UISoldierCompData**()

Creates a new [UISoldierCompData](/vext/ref/fb/uisoldiercompdata) frostbite instance.

### UISoldierCompData {#constructor-1}

> **UISoldierCompData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UISoldierCompData](/vext/ref/fb/uisoldiercompdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UISoldierCompData {#constructor-2}

> **UISoldierCompData**(other: [UIComponentData](/vext/ref/fb/uicomponentdata))

Casts an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata) to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIComponentData](/vext/ref/fb/uicomponentdata) | The instance to cast to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata). |

### UISoldierCompData {#constructor-3}

> **UISoldierCompData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata). |

### UISoldierCompData {#constructor-4}

> **UISoldierCompData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata). |

## Properties

### {{% prop-heading "criticalHealthThreshold" %}}

> **float**

### {{% prop-heading "hitShaderDamageMultiplier" %}}

> **float**

### {{% prop-heading "hitShaderMinDamage" %}}

> **float**

### {{% prop-heading "ekgLineThickness" %}}

> **float**

### {{% prop-heading "shockTraumaAbilityIndex" %}}

> **int**

### {{% prop-heading "rangerPTProgramAbilityIndex" %}}

> **int**

### {{% prop-heading "focusAbilityIndex" %}}

> **int**

### {{% prop-heading "ekgLineAlpha" %}}

> **float**

### {{% prop-heading "hitShaderGradientDurationMultiplier" %}}

> **float**

### {{% prop-heading "hitShaderMaxDamage" %}}

> **float**

### {{% prop-heading "hitShaderIndicatorDurationMultiplier" %}}

> **float**

### {{% prop-heading "useVehicleTeamSpawn" %}}

> **bool**

### {{% prop-heading "useSquadSpawn" %}}

> **bool**

### {{% prop-heading "spawnOnSquadLeaders" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UISoldierCompData](/vext/ref/fb/uisoldiercompdata) type.

