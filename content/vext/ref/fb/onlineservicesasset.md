---
title: OnlineServicesAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[OnlineServicesAsset](#constructor-0)**() |
| **[OnlineServicesAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OnlineServicesAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[OnlineServicesAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "onlineServices" >}} | [PresenceServiceData](/vext/ref/fb/presenceservicedata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OnlineServicesAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OnlineServicesAsset {#constructor-0}
> **OnlineServicesAsset**()

Creates a new [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset) frostbite instance.

### OnlineServicesAsset {#constructor-1}
> **OnlineServicesAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OnlineServicesAsset {#constructor-2}
> **OnlineServicesAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset). |

### OnlineServicesAsset {#constructor-3}
> **OnlineServicesAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset). |

## Properties
### {{% prop-heading "onlineServices" %}}
> **[PresenceServiceData](/vext/ref/fb/presenceservicedata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OnlineServicesAsset](/vext/ref/fb/onlineservicesasset) type.

