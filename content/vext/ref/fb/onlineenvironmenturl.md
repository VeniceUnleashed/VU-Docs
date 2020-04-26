---
title: OnlineEnvironmentUrl
---

## Summary

### Constructors

|  |
| --- |
| **[OnlineEnvironmentUrl](#constructor-0)**() |
| **[OnlineEnvironmentUrl](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "urls" >}} | [OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OnlineEnvironmentUrl" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OnlineEnvironmentUrl {#constructor-0}

> **OnlineEnvironmentUrl**()

Creates a new [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) frostbite instance.

### OnlineEnvironmentUrl {#constructor-1}

> **OnlineEnvironmentUrl**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "urls" %}}

> **[OnlineEnvironmentUrlData](/vext/ref/fb/onlineenvironmenturldata)**[]

## Methods

### Clone {#clone}

> **Clone**(): [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) type.

