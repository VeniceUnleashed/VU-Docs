---
title: DamageScoringHandlerData
---

Inherits from [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)

## Summary

### Constructors

|  |
| --- |
| **[DamageScoringHandlerData](#constructor-0)**() |
| **[DamageScoringHandlerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DamageScoringHandlerData](#constructor-2)**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata)) |
| **[DamageScoringHandlerData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "repairVehicleLimit" >}} | float |
| {{< prop "damageTeamVehicleLimit" >}} | float |
| {{< prop "teamHealingLimit" >}} | float |
| {{< prop "teamDamageLimit" >}} | float |
| {{< prop "killAssistLimit" >}} | float |
| {{< prop "killAssistTimeout" >}} | float |
| {{< prop "vehicleDestroyAssistLimit" >}} | float |
| {{< prop "saviorKillTimeout" >}} | float |
| {{< prop "saviorDamageLimit" >}} | float |
| {{< prop "hotVehicleTimeout" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DamageScoringHandlerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DamageScoringHandlerData {#constructor-0}

> **DamageScoringHandlerData**()

Creates a new [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata) frostbite instance.

### DamageScoringHandlerData {#constructor-1}

> **DamageScoringHandlerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DamageScoringHandlerData {#constructor-2}

> **DamageScoringHandlerData**(other: [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata))

Casts an instance of type [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) to [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ScoringHandlerData](/vext/ref/fb/scoringhandlerdata) | The instance to cast to [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata). |

### DamageScoringHandlerData {#constructor-3}

> **DamageScoringHandlerData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata). |

## Properties

### {{% prop-heading "repairVehicleLimit" %}}

> **float**

### {{% prop-heading "damageTeamVehicleLimit" %}}

> **float**

### {{% prop-heading "teamHealingLimit" %}}

> **float**

### {{% prop-heading "teamDamageLimit" %}}

> **float**

### {{% prop-heading "killAssistLimit" %}}

> **float**

### {{% prop-heading "killAssistTimeout" %}}

> **float**

### {{% prop-heading "vehicleDestroyAssistLimit" %}}

> **float**

### {{% prop-heading "saviorKillTimeout" %}}

> **float**

### {{% prop-heading "saviorDamageLimit" %}}

> **float**

### {{% prop-heading "hotVehicleTimeout" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DamageScoringHandlerData](/vext/ref/fb/damagescoringhandlerdata) type.

