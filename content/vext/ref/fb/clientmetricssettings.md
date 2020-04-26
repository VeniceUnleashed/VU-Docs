---
title: ClientMetricsSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[ClientMetricsSettings](#constructor-0)**() |
| **[ClientMetricsSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ClientMetricsSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "enabled" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ClientMetricsSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ClientMetricsSettings {#constructor-0}
> **ClientMetricsSettings**()

Creates a new [ClientMetricsSettings](/vext/ref/fb/clientmetricssettings) frostbite instance.

### ClientMetricsSettings {#constructor-1}
> **ClientMetricsSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ClientMetricsSettings](/vext/ref/fb/clientmetricssettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ClientMetricsSettings {#constructor-2}
> **ClientMetricsSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClientMetricsSettings](/vext/ref/fb/clientmetricssettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ClientMetricsSettings](/vext/ref/fb/clientmetricssettings). |

## Properties
### {{% prop-heading "enabled" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ClientMetricsSettings](/vext/ref/fb/clientmetricssettings) type.

