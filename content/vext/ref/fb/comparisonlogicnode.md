---
title: ComparisonLogicNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[ComparisonLogicNode](#constructor-0)**() |
| **[ComparisonLogicNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ComparisonLogicNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[ComparisonLogicNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "outputs" >}} | [UINodePort](/vext/ref/fb/uinodeport)[] |
| {{< prop "dataSourceInfo" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "skipFractionals" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ComparisonLogicNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ComparisonLogicNode {#constructor-0}
> **ComparisonLogicNode**()

Creates a new [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode) frostbite instance.

### ComparisonLogicNode {#constructor-1}
> **ComparisonLogicNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ComparisonLogicNode {#constructor-2}
> **ComparisonLogicNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode). |

### ComparisonLogicNode {#constructor-3}
> **ComparisonLogicNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode). |

## Properties
### {{% prop-heading "inValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "outputs" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)**[]

### {{% prop-heading "dataSourceInfo" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "skipFractionals" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode) type.

