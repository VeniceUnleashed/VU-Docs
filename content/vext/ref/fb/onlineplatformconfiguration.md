---
title: OnlinePlatformConfiguration
---

## Summary

### Constructors

|  |
| --- |
| **[OnlinePlatformConfiguration](#constructor-0)**() |
| **[OnlinePlatformConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "services" >}} | [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset) \| nil |
| {{< prop "clientBackends" >}} | [PresenceBackendData](/vext/ref/fb/presencebackenddata)[] |
| {{< prop "serverBackends" >}} | [ServerBackendData](/vext/ref/fb/serverbackenddata)[] |
| {{< prop "isFallback" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OnlinePlatformConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OnlinePlatformConfiguration {#constructor-0}

> **OnlinePlatformConfiguration**()

Creates a new [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration) frostbite instance.

### OnlinePlatformConfiguration {#constructor-1}

> **OnlinePlatformConfiguration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "platform" %}}

> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "services" %}}

> **[OnlineServicesAsset](/vext/ref/fb/onlineservicesasset)** \| **nil**

### {{% prop-heading "clientBackends" %}}

> **[PresenceBackendData](/vext/ref/fb/presencebackenddata)**[]

### {{% prop-heading "serverBackends" %}}

> **[ServerBackendData](/vext/ref/fb/serverbackenddata)**[]

### {{% prop-heading "isFallback" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration) type.

