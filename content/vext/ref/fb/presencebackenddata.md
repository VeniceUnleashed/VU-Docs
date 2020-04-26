---
title: PresenceBackendData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[PresenceBackendData](#constructor-0)**() |
| **[PresenceBackendData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PresenceBackendData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PresenceBackendData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "requests" >}} | [PresenceRequest](/vext/ref/fb/presencerequest)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PresenceBackendData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PresenceBackendData {#constructor-0}
> **PresenceBackendData**()

Creates a new [PresenceBackendData](/vext/ref/fb/presencebackenddata) frostbite instance.

### PresenceBackendData {#constructor-1}
> **PresenceBackendData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PresenceBackendData](/vext/ref/fb/presencebackenddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PresenceBackendData {#constructor-2}
> **PresenceBackendData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PresenceBackendData](/vext/ref/fb/presencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PresenceBackendData](/vext/ref/fb/presencebackenddata). |

### PresenceBackendData {#constructor-3}
> **PresenceBackendData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PresenceBackendData](/vext/ref/fb/presencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PresenceBackendData](/vext/ref/fb/presencebackenddata). |

## Properties
### {{% prop-heading "requests" %}}
> **[PresenceRequest](/vext/ref/fb/presencerequest)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PresenceBackendData](/vext/ref/fb/presencebackenddata) type.

