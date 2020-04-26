---
title: VeniceUISettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[VeniceUISettings](#constructor-0)**() |
| **[VeniceUISettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VeniceUISettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[VeniceUISettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "metaDataAssetPath" >}} | string |
| {{< prop "getStatsInOnlineFlow" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VeniceUISettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VeniceUISettings {#constructor-0}
> **VeniceUISettings**()

Creates a new [VeniceUISettings](/vext/ref/fb/veniceuisettings) frostbite instance.

### VeniceUISettings {#constructor-1}
> **VeniceUISettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VeniceUISettings](/vext/ref/fb/veniceuisettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VeniceUISettings {#constructor-2}
> **VeniceUISettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [VeniceUISettings](/vext/ref/fb/veniceuisettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [VeniceUISettings](/vext/ref/fb/veniceuisettings). |

### VeniceUISettings {#constructor-3}
> **VeniceUISettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VeniceUISettings](/vext/ref/fb/veniceuisettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VeniceUISettings](/vext/ref/fb/veniceuisettings). |

## Properties
### {{% prop-heading "metaDataAssetPath" %}}
> **string**

### {{% prop-heading "getStatsInOnlineFlow" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VeniceUISettings](/vext/ref/fb/veniceuisettings) type.

