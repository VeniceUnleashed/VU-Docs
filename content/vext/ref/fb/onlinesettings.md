---
title: OnlineSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[OnlineSettings](#constructor-0)**() |
| **[OnlineSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OnlineSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[OnlineSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "backend" >}} | [BackendType](/vext/ref/fb/backendtype) |
| {{< prop "peerBackend" >}} | [BackendType](/vext/ref/fb/backendtype) |
| {{< prop "environment" >}} | [OnlineEnvironment](/vext/ref/fb/onlineenvironment) |
| {{< prop "matchmakingToken" >}} | string |
| {{< prop "provider" >}} | [OnlineProviderAsset](/vext/ref/fb/onlineproviderasset) \| nil |
| {{< prop "richPresence" >}} | [RichPresenceData](/vext/ref/fb/richpresencedata) \| nil |
| {{< prop "chatSettings" >}} | [ChatSettings](/vext/ref/fb/chatsettings) \| nil |
| {{< prop "matchmakingOptions" >}} | string |
| {{< prop "region" >}} | string |
| {{< prop "negativeUserCacheRefreshPeriod" >}} | int |
| {{< prop "matchmakingMode" >}} | string |
| {{< prop "country" >}} | string |
| {{< prop "isSecure" >}} | bool |
| {{< prop "supportHostMigration" >}} | bool |
| {{< prop "matchmakeImmediately" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnlineSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnlineSettings {#constructor-0}
> **OnlineSettings**()

Creates a new [OnlineSettings](/vext/ref/fb/onlinesettings) frostbite instance.

### OnlineSettings {#constructor-1}
> **OnlineSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OnlineSettings](/vext/ref/fb/onlinesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OnlineSettings {#constructor-2}
> **OnlineSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [OnlineSettings](/vext/ref/fb/onlinesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [OnlineSettings](/vext/ref/fb/onlinesettings). |

### OnlineSettings {#constructor-3}
> **OnlineSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnlineSettings](/vext/ref/fb/onlinesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OnlineSettings](/vext/ref/fb/onlinesettings). |

## Properties
### {{% prop-heading "backend" %}}
> **[BackendType](/vext/ref/fb/backendtype)**

### {{% prop-heading "peerBackend" %}}
> **[BackendType](/vext/ref/fb/backendtype)**

### {{% prop-heading "environment" %}}
> **[OnlineEnvironment](/vext/ref/fb/onlineenvironment)**

### {{% prop-heading "matchmakingToken" %}}
> **string**

### {{% prop-heading "provider" %}}
> **[OnlineProviderAsset](/vext/ref/fb/onlineproviderasset)** | **nil**

### {{% prop-heading "richPresence" %}}
> **[RichPresenceData](/vext/ref/fb/richpresencedata)** | **nil**

### {{% prop-heading "chatSettings" %}}
> **[ChatSettings](/vext/ref/fb/chatsettings)** | **nil**

### {{% prop-heading "matchmakingOptions" %}}
> **string**

### {{% prop-heading "region" %}}
> **string**

### {{% prop-heading "negativeUserCacheRefreshPeriod" %}}
> **int**

### {{% prop-heading "matchmakingMode" %}}
> **string**

### {{% prop-heading "country" %}}
> **string**

### {{% prop-heading "isSecure" %}}
> **bool**

### {{% prop-heading "supportHostMigration" %}}
> **bool**

### {{% prop-heading "matchmakeImmediately" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnlineSettings](/vext/ref/fb/onlinesettings) type.

