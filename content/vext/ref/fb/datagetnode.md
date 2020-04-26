---
title: DataGetNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[DataGetNode](#constructor-0)**() |
| **[DataGetNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DataGetNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[DataGetNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "out" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "dataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataGetNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataGetNode {#constructor-0}
> **DataGetNode**()

Creates a new [DataGetNode](/vext/ref/fb/datagetnode) frostbite instance.

### DataGetNode {#constructor-1}
> **DataGetNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DataGetNode](/vext/ref/fb/datagetnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DataGetNode {#constructor-2}
> **DataGetNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [DataGetNode](/vext/ref/fb/datagetnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [DataGetNode](/vext/ref/fb/datagetnode). |

### DataGetNode {#constructor-3}
> **DataGetNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataGetNode](/vext/ref/fb/datagetnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DataGetNode](/vext/ref/fb/datagetnode). |

## Properties
### {{% prop-heading "inValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "out" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "dataSource" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataGetNode](/vext/ref/fb/datagetnode) type.

