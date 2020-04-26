---
title: OperandLogicNode
---

Inherits from 
[UINodeData](/vext/ref/fb/uinodedata)

## Summary
### Constructors
| |
| ----------- |
| **[OperandLogicNode](#constructor-0)**() |
| **[OperandLogicNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OperandLogicNode](#constructor-2)**(other: [UINodeData](/vext/ref/fb/uinodedata)) |
| **[OperandLogicNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "leftDataSourceInfo" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "operator" >}} | [UILogicOperator](/vext/ref/fb/uilogicoperator) |
| {{< prop "rightDataSourceInfo" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "rightLiteralOperand" >}} | float |
| {{< prop "inValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "trueValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |
| {{< prop "falseValue" >}} | [UINodePort](/vext/ref/fb/uinodeport) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OperandLogicNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OperandLogicNode {#constructor-0}
> **OperandLogicNode**()

Creates a new [OperandLogicNode](/vext/ref/fb/operandlogicnode) frostbite instance.

### OperandLogicNode {#constructor-1}
> **OperandLogicNode**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OperandLogicNode](/vext/ref/fb/operandlogicnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OperandLogicNode {#constructor-2}
> **OperandLogicNode**(other: [UINodeData](/vext/ref/fb/uinodedata))

Casts an instance of type [UINodeData](/vext/ref/fb/uinodedata) to [OperandLogicNode](/vext/ref/fb/operandlogicnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UINodeData](/vext/ref/fb/uinodedata) | The instance to cast to [OperandLogicNode](/vext/ref/fb/operandlogicnode). |

### OperandLogicNode {#constructor-3}
> **OperandLogicNode**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OperandLogicNode](/vext/ref/fb/operandlogicnode). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OperandLogicNode](/vext/ref/fb/operandlogicnode). |

## Properties
### {{% prop-heading "leftDataSourceInfo" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "operator" %}}
> **[UILogicOperator](/vext/ref/fb/uilogicoperator)**

### {{% prop-heading "rightDataSourceInfo" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "rightLiteralOperand" %}}
> **float**

### {{% prop-heading "inValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "trueValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

### {{% prop-heading "falseValue" %}}
> **[UINodePort](/vext/ref/fb/uinodeport)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OperandLogicNode](/vext/ref/fb/operandlogicnode) type.

