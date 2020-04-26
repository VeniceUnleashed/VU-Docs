---
title: OnlineConfiguration
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[OnlineConfiguration](#constructor-0)**() |
| **[OnlineConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[OnlineConfiguration](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[OnlineConfiguration](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "backend" >}} | [BackendType](/vext/ref/fb/backendtype) |
| {{< prop "provider" >}} | [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset) \| nil |
| {{< prop "richPresence" >}} | [RichPresenceData](/vext/ref/fb/richpresencedata) \| nil |
| {{< prop "chat" >}} | [ChatSettings](/vext/ref/fb/chatsettings) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OnlineConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OnlineConfiguration {#constructor-0}

> **OnlineConfiguration**()

Creates a new [OnlineConfiguration](/vext/ref/fb/onlineconfiguration) frostbite instance.

### OnlineConfiguration {#constructor-1}

> **OnlineConfiguration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OnlineConfiguration](/vext/ref/fb/onlineconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### OnlineConfiguration {#constructor-2}

> **OnlineConfiguration**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [OnlineConfiguration](/vext/ref/fb/onlineconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [OnlineConfiguration](/vext/ref/fb/onlineconfiguration). |

### OnlineConfiguration {#constructor-3}

> **OnlineConfiguration**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [OnlineConfiguration](/vext/ref/fb/onlineconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [OnlineConfiguration](/vext/ref/fb/onlineconfiguration). |

## Properties

### {{% prop-heading "backend" %}}

> **[BackendType](/vext/ref/fb/backendtype)**

### {{% prop-heading "provider" %}}

> **[OnlineProviderAsset](/vext/ref/fb/onlineproviderasset)** \| **nil**

### {{% prop-heading "richPresence" %}}

> **[RichPresenceData](/vext/ref/fb/richpresencedata)** \| **nil**

### {{% prop-heading "chat" %}}

> **[ChatSettings](/vext/ref/fb/chatsettings)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OnlineConfiguration](/vext/ref/fb/onlineconfiguration) type.

