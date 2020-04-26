---
title: OnlineEnvironmentUrlData
---

## Summary

### Constructors

|  |
| --- |
| **[OnlineEnvironmentUrlData](#constructor-0)**() |
| **[OnlineEnvironmentUrlData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "url" >}} | string |
| {{< prop "environment" >}} | [OnlineEnvironment](/vext/ref/fb/onlineenvironment) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OnlineEnvironmentUrlData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OnlineEnvironmentUrlData {#constructor-0}

> **OnlineEnvironmentUrlData**()

Creates a new [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata) frostbite instance.

### OnlineEnvironmentUrlData {#constructor-1}

> **OnlineEnvironmentUrlData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "url" %}}

> **string**

### {{% prop-heading "environment" %}}

> **[OnlineEnvironment](/vext/ref/fb/onlineenvironment)**

## Methods

### Clone {#clone}

> **Clone**(): [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata) type.

