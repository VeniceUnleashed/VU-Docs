---
title: AwardStatus
---

## Summary

### Constructors

|  |
| --- |
| **[AwardStatus](#constructor-0)**() |
| **[AwardStatus](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "code" >}} | string |
| {{< prop "currentValue" >}} | int |
| {{< prop "originalValue" >}} | int |
| {{< prop "counters" >}} | [CounterStatus](/vext/ref/fb/counterstatus)[] |
| {{< prop "isCounting" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AwardStatus](/vext/ref/fb/awardstatus) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AwardStatus" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AwardStatus {#constructor-0}

> **AwardStatus**()

Creates a new [AwardStatus](/vext/ref/fb/awardstatus) frostbite instance.

### AwardStatus {#constructor-1}

> **AwardStatus**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AwardStatus](/vext/ref/fb/awardstatus) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "code" %}}

> **string**

### {{% prop-heading "currentValue" %}}

> **int**

### {{% prop-heading "originalValue" %}}

> **int**

### {{% prop-heading "counters" %}}

> **[CounterStatus](/vext/ref/fb/counterstatus)**[]

### {{% prop-heading "isCounting" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [AwardStatus](/vext/ref/fb/awardstatus)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AwardStatus](/vext/ref/fb/awardstatus)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AwardStatus](/vext/ref/fb/awardstatus) type.

