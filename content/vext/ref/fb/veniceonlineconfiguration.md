---
title: VeniceOnlineConfiguration
---

Inherits from [OnlineConfiguration](/vext/ref/fb/onlineconfiguration)

## Summary

### Constructors

|  |
| --- |
| **[VeniceOnlineConfiguration](#constructor-0)**() |
| **[VeniceOnlineConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VeniceOnlineConfiguration](#constructor-2)**(other: [OnlineConfiguration](/vext/ref/fb/onlineconfiguration)) |
| **[VeniceOnlineConfiguration](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[VeniceOnlineConfiguration](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "platforms" >}} | [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)[] |
| {{< prop "entitlementQueries" >}} | [EntitlementQuery](/vext/ref/fb/entitlementquery)[] |
| {{< prop "useFallback" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VeniceOnlineConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VeniceOnlineConfiguration {#constructor-0}

> **VeniceOnlineConfiguration**()

Creates a new [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration) frostbite instance.

### VeniceOnlineConfiguration {#constructor-1}

> **VeniceOnlineConfiguration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VeniceOnlineConfiguration {#constructor-2}

> **VeniceOnlineConfiguration**(other: [OnlineConfiguration](/vext/ref/fb/onlineconfiguration))

Casts an instance of type [OnlineConfiguration](/vext/ref/fb/onlineconfiguration) to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [OnlineConfiguration](/vext/ref/fb/onlineconfiguration) | The instance to cast to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration). |

### VeniceOnlineConfiguration {#constructor-3}

> **VeniceOnlineConfiguration**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration). |

### VeniceOnlineConfiguration {#constructor-4}

> **VeniceOnlineConfiguration**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration). |

## Properties

### {{% prop-heading "platforms" %}}

> **[OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)**[]

### {{% prop-heading "entitlementQueries" %}}

> **[EntitlementQuery](/vext/ref/fb/entitlementquery)**[]

### {{% prop-heading "useFallback" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VeniceOnlineConfiguration](/vext/ref/fb/veniceonlineconfiguration) type.

