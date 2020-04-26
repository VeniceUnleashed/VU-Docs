---
title: DataSetNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[DataSetNode](#constructor-0)**() |
| **[DataSetNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DataSetNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[DataSetNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "out" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "param" >}} | string |
| {{< prop "dataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "setToEmptyString" >}} | bool |
| {{< prop "forceUpdate" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DataSetNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DataSetNode {#constructor-0}
> **DataSetNode**()

Creates a new [DataSetNode](/vext/ref/fb/datasetnode) frostbite instance.

### DataSetNode {#constructor-1}
> **DataSetNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DataSetNode](/vext/ref/fb/datasetnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DataSetNode {#constructor-2}
> **DataSetNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [DataSetNode](/vext/ref/fb/datasetnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [DataSetNode](/vext/ref/fb/datasetnode). |

### DataSetNode {#constructor-3}
> **DataSetNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DataSetNode](/vext/ref/fb/datasetnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DataSetNode](/vext/ref/fb/datasetnode). |

## Properties
### {{% prop-heading "inValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "out" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "param" %}}
> **string**

### {{% prop-heading "dataSource" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "setToEmptyString" %}}
> **bool**

### {{% prop-heading "forceUpdate" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DataSetNode](/vext/ref/fb/datasetnode) type.

