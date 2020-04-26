---
title: BreathControlData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[BreathControlData](#constructor-0)**() |
| **[BreathControlData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[BreathControlData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "breathControlTime" >}} | float |
| {{< prop "breathControlReleaseTime" >}} | float |
| {{< prop "breathControlPenaltyMultiplier" >}} | float |
| {{< prop "breathControlPenaltyTimeout" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BreathControlData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BreathControlData {#constructor-0}

> **BreathControlData**()

Creates a new [BreathControlData](/vext/ref/fb/breathcontroldata) frostbite instance.

### BreathControlData {#constructor-1}

> **BreathControlData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BreathControlData](/vext/ref/fb/breathcontroldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### BreathControlData {#constructor-2}

> **BreathControlData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [BreathControlData](/vext/ref/fb/breathcontroldata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [BreathControlData](/vext/ref/fb/breathcontroldata). |

## Properties

### {{% prop-heading "breathControlTime" %}}

> **float**

### {{% prop-heading "breathControlReleaseTime" %}}

> **float**

### {{% prop-heading "breathControlPenaltyMultiplier" %}}

> **float**

### {{% prop-heading "breathControlPenaltyTimeout" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BreathControlData](/vext/ref/fb/breathcontroldata) type.

