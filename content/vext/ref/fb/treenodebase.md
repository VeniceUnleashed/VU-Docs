---
title: TreeNodeBase
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[TreeNodeBase](#constructor-0)**() |
| **[TreeNodeBase](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[TreeNodeBase](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "nodeName" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TreeNodeBase" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TreeNodeBase {#constructor-0}
> **TreeNodeBase**()

Creates a new [TreeNodeBase](/vext/ref/fb/treenodebase) frostbite instance.

### TreeNodeBase {#constructor-1}
> **TreeNodeBase**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [TreeNodeBase](/vext/ref/fb/treenodebase) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### TreeNodeBase {#constructor-2}
> **TreeNodeBase**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TreeNodeBase](/vext/ref/fb/treenodebase). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [TreeNodeBase](/vext/ref/fb/treenodebase). |

## Properties
### {{% prop-heading "nodeName" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TreeNodeBase](/vext/ref/fb/treenodebase) type.

