---
title: VeniceOnlineSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[VeniceOnlineSettings](#constructor-0)**() |
| **[VeniceOnlineSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VeniceOnlineSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[VeniceOnlineSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "webFeedMaxFetchAttempts" >}} | int |
| {{< prop "platforms" >}} | [OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)[] |
| {{< prop "serviceNameOverride" >}} | string |
| {{< prop "clientGameConfigurationOverride" >}} | string |
| {{< prop "blazeLogLevel" >}} | int |
| {{< prop "dirtySockLogLevel" >}} | int |
| {{< prop "battlelogReportURL" >}} | string |
| {{< prop "entitlementQueries" >}} | [EntitlementQuery](/vext/ref/fb/entitlementquery)[] |
| {{< prop "webFeedUrlPrefix" >}} | string |
| {{< prop "snowrollerOrphanTimeout" >}} | float |
| {{< prop "queueCapacityOverride" >}} | int |
| {{< prop "webFeedCountUrlPrefix" >}} | string |
| {{< prop "matchFeedMaxFetchAttempts" >}} | int |
| {{< prop "dogTagUploadPolicy" >}} | [DTagUploadPolicy](/vext/ref/fb/dtaguploadpolicy) |
| {{< prop "webFeedUnreadCountFetchPeriod" >}} | int |
| {{< prop "matchImagesUrlPrefix" >}} | string |
| {{< prop "webFeedMaxItems" >}} | int |
| {{< prop "webFeedMinimumMillisecondsBetweenRequests" >}} | int |
| {{< prop "webFeedMillisecondsBetweenNewRequestAttempt" >}} | int |
| {{< prop "matchFeedMinimumMillisecondsBetweenRequests" >}} | int |
| {{< prop "matchFeedMinimumMillisecondsBetweenMatchRequests" >}} | int |
| {{< prop "pingPeriod" >}} | int |
| {{< prop "matchFeedMinimumMillisecondsBetweenNewRequestAttempt" >}} | int |
| {{< prop "matchFeedDetailsUrlPrefix" >}} | string |
| {{< prop "matchFeedListUrlPrefix" >}} | string |
| {{< prop "matchFeedMinimumMillisecondsBetweenMatchReloads" >}} | int |
| {{< prop "enableSnowroller" >}} | bool |
| {{< prop "enableQoS" >}} | bool |
| {{< prop "punkBusterActivateClient" >}} | bool |
| {{< prop "punkBusterActivateServer" >}} | bool |
| {{< prop "battlelogReport" >}} | bool |
| {{< prop "useFallback" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VeniceOnlineSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VeniceOnlineSettings {#constructor-0}
> **VeniceOnlineSettings**()

Creates a new [VeniceOnlineSettings](/vext/ref/fb/veniceonlinesettings) frostbite instance.

### VeniceOnlineSettings {#constructor-1}
> **VeniceOnlineSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VeniceOnlineSettings](/vext/ref/fb/veniceonlinesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VeniceOnlineSettings {#constructor-2}
> **VeniceOnlineSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [VeniceOnlineSettings](/vext/ref/fb/veniceonlinesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [VeniceOnlineSettings](/vext/ref/fb/veniceonlinesettings). |

### VeniceOnlineSettings {#constructor-3}
> **VeniceOnlineSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceOnlineSettings](/vext/ref/fb/veniceonlinesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VeniceOnlineSettings](/vext/ref/fb/veniceonlinesettings). |

## Properties
### {{% prop-heading "webFeedMaxFetchAttempts" %}}
> **int**

### {{% prop-heading "platforms" %}}
> **[OnlinePlatformConfiguration](/vext/ref/fb/onlineplatformconfiguration)**[]

### {{% prop-heading "serviceNameOverride" %}}
> **string**

### {{% prop-heading "clientGameConfigurationOverride" %}}
> **string**

### {{% prop-heading "blazeLogLevel" %}}
> **int**

### {{% prop-heading "dirtySockLogLevel" %}}
> **int**

### {{% prop-heading "battlelogReportURL" %}}
> **string**

### {{% prop-heading "entitlementQueries" %}}
> **[EntitlementQuery](/vext/ref/fb/entitlementquery)**[]

### {{% prop-heading "webFeedUrlPrefix" %}}
> **string**

### {{% prop-heading "snowrollerOrphanTimeout" %}}
> **float**

### {{% prop-heading "queueCapacityOverride" %}}
> **int**

### {{% prop-heading "webFeedCountUrlPrefix" %}}
> **string**

### {{% prop-heading "matchFeedMaxFetchAttempts" %}}
> **int**

### {{% prop-heading "dogTagUploadPolicy" %}}
> **[DTagUploadPolicy](/vext/ref/fb/dtaguploadpolicy)**

### {{% prop-heading "webFeedUnreadCountFetchPeriod" %}}
> **int**

### {{% prop-heading "matchImagesUrlPrefix" %}}
> **string**

### {{% prop-heading "webFeedMaxItems" %}}
> **int**

### {{% prop-heading "webFeedMinimumMillisecondsBetweenRequests" %}}
> **int**

### {{% prop-heading "webFeedMillisecondsBetweenNewRequestAttempt" %}}
> **int**

### {{% prop-heading "matchFeedMinimumMillisecondsBetweenRequests" %}}
> **int**

### {{% prop-heading "matchFeedMinimumMillisecondsBetweenMatchRequests" %}}
> **int**

### {{% prop-heading "pingPeriod" %}}
> **int**

### {{% prop-heading "matchFeedMinimumMillisecondsBetweenNewRequestAttempt" %}}
> **int**

### {{% prop-heading "matchFeedDetailsUrlPrefix" %}}
> **string**

### {{% prop-heading "matchFeedListUrlPrefix" %}}
> **string**

### {{% prop-heading "matchFeedMinimumMillisecondsBetweenMatchReloads" %}}
> **int**

### {{% prop-heading "enableSnowroller" %}}
> **bool**

### {{% prop-heading "enableQoS" %}}
> **bool**

### {{% prop-heading "punkBusterActivateClient" %}}
> **bool**

### {{% prop-heading "punkBusterActivateServer" %}}
> **bool**

### {{% prop-heading "battlelogReport" %}}
> **bool**

### {{% prop-heading "useFallback" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VeniceOnlineSettings](/vext/ref/fb/veniceonlinesettings) type.

