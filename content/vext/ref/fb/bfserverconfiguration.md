---
title: BFServerConfiguration
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[BFServerConfiguration](#constructor-0)**() |
| **[BFServerConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BFServerConfiguration](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "schedules" >}} | [BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BFServerConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BFServerConfiguration {#constructor-0}
> **BFServerConfiguration**()

Creates a new [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration) frostbite instance.

### BFServerConfiguration {#constructor-1}
> **BFServerConfiguration**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BFServerConfiguration {#constructor-2}
> **BFServerConfiguration**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration). |

## Properties
### {{% prop-heading "schedules" %}}
> **[BFServerConfigurationSchedule](/vext/ref/fb/bfserverconfigurationschedule)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BFServerConfiguration](/vext/ref/fb/bfserverconfiguration) type.

