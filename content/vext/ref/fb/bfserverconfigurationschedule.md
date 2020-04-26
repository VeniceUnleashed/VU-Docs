---
title: BFServerConfigurationSchedule
---

## Summary

### Constructors

|  |
| --- |
| **[BFServerConfigurationSchedule](#constructor-0)**() |
| **[BFServerConfigurationSchedule](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "licenses" >}} | string[] |
| {{< prop "levels" >}} | string[] |
| {{< prop "data" >}} | [BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BFServerConfigurationSchedule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BFServerConfigurationSchedule {#constructor-0}

> **BFServerConfigurationSchedule**()

Creates a new [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule) frostbite instance.

### BFServerConfigurationSchedule {#constructor-1}

> **BFServerConfigurationSchedule**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "licenses" %}}

> **string**[]

### {{% prop-heading "levels" %}}

> **string**[]

### {{% prop-heading "data" %}}

> **[BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata)**

## Methods

### Clone {#clone}

> **Clone**(): [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule) type.

