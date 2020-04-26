---
title: OnlineProviderAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[OnlineProviderAsset](#constructor-0)**() |
| **[OnlineProviderAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[OnlineProviderAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[OnlineProviderAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "configurations" >}} | [OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OnlineProviderAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OnlineProviderAsset {#constructor-0}

> **OnlineProviderAsset**()

Creates a new [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset) frostbite instance.

### OnlineProviderAsset {#constructor-1}

> **OnlineProviderAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### OnlineProviderAsset {#constructor-2}

> **OnlineProviderAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset). |

### OnlineProviderAsset {#constructor-3}

> **OnlineProviderAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset). |

## Properties

### {{% prop-heading "configurations" %}}

> **[OnlineProviderConfiguration](/vext/ref/fb/onlineproviderconfiguration)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset) type.

