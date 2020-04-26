---
title: EventScaleData
---

## Summary

### Constructors

|  |
| --- |
| **[EventScaleData](#constructor-0)**() |
| **[EventScaleData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "event" >}} | [StatEvent](/vext/ref/fb/statevent) |
| {{< prop "scale" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EventScaleData](/vext/ref/fb/eventscaledata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EventScaleData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EventScaleData {#constructor-0}

> **EventScaleData**()

Creates a new [EventScaleData](/vext/ref/fb/eventscaledata) frostbite instance.

### EventScaleData {#constructor-1}

> **EventScaleData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EventScaleData](/vext/ref/fb/eventscaledata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "event" %}}

> **[StatEvent](/vext/ref/fb/statevent)**

### {{% prop-heading "scale" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [EventScaleData](/vext/ref/fb/eventscaledata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EventScaleData](/vext/ref/fb/eventscaledata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EventScaleData](/vext/ref/fb/eventscaledata) type.

