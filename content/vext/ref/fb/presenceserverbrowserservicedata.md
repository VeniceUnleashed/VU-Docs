---
title: PresenceServerBrowserServiceData
---

Inherits from [PresenceServiceData](/vext/ref/fb/presenceservicedata)

## Summary

### Constructors

|  |
| --- |
| **[PresenceServerBrowserServiceData](#constructor-0)**() |
| **[PresenceServerBrowserServiceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PresenceServerBrowserServiceData](#constructor-2)**(other: [PresenceServiceData](/vext/ref/fb/presenceservicedata)) |
| **[PresenceServerBrowserServiceData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PresenceServerBrowserServiceData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "filterCriterias" >}} | [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria) |
| {{< prop "listCapacity" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PresenceServerBrowserServiceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PresenceServerBrowserServiceData {#constructor-0}

> **PresenceServerBrowserServiceData**()

Creates a new [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata) frostbite instance.

### PresenceServerBrowserServiceData {#constructor-1}

> **PresenceServerBrowserServiceData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PresenceServerBrowserServiceData {#constructor-2}

> **PresenceServerBrowserServiceData**(other: [PresenceServiceData](/vext/ref/fb/presenceservicedata))

Casts an instance of type [PresenceServiceData](/vext/ref/fb/presenceservicedata) to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PresenceServiceData](/vext/ref/fb/presenceservicedata) | The instance to cast to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata). |

### PresenceServerBrowserServiceData {#constructor-3}

> **PresenceServerBrowserServiceData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata). |

### PresenceServerBrowserServiceData {#constructor-4}

> **PresenceServerBrowserServiceData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata). |

## Properties

### {{% prop-heading "filterCriterias" %}}

> **[MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria)**

### {{% prop-heading "listCapacity" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PresenceServerBrowserServiceData](/vext/ref/fb/presenceserverbrowserservicedata) type.

