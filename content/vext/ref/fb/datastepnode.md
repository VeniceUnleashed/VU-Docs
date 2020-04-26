---
title: DataStepNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[DataStepNode](#constructor-0)**() |
| **[DataStepNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DataStepNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[DataStepNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "out" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "steps" >}} | float[] |
| {{< prop "currentStepDataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "dataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataStepNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataStepNode {#constructor-0}
> **DataStepNode**()

Creates a new [DataStepNode](/vext/ref/fb/datastepnode) frostbite instance.

### DataStepNode {#constructor-1}
> **DataStepNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DataStepNode](/vext/ref/fb/datastepnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DataStepNode {#constructor-2}
> **DataStepNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [DataStepNode](/vext/ref/fb/datastepnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [DataStepNode](/vext/ref/fb/datastepnode). |

### DataStepNode {#constructor-3}
> **DataStepNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataStepNode](/vext/ref/fb/datastepnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DataStepNode](/vext/ref/fb/datastepnode). |

## Properties
### {{% prop-heading "inValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "out" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "steps" %}}
> **float**[]

### {{% prop-heading "currentStepDataSource" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "dataSource" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataStepNode](/vext/ref/fb/datastepnode) type.

