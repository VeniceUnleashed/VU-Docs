---
title: BlazePresenceBackendData
---

Inherits from 
[PresenceBackendData](/vext/ref/fb/presencebackenddata)

## Summary
### Constructors
| |
| ----------- |
| **[BlazePresenceBackendData](#constructor-0)**() |
| **[BlazePresenceBackendData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BlazePresenceBackendData](#constructor-2)**(other: [PresenceBackendData](/vext/ref/fb/presencebackenddata)) |
| **[BlazePresenceBackendData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[BlazePresenceBackendData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "matchmakingSessions" >}} | [MatchmakingSession](/vext/ref/fb/matchmakingsession)[] |
| {{< prop "useDemanglerService" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BlazePresenceBackendData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BlazePresenceBackendData {#constructor-0}
> **BlazePresenceBackendData**()

Creates a new [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata) frostbite instance.

### BlazePresenceBackendData {#constructor-1}
> **BlazePresenceBackendData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BlazePresenceBackendData {#constructor-2}
> **BlazePresenceBackendData**(other: [PresenceBackendData](/vext/ref/fb/presencebackenddata))

Casts an instance of type [PresenceBackendData](/vext/ref/fb/presencebackenddata) to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PresenceBackendData](/vext/ref/fb/presencebackenddata) | The instance to cast to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata). |

### BlazePresenceBackendData {#constructor-3}
> **BlazePresenceBackendData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata). |

### BlazePresenceBackendData {#constructor-4}
> **BlazePresenceBackendData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata). |

## Properties
### {{% prop-heading "matchmakingSessions" %}}
> **[MatchmakingSession](/vext/ref/fb/matchmakingsession)**[]

### {{% prop-heading "useDemanglerService" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BlazePresenceBackendData](/vext/ref/fb/blazepresencebackenddata) type.

