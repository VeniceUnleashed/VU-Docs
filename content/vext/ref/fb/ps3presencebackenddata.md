---
title: Ps3PresenceBackendData
---

Inherits from 
[PresenceBackendData](/vext/ref/fb/presencebackenddata)

## Summary
### Constructors
| |
| ----------- |
| **[Ps3PresenceBackendData](#constructor-0)**() |
| **[Ps3PresenceBackendData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[Ps3PresenceBackendData](#constructor-2)**(other: [PresenceBackendData](/vext/ref/fb/presencebackenddata)) |
| **[Ps3PresenceBackendData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[Ps3PresenceBackendData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "communicationId" >}} | string |
| {{< prop "communicationSignature" >}} | string |
| {{< prop "skuSettings" >}} | [Ps3SkuSettings](/vext/ref/fb/ps3skusettings)[] |
| {{< prop "parentalLockAgeSettings" >}} | [Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "Ps3PresenceBackendData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### Ps3PresenceBackendData {#constructor-0}
> **Ps3PresenceBackendData**()

Creates a new [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata) frostbite instance.

### Ps3PresenceBackendData {#constructor-1}
> **Ps3PresenceBackendData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### Ps3PresenceBackendData {#constructor-2}
> **Ps3PresenceBackendData**(other: [PresenceBackendData](/vext/ref/fb/presencebackenddata))

Casts an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata) to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PresenceBackendData](/vext/ref/fb/presencebackenddata) | The instance to cast to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata). |

### Ps3PresenceBackendData {#constructor-3}
> **Ps3PresenceBackendData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata). |

### Ps3PresenceBackendData {#constructor-4}
> **Ps3PresenceBackendData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata). |

## Properties
### {{% prop-heading "communicationId" %}}
> **string**

### {{% prop-heading "communicationSignature" %}}
> **string**

### {{% prop-heading "skuSettings" %}}
> **[Ps3SkuSettings](/vext/ref/fb/ps3skusettings)**[]

### {{% prop-heading "parentalLockAgeSettings" %}}
> **[Ps3ParentalLockAgeSettings](/vext/ref/fb/ps3parentallockagesettings)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [Ps3PresenceBackendData](/vext/ref/fb/ps3presencebackenddata) type.

