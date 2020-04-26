---
title: ParachuteStateData
---

Inherits from [CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary

### Constructors

|  |
| --- |
| **[ParachuteStateData](#constructor-0)**() |
| **[ParachuteStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ParachuteStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[ParachuteStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "deployTime" >}} | float |
| {{< prop "terminalVelocity" >}} | float |
| {{< prop "forwardDragCoefficient" >}} | float |
| {{< prop "angleOfAttack" >}} | float |
| {{< prop "bankOffset" >}} | float |
| {{< prop "throttleOffset" >}} | float |
| {{< prop "brakeOffset" >}} | float |
| {{< prop "maxRollVelocity" >}} | float |
| {{< prop "maxPitchVelocity" >}} | float |
| {{< prop "maxYawVelocity" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ParachuteStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ParachuteStateData {#constructor-0}

> **ParachuteStateData**()

Creates a new [ParachuteStateData](/vext/ref/fb/parachutestatedata) frostbite instance.

### ParachuteStateData {#constructor-1}

> **ParachuteStateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ParachuteStateData](/vext/ref/fb/parachutestatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ParachuteStateData {#constructor-2}

> **ParachuteStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [ParachuteStateData](/vext/ref/fb/parachutestatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [ParachuteStateData](/vext/ref/fb/parachutestatedata). |

### ParachuteStateData {#constructor-3}

> **ParachuteStateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ParachuteStateData](/vext/ref/fb/parachutestatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ParachuteStateData](/vext/ref/fb/parachutestatedata). |

## Properties

### {{% prop-heading "deployTime" %}}

> **float**

### {{% prop-heading "terminalVelocity" %}}

> **float**

### {{% prop-heading "forwardDragCoefficient" %}}

> **float**

### {{% prop-heading "angleOfAttack" %}}

> **float**

### {{% prop-heading "bankOffset" %}}

> **float**

### {{% prop-heading "throttleOffset" %}}

> **float**

### {{% prop-heading "brakeOffset" %}}

> **float**

### {{% prop-heading "maxRollVelocity" %}}

> **float**

### {{% prop-heading "maxPitchVelocity" %}}

> **float**

### {{% prop-heading "maxYawVelocity" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ParachuteStateData](/vext/ref/fb/parachutestatedata) type.

