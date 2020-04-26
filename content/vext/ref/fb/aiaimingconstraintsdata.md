---
title: AIAimingConstraintsData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AIAimingConstraintsData](#constructor-0)**() |
| **[AIAimingConstraintsData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AIAimingConstraintsData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minYaw" >}} | float |
| {{< prop "maxYaw" >}} | float |
| {{< prop "minPitch" >}} | float |
| {{< prop "maxPitch" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AIAimingConstraintsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AIAimingConstraintsData {#constructor-0}

> **AIAimingConstraintsData**()

Creates a new [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata) frostbite instance.

### AIAimingConstraintsData {#constructor-1}

> **AIAimingConstraintsData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AIAimingConstraintsData {#constructor-2}

> **AIAimingConstraintsData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata). |

## Properties

### {{% prop-heading "minYaw" %}}

> **float**

### {{% prop-heading "maxYaw" %}}

> **float**

### {{% prop-heading "minPitch" %}}

> **float**

### {{% prop-heading "maxPitch" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AIAimingConstraintsData](/vext/ref/fb/aiaimingconstraintsdata) type.

