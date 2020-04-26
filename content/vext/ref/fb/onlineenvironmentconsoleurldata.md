---
title: OnlineEnvironmentConsoleUrlData
---

## Summary

### Constructors

|  |
| --- |
| **[OnlineEnvironmentConsoleUrlData](#constructor-0)**() |
| **[OnlineEnvironmentConsoleUrlData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "url" >}} | [OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OnlineEnvironmentConsoleUrlData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OnlineEnvironmentConsoleUrlData {#constructor-0}

> **OnlineEnvironmentConsoleUrlData**()

Creates a new [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata) frostbite instance.

### OnlineEnvironmentConsoleUrlData {#constructor-1}

> **OnlineEnvironmentConsoleUrlData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "platform" %}}

> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "url" %}}

> **[OnlineEnvironmentUrl](/vext/ref/fb/onlineenvironmenturl)**

## Methods

### Clone {#clone}

> **Clone**(): [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OnlineEnvironmentConsoleUrlData](/vext/ref/fb/onlineenvironmentconsoleurldata) type.

