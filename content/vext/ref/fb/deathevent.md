---
title: DeathEvent
---

Inherits from [MetricEvent](/vext/ref/fb/metricevent)

## Summary

### Constructors

|  |
| --- |
| **[DeathEvent](#constructor-0)**() |
| **[DeathEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DeathEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[DeathEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "killerPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "killerId" >}} | int |
| {{< prop "time" >}} | float |
| {{< prop "weapon" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DeathEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DeathEvent {#constructor-0}

> **DeathEvent**()

Creates a new [DeathEvent](/vext/ref/fb/deathevent) frostbite instance.

### DeathEvent {#constructor-1}

> **DeathEvent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DeathEvent](/vext/ref/fb/deathevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DeathEvent {#constructor-2}

> **DeathEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [DeathEvent](/vext/ref/fb/deathevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [DeathEvent](/vext/ref/fb/deathevent). |

### DeathEvent {#constructor-3}

> **DeathEvent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DeathEvent](/vext/ref/fb/deathevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DeathEvent](/vext/ref/fb/deathevent). |

## Properties

### {{% prop-heading "position" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "killerPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "killerId" %}}

> **int**

### {{% prop-heading "time" %}}

> **float**

### {{% prop-heading "weapon" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DeathEvent](/vext/ref/fb/deathevent) type.

