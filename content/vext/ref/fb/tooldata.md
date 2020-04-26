---
title: ToolData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[ToolData](#constructor-0)**() |
| **[ToolData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ToolData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "isAlwaysActive" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ToolData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ToolData {#constructor-0}
> **ToolData**()

Creates a new [ToolData](/vext/ref/fb/tooldata) frostbite instance.

### ToolData {#constructor-1}
> **ToolData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ToolData](/vext/ref/fb/tooldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ToolData {#constructor-2}
> **ToolData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ToolData](/vext/ref/fb/tooldata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ToolData](/vext/ref/fb/tooldata). |

## Properties
### {{% prop-heading "isAlwaysActive" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ToolData](/vext/ref/fb/tooldata) type.

